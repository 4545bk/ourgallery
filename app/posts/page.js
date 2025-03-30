"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Pusher from "pusher-js";
import {
  HandThumbUpIcon,
  ChatBubbleLeftIcon,
  BellIcon,
  RssIcon,
  XMarkIcon,
  UserPlusIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import { signIn, signOut, useSession, SessionProvider } from "next-auth/react";
import styles from "./page.module.css";

function PostsContent() {
  const { data: session, status } = useSession();
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [newImage, setNewImage] = useState(null); // State for image file
  const [commentInputs, setCommentInputs] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messageCounter, setMessageCounter] = useState(0);
  const [users, setUsers] = useState([]);
  const [showAddFriends, setShowAddFriends] = useState(false);
  const [editingBio, setEditingBio] = useState(false);
  const [bioInput, setBioInput] = useState("");
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme") === "light";
    setIsLightMode(savedMode);

    fetchPosts();
    if (session) {
      fetchProfile();
      fetchFriends();
      fetchUsers();
      setupPusher();
      setNotifications([
        { id: 1, text: "Someone liked your post!", time: new Date() },
        { id: 2, text: "New comment on your post.", time: new Date() },
      ]);
    }
    return () => {
      if (window.pusher) window.pusher.disconnect();
    };
  }, [session]);

  const toggleMode = () => {
    setIsLightMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "light" : "dark");
      return newMode;
    });
  };

  const setupPusher = () => {
    if (!session || !selectedFriend) return;

    const pusher = new Pusher("a9e989dcc04e514c8a20", {
      cluster: "ap2",
      authEndpoint: "/api/pusher/auth",
      auth: {
        headers: {
          Authorization: `Bearer ${session.accessToken || "dummy-token"}`,
        },
      },
    });

    window.pusher = pusher;

    // Symmetric channel name
    const userIds = [session.user.id, selectedFriend].sort();
    const channelName = `chat-${userIds[0]}-${userIds[1]}`;
    const channel = pusher.subscribe(channelName);

    channel.bind("message", (data) => {
      setChatMessages((prev) => [...prev, data]);
    });

    return () => {
      pusher.unsubscribe(channelName);
    };
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get("/api/posts");
      setPosts(res.data || []);
    } catch (error) {
      console.error("Fetch posts error:", error);
      setPosts([]);
    }
  };

  const fetchProfile = async () => {
    try {
      const res = await axios.get("/api/profile");
      setProfile(res.data);
      setBioInput(res.data.bio || "");
    } catch (error) {
      console.error("Fetch profile error:", error.response?.data || error.message);
    }
  };

  const fetchFriends = async () => {
    try {
      const res = await axios.get("/api/friends", { withCredentials: true });
      setFriends(res.data.friends || []);
    } catch (error) {
      console.error("Fetch friends error:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get("/api/users", { withCredentials: true });
      setUsers(res.data.users || []);
    } catch (error) {
      console.error("Fetch users error:", error);
    }
  };

  const handleAddFriend = async (friendId) => {
    try {
      const res = await axios.post("/api/friends", { friendId }, { withCredentials: true });
      setFriends((prev) => [...prev, res.data.friend]);
      setUsers((prev) => prev.filter((user) => user._id !== friendId));
    } catch (error) {
      console.error("Add friend error:", error);
      alert(error.response?.data?.error || "Failed to add friend");
    }
  };

  const handleManualSignup = async (e) => {
    e.preventDefault();
    try {
      const signupResponse = await axios.post("/api/signup", { username, password });
      setUsername("");
      setPassword("");
      const signInResult = await signIn("credentials", {
        username,
        password,
        callbackUrl: "/posts",
        redirect: false,
      });
      if (signInResult?.error) throw new Error(signInResult.error);
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      alert(error.response?.data?.error || "Signup failed. Please try again.");
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (!session || (!newPost.trim() && !newImage)) return;

    const currentUsername =
      session.user?.username || session.user?.name?.replace(/\s+/g, "").toLowerCase() || "user";
    const formData = new FormData();
    formData.append("text", newPost);
    if (newImage) formData.append("image", newImage);

    try {
      const res = await axios.post("/api/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setPosts([res.data, ...posts]);
      setNewPost("");
      setNewImage(null);
    } catch (error) {
      console.error("Post submission error:", {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });
      const errorMessage = error.response?.data?.error || error.response?.data?.details || "Failed to create post";
      alert(`Error: ${errorMessage}`);
    }
  };

  const handleLike = async (id) => {
    if (!session) return alert("Please sign in first!");
    const currentUsername =
      session.user?.username || session.user?.name?.replace(/\s+/g, "").toLowerCase() || "user";
    try {
      const res = await axios.post(`/api/posts/${id}/like`, { username: currentUsername });
      setPosts(posts.map((p) => (p._id === id ? res.data : p)));
      setNotifications([
        ...notifications,
        { id: Date.now(), text: `${currentUsername} liked a post!`, time: new Date() },
      ]);
    } catch (error) {
      console.error("Like error:", error.response?.data || error.message);
      alert(error.response?.data?.error || "Failed to like post");
    }
  };

  const handleCommentSubmit = async (id, e) => {
    e.preventDefault();
    if (!session || !commentInputs[id]?.trim()) return;
    const currentUsername =
      session.user?.username || session.user?.name?.replace(/\s+/g, "").toLowerCase() || "user";
    try {
      const res = await axios.post(`/api/posts/${id}/comment`, {
        text: commentInputs[id],
        username: currentUsername,
      });
      setPosts(posts.map((p) => (p._id === id ? res.data : p)));
      setCommentInputs((prev) => ({ ...prev, [id]: "" }));
      setNotifications([
        ...notifications,
        { id: Date.now(), text: `${currentUsername} commented on a post!`, time: new Date() },
      ]);
    } catch (error) {
      console.error("Comment error:", error);
    }
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim() || !session || !selectedFriend) {
      alert("Please select a friend to chat with!");
      return;
    }
    const currentUsername =
      session.user?.username || session.user?.name?.replace(/\s+/g, "").toLowerCase() || "user";
    const message = {
      id: `${session.user.id}-${messageCounter}`,
      text: chatInput,
      sender: currentUsername,
      time: new Date(),
    };

    try {
      const userIds = [session.user.id, selectedFriend].sort();
      const channelName = `chat-${userIds[0]}-${userIds[1]}`;
      await axios.post(
        "/api/pusher/send",
        {
          channel: channelName,
          event: "message",
          data: message,
        },
        { withCredentials: true }
      );
      setChatMessages((prev) => [...prev, message]);
      setChatInput("");
      setMessageCounter((prev) => prev + 1);
    } catch (error) {
      console.error("Chat send error:", error);
      alert(error.response?.data?.error || "Failed to send message");
    }
  };

  const handleBioSave = async () => {
    try {
      const res = await axios.put("/api/profile", { bio: bioInput }, { withCredentials: true });
      setProfile((prev) => ({ ...prev, bio: res.data.bio }));
      setEditingBio(false);
    } catch (error) {
      console.error("Save bio error:", error);
      alert(error.response?.data?.error || "Failed to save bio");
    }
  };

  const formatDate = (date) => {
    const now = new Date();
    const diff = (now - new Date(date)) / 1000;
    if (diff < 60) return `${Math.floor(diff)} secs ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)} mins ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hrs ago`;
    return new Date(date).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getInitial = (name) => (name && name[0] ? name[0].toUpperCase() : "U");

  if (status === "loading") return <div className={styles.loading}>Loading...</div>;

  if (!session) {
    return (
      <div className={`${styles.signupContainer} ${isLightMode ? styles.lightMode : ""}`}>
        <div className={styles.signupCard}>
          <h2 className={styles.signupTitle}>Cousin Chronicles</h2>
          <form onSubmit={handleManualSignup}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className={styles.signupInput}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={styles.signupInput}
            />
            <button type="submit" className={styles.signupButton}>Sign Up</button>
          </form>
          <div className={styles.divider} />
          <button onClick={() => signIn("google", { callbackUrl: "/posts" })} className={styles.googleButton}>
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.6l6.7-6.7C35.5 2.5 30 0 24 0 14.6 0 6.7 5.8 3.1 14.1l8.5 6.6c1-3.5 4-6.2 8.4-6.2z" />
              <path fill="#34A853" d="M24 44c6 0 11.1-2 14.8-5.5l-7.6-6c-2.1 1.4-4.8 2.2-7.2 2.2-4.4 0-8.2-2.8-9.6-6.7l-8.5 6.6C9.8 40.2 16.6 44 24 44z" />
              <path fill="#4A90E2" d="M44.5 24c0-1.4-.1-2.7-.4-4H24v8.1h11.8c-.5 2.5-2 4.7-4.2 6.1l7.6 6C42.5 37.5 44.5 31.1 44.5 24z" />
              <path fill="#FBBC05" d="M3.1 14.1C1.2 17.7 0 21.7 0 26s1.2 8.3 3.1 11.9l8.5-6.6c-.8-2.4-.8-5 0-7.3l-8.5-6.6z" />
            </svg>
            Sign Up with Google
          </button>
        </div>
      </div>
    );
  }

  const currentUsername = session.user?.username || session.user?.name?.replace(/\s+/g, "").toLowerCase() || "user";

  return (
    <div className={`${styles.container} ${isLightMode ? styles.lightMode : ""}`}>
      <header className={styles.header}>
        <h2 className={styles.logo}>Cousin Chronicles</h2>
        <div className={styles.nav}>
          <button className={styles.navButton} title="Feed">
            <RssIcon width={24} height={24} />
          </button>
          <button className={styles.navButton} title="Chat" onClick={() => setChatOpen(!chatOpen)}>
            <ChatBubbleLeftIcon width={24} height={24} />
          </button>
          <button className={styles.navButton} title="Notifications" onClick={() => setNotificationsOpen(!notificationsOpen)}>
            <BellIcon width={24} height={24} />
            {notifications.length > 0 && (
              <span style={{ position: "absolute", top: 2, right: 2, width: 8, height: 8, backgroundColor: isLightMode ? "#e41e26" : "#ff6b6b", borderRadius: "50%" }} />
            )}
          </button>
          <button className={styles.modeToggle} onClick={toggleMode} title={isLightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}>
            {isLightMode ? <MoonIcon width={20} height={20} /> : <SunIcon width={20} height={20} />}
          </button>
          <button onClick={() => signOut({ callbackUrl: "/posts" })} className={styles.logoutButton}>Log Out</button>
        </div>
      </header>

      <div className={styles.contentWrapper}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarItem} onClick={fetchPosts}>Home</div>
          <div className={styles.sidebarItem} onClick={() => setShowAddFriends(!showAddFriends)}>
            Friends ({friends.length})
          </div>
          {friends.map((friend) => (
            <div key={friend._id} className={styles.sidebarItem} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span onClick={() => setSelectedFriend(friend._id)}>{friend.username}</span>
              <button onClick={() => setSelectedFriend(friend._id)}><ChatBubbleLeftIcon width={16} height={16} /></button>
            </div>
          ))}
          {showAddFriends && (
            <div className={styles.sidebarItem}>
              <strong>Add Friends:</strong>
              {users.length === 0 ? (
                <p>No users available to add.</p>
              ) : (
                users.map((user) => (
                  <div key={user._id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "8px 0" }}>
                    <span>{user.username}</span>
                    <button onClick={() => handleAddFriend(user._id)}><UserPlusIcon width={16} height={16} /></button>
                  </div>
                ))
              )}
            </div>
          )}
          <div className={styles.sidebarItem}>Groups</div>
          <div className={styles.sidebarItem}>Profile</div>
        </aside>

        <main className={styles.main}>
          {profile && (
            <div className={styles.profileCard}>
              <div className={styles.profileHeader}>
                <div className={styles.avatar}>{getInitial(currentUsername)}</div>
                <div>
                  <p className={styles.profileName}>{currentUsername}</p>
                  <p className={styles.profileDate}>{formatDate(profile.createdAt)}</p>
                </div>
              </div>
              {editingBio ? (
                <div>
                  <textarea
                    value={bioInput}
                    onChange={(e) => setBioInput(e.target.value)}
                    placeholder="Write your bio..."
                    className={styles.bioEdit}
                    rows={3}
                  />
                  <button onClick={handleBioSave} className={styles.bioSave}>Save Bio</button>
                </div>
              ) : (
                <p className={styles.profileBio} onClick={() => setEditingBio(true)}>
                  {profile.bio || "Click to add a bio..."}
                </p>
              )}
            </div>
          )}

          <form className={styles.postForm} onSubmit={handlePostSubmit}>
            <div className={styles.postInputWrapper}>
              <div className={styles.avatar}>{getInitial(currentUsername)}</div>
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder={`What's on your mind, ${currentUsername}?`}
                className={styles.postInput}
              />
            </div>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) => setNewImage(e.target.files[0])}
              className={styles.postImageInput}
            />
            {newImage && (
              <div className={styles.imagePreview}>
                <img src={URL.createObjectURL(newImage)} alt="Preview" />
                <button type="button" onClick={() => setNewImage(null)}>Remove</button>
              </div>
            )}
            <button type="submit" className={styles.postButton} disabled={!newPost.trim() && !newImage}>
              Post
            </button>
          </form>

          {posts.length === 0 ? (
            <p className={styles.noPosts}>No posts yet.</p>
          ) : (
            posts.map((post) => (
              <div key={post._id} className={styles.postCard}>
                <div className={styles.postHeader}>
                  <div className={styles.avatar}>{getInitial(post.username)}</div>
                  <div>
                    <p className={styles.postUsername}>{post.username || "Family"}</p>
                    <p className={styles.postDate}>{formatDate(post.createdAt)}</p>
                  </div>
                </div>
                <p className={styles.postText}>{post.text}</p>
                {post.imageUrl && (
                  <img src={post.imageUrl} alt="Post" className={styles.postImage} />
                )}
                <div className={styles.postActions}>
                  <button
                    onClick={() => handleLike(post._id)}
                    disabled={post.likedBy.includes(currentUsername)}
                    className={`${styles.actionButton} ${post.likedBy.includes(currentUsername) ? styles.liked : ""}`}
                  >
                    <HandThumbUpIcon width={18} height={18} />
                    {post.likedBy.includes(currentUsername) ? `Liked (${post.likes})` : `Like (${post.likes})`}
                  </button>
                  <button className={styles.actionButton}>
                    <ChatBubbleLeftIcon width={18} height={18} />
                    Comment ({post.comments.length})
                  </button>
                </div>
                {post.comments.length > 0 && (
                  <div className={styles.commentSection}>
                    {post.comments.map((comment, idx) => (
                      <div key={idx} className={styles.comment}>
                        <div className={styles.commentAvatar}>{getInitial(comment.username)}</div>
                        <div className={styles.commentBody}>
                          <p className={styles.commentUsername}>{comment.username || "Family"}</p>
                          <p className={styles.commentText}>{comment.text}</p>
                          <p className={styles.commentDate}>{formatDate(comment.createdAt)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <form onSubmit={(e) => handleCommentSubmit(post._id, e)} className={styles.commentForm}>
                  <div className={styles.commentAvatar}>{getInitial(currentUsername)}</div>
                  <input
                    type="text"
                    value={commentInputs[post._id] || ""}
                    onChange={(e) => setCommentInputs((prev) => ({ ...prev, [post._id]: e.target.value }))}
                    placeholder="Write a comment..."
                    className={styles.commentInput}
                  />
                </form>
              </div>
            ))
          )}
        </main>
      </div>

      {chatOpen && (
        <div className={styles.chatModal}>
          <div className={styles.chatHeader}>
            <span>Chat with {friends.find(f => f._id === selectedFriend)?.username || "Select a friend"}</span>
            <button className={styles.chatClose} onClick={() => setChatOpen(false)}>
              <XMarkIcon width={20} height={20} />
            </button>
          </div>
          <div className={styles.chatBody}>
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`${styles.chatMessage} ${msg.sender === currentUsername ? styles.sent : styles.received}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} className={styles.chatInput}>
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Type a message..."
              className={styles.chatInputField}
            />
          </form>
        </div>
      )}

      {notificationsOpen && (
        <div className={styles.notificationDropdown}>
          {notifications.length === 0 ? (
            <div className={styles.notificationItem}>No notifications</div>
          ) : (
            notifications.map((notif) => (
              <div key={notif.id} className={styles.notificationItem}>
                {notif.text} <br />
                <small>{formatDate(notif.time)}</small>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default function PostsPage() {
  return (
    <SessionProvider>
      <PostsContent />
    </SessionProvider>
  );
}