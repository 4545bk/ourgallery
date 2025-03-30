import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cousin Chronicles",
  description: "A futuristic family connection hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet"></link>
      </head>
      <body
        style={{
          margin: 0,
          background: "radial-gradient(circle at center, #0a0e1a 0%, #000000 100%)",
          overflowX: "hidden",
          fontFamily: "'Orbitron', 'Roboto', sans-serif",
          color: "#d4faff",
        }}
        className={inter.className}
      >
        {/* Navigation Bar */}
        <nav
          style={{
            padding: "15px 20px",
            background: "rgba(10, 14, 26, 0.9)",
            borderBottom: "2px solid #00dbff",
            boxShadow: "0 0 20px rgba(0, 219, 255, 0.3)",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <Link
            href="/"
            style={{
              marginRight: "30px",
              color: "#00dbff",
              textDecoration: "none",
              fontWeight: 700,
              textShadow: "0 0 10px rgba(0, 219, 255, 0.5)",
            }}
          >
            Home
          </Link>
          <Link
            href="/gallery"
            style={{
              marginRight: "30px",
              color: "#00dbff",
              textDecoration: "none",
              fontWeight: 700,
              textShadow: "0 0 10px rgba(0, 219, 255, 0.5)",
            }}
          >
            Gallery
          </Link>
          <Link
            href="/posts"
            style={{
              color: "#00dbff",
              textDecoration: "none",
              fontWeight: 700,
              textShadow: "0 0 10px rgba(0, 219, 255, 0.5)",
            }}
          >
            Posts
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}