import { NextResponse } from "next/server";

export async function POST(request) {
  const { message } = await request.json();
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Get current time in GMT+3
  const now = new Date();
  const gmtPlus3Offset = 3 * 60 * 60 * 1000; // 3 hours in milliseconds
  const gmtPlus3Time = new Date(now.getTime() + gmtPlus3Offset);
  
  // Format time as "3/28/2025 2:25 PM"
  const formattedTime = gmtPlus3Time.toLocaleString("en-US", {
    timeZone: "UTC", // Base time is UTC, offset applied manually
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  // Combine time and message
  const fullMessage = `[${formattedTime}] ${message}`;

  console.log("=== Telegram API Call ===");
  console.log("TELEGRAM_BOT_TOKEN:", botToken);
  console.log("TELEGRAM_CHAT_ID from .env:", chatId);
  console.log("Message to send:", fullMessage);
  console.log("Target chat_id:", chatId);
  console.log("========================");

  if (!botToken || !chatId) {
    console.error("Missing Telegram config:", { botToken, chatId });
    return NextResponse.json({ error: "Telegram configuration missing" }, { status: 500 });
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: fullMessage,
        }),
      }
    );

    const result = await response.json();
    if (!response.ok) throw new Error(`Telegram API error: ${result.description}`);
    console.log("Telegram message sent successfully:", result);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Telegram error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}