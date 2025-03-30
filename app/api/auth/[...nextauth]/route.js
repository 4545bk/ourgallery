import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect, { User } from "../../../../lib/mongodb";
import bcrypt from "bcryptjs";

console.log("NextAuth route loaded");

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Authorizing:", credentials.username);
        try {
          await dbConnect();
          const user = await User.findOne({ username: credentials.username });
          if (!user || !user.password) {
            console.log("No user or password:", credentials.username);
            return null;
          }
          const isValid = await bcrypt.compare(credentials.password, user.password);
          if (!isValid) {
            console.log("Invalid password:", credentials.username);
            return null;
          }
          console.log("Authorized:", user.username);
          return { id: user._id.toString(), username: user.username };
        } catch (error) {
          console.error("Authorize error:", error);
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      console.log("Session callback:", token);
      if (token) {
        session.user.id = token.sub || token.id; // Ensure ID is set
        session.user.username = token.username || session.user.name?.replace(/\s+/g, "").toLowerCase();
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        console.log("JWT callback:", user);
        token.id = user.id; // Store ID in token
        token.username = user.username;
      }
      return token;
    },
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        await dbConnect();
        const existingUser = await User.findOne({ googleId: profile.sub });
        if (!existingUser) {
          const newUsername = profile.name?.replace(/\s+/g, "").toLowerCase() || profile.email.split("@")[0];
          const newUser = await User.create({
            username: newUsername,
            googleId: profile.sub,
            bio: "",
          });
          user.id = newUser._id.toString();
          user.username = newUsername;
        } else {
          user.id = existingUser._id.toString();
          user.username = existingUser.username;
        }
      }
      return true;
    },
  },
  pages: {
    signIn: "/posts",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };