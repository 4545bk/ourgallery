import { getServerSession } from "next-auth";
import Pusher from "pusher";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import dbConnect, { User } from "../../../../lib/mongodb";

const pusher = new Pusher({
  appId: "1966596",
  key: "a9e989dcc04e514c8a20",
  secret: "0d17e8600208ac84e237",
  cluster: "ap2",
  useTLS: true,
});

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log("No session found in /api/pusher/auth");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { socket_id, channel_name } = await request.json();

  // Validate channel format and user participation
  const [prefix, id1, id2] = channel_name.split("-");
  if (prefix !== "chat" || !id1 || !id2 || (id1 !== session.user.id && id2 !== session.user.id)) {
    console.log("Unauthorized channel access attempt:", { channel_name, userId: session.user.id });
    return NextResponse.json({ error: "Unauthorized channel access" }, { status: 403 });
  }

  // Verify the other user is a friend
  const otherUserId = id1 === session.user.id ? id2 : id1;
  await dbConnect();
  const user = await User.findById(session.user.id);
  if (!user || !user.friends.includes(otherUserId)) {
    console.log("Channel recipient not a friend:", { channel_name, userId: session.user.id });
    return NextResponse.json({ error: "Recipient is not a friend" }, { status: 403 });
  }

  try {
    const auth = pusher.authenticate(socket_id, channel_name);
    return NextResponse.json(auth, { status: 200 });
  } catch (error) {
    console.error("Pusher auth error:", error);
    return NextResponse.json({ error: "Failed to authenticate" }, { status: 500 });
  }
}