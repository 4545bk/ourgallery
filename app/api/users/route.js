import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import dbConnect, { User } from "../../../lib/mongodb";

export async function GET(request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await dbConnect();
  const users = await User.find(
    { _id: { $ne: session.user.id } }, // Exclude current user
    "username _id" // Only return username and _id
  ).lean();

  return NextResponse.json({ users }, { status: 200 });
}