import { NextResponse } from "next/server";
import dbConnect, { Post } from "../../../../../lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../auth/[...nextauth]/route";

export async function POST(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await dbConnect();
  const { id } = params;
  const username = session.user.username;

  const post = await Post.findById(id);
  if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 });

  if (post.likedBy.includes(username)) {
    return NextResponse.json({ error: "Already liked" }, { status: 400 });
  }

  const updatedPost = await Post.findByIdAndUpdate(
    id,
    { $inc: { likes: 1 }, $push: { likedBy: username } },
    { new: true }
  );

  return NextResponse.json(updatedPost);
}