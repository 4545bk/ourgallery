import { NextResponse } from "next/server";
import dbConnect, { Post } from "../../../lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    await dbConnect();
    const posts = await Post.find().sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(request) {
  console.log("POST /api/posts called");
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      console.log("No session found");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log("Session found:", session.user.id);
    const formData = await request.formData();
    const text = formData.get("text");
    const image = formData.get("image");
    const username = session.user.username || session.user.name.replace(/\s+/g, "").toLowerCase();

    console.log("FormData parsed:", { text, image: image ? "Image present" : "No image" });

    if (!text && !image) {
      console.log("No text or image provided");
      return NextResponse.json({ error: "Text or image required" }, { status: 400 });
    }

    let imageUrl = null;
    if (image) {
      console.log("Processing image upload...");
      if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
        console.error("Cloudinary configuration missing");
        return NextResponse.json({ error: "Server misconfiguration: Cloudinary credentials missing" }, { status: 500 });
      }

      try {
        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);
        console.log("Image buffer created, size:", buffer.length);

        const uploadResult = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            { resource_type: "image", folder: "cousin-chronicles" },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          ).end(buffer);
        });

        imageUrl = uploadResult.secure_url;
        console.log("Cloudinary upload successful:", imageUrl);
      } catch (uploadError) {
        console.error("Cloudinary upload failed:", uploadError.message, uploadError);
        return NextResponse.json({ error: "Failed to upload image", details: uploadError.message }, { status: 500 });
      }
    }

    console.log("Connecting to database...");
    await dbConnect();
    console.log("Creating post in database...");
    const post = await Post.create({
      text: text || "", // Allow empty text if image is present
      username,
      imageUrl,
      likes: 0,
      likedBy: [],
      comments: [],
    });

    console.log("Post created successfully:", post._id);
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error.message, error.stack);
    return NextResponse.json({ error: "Failed to create post", details: error.message }, { status: 500 });
  }
}