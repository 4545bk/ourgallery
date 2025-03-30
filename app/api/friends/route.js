import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import dbConnect, { User } from "../../../lib/mongodb";

export async function GET(request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await dbConnect();
  const user = await User.findById(session.user.id).populate("friends", "username _id");
  return NextResponse.json({ friends: user.friends }, { status: 200 });
}

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { friendId } = await request.json();
  await dbConnect();
  const user = await User.findById(session.user.id);
  const friend = await User.findById(friendId);

  if (!friend || user.friends.includes(friendId)) {
    return NextResponse.json({ error: "Invalid or already a friend" }, { status: 400 });
  }

  user.friends.push(friendId);
  friend.friends.push(session.user.id); // Mutual friendship
  await user.save();
  await friend.save();

  return NextResponse.json({ message: "Friend added", friend: { _id: friendId, username: friend.username } }, { status: 200 });
}