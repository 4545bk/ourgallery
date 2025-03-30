import { NextResponse } from "next/server";
import dbConnect, { User } from "../../../lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function PUT(request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await dbConnect();
  const { bio } = await request.json();

  const user = await User.findOneAndUpdate(
    { $or: [{ username: session.user.username }, { googleId: session.user.sub }] },
    { bio },
    { new: true }
  );

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ message: "Profile updated", user });
}

export async function GET(request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await dbConnect();
  const user = await User.findOne({
    $or: [{ username: session.user.username }, { googleId: session.user.sub }],
  });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json(user);
}