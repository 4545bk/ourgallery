import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    console.log("Using cached MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    console.log("Connecting to MongoDB:", MONGODB_URI.replace(/:.*@/, ":****@"));
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("MongoDB connected successfully");
      return mongoose;
    }).catch((error) => {
      console.error("MongoDB connection error:", error);
      throw error;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: String,
  googleId: String,
  bio: { type: String, default: "" },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Added friends field
  createdAt: { type: Date, default: Date.now },
});

const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
  time: String,
  votes: [String],
});

const postSchema = new mongoose.Schema({
  text: { type: String, required: true },
  username: { type: String, required: true },
  imageUrl: { type: String }, // Add this field
  likes: { type: Number, default: 0 },
  likedBy: [{ type: String }],
  comments: [{
    text: String,
    username: String,
    createdAt: { type: Date, default: Date.now },
  }],
  createdAt: { type: Date, default: Date.now },
});


const User = mongoose.models.User || mongoose.model("User", userSchema);
const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export { User, Event, Post };
export default dbConnect;