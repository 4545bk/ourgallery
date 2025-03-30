import { NextResponse } from "next/server";
import dbConnect, { Post } from "../../../../../lib/mongodb";

export async function POST(request, context) {
  await dbConnect();
  const { id } = await context.params;
  const { text, username } = await request.json();
  if (!text) return NextResponse.json({ error: "Comment text is required" }, { status: 400 });

  const comment = { text, createdAt: new Date(), username }; // Add username
  const post = await Post.findByIdAndUpdate(
    id,
    { $push: { comments: comment } },
    { new: true }
  );
  if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 });
  return NextResponse.json(post);
}