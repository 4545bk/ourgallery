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
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { channel, event, data } = await request.json();

  // Extract sender and recipient IDs from the channel (e.g., chat-user1-user2)
  const [prefix, senderId, recipientId] = channel.split("-");
  if (prefix !== "chat" || !senderId || !recipientId || senderId !== session.user.id) {
    return NextResponse.json({ error: "Invalid channel format or sender" }, { status: 400 });
  }

  // Verify recipient is a friend
  await dbConnect();
  const user = await User.findById(session.user.id);
  if (!user || !user.friends.includes(recipientId)) {
    return NextResponse.json({ error: "Recipient is not a friend" }, { status: 403 });
  }

  try {
    console.log("Sending Pusher message:", { channel, event, data });
    await pusher.trigger(channel, event, data);
    return NextResponse.json({ message: "Message sent" }, { status: 200 });
  } catch (error) {
    console.error("Pusher error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}