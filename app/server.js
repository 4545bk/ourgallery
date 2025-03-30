const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();
  const httpServer = http.createServer(server);
  const io = new Server(httpServer, {
    cors: { origin: "http://localhost:3000" },
  });

  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("MongoDB connected"));

  const User = require("./models/User");
  const Message = require("./models/Message");

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // Authenticate user via session or token
    socket.on("join", async (userId) => {
      socket.join(userId);
      socket.userId = userId;
      console.log(`${userId} joined their room`);
    });

    // Handle private messages
    socket.on("privateMessage", async ({ recipientId, text }) => {
      const senderId = socket.userId;
      const message = new Message({ sender: senderId, recipient: recipientId, text });
      await message.save();

      // Send to recipient
      io.to(recipientId).emit("newMessage", {
        sender: senderId,
        text,
        createdAt: message.createdAt,
      });

      // Send back to sender for confirmation
      socket.emit("newMessage", {
        sender: senderId,
        recipient: recipientId,
        text,
        createdAt: message.createdAt,
      });
    });

    // Handle friend request
    socket.on("friendRequest", async ({ toUserId }) => {
      const fromUserId = socket.userId;
      const recipient = await User.findById(toUserId);
      if (recipient && !recipient.friends.includes(fromUserId)) {
        io.to(toUserId).emit("friendRequest", { from: fromUserId });
      }
    });

    socket.on("acceptFriend", async ({ fromUserId }) => {
      const toUserId = socket.userId;
      await User.updateOne(
        { _id: toUserId },
        { $push: { friends: fromUserId } }
      );
      await User.updateOne(
        { _id: fromUserId },
        { $push: { friends: toUserId } }
      );
      io.to(fromUserId).emit("friendAccepted", { friendId: toUserId });
      socket.emit("friendAdded", { friendId: fromUserId });
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

  server.all("*", (req, res) => handle(req, res));

  httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});