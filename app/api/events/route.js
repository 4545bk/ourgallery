import dbConnect, { Event } from "../../../lib/mongodb";

export async function GET() {
  try {
    await dbConnect();
    const events = await Event.find({});
    return new Response(JSON.stringify(events), { status: 200 });
  } catch (error) {
    console.error("GET /api/events error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch events" }), {
      status: 500,
    });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const event = new Event(body);
    await event.save();
    return new Response(JSON.stringify(event), { status: 201 });
  } catch (error) {
    console.error("POST /api/events error:", error);
    return new Response(JSON.stringify({ error: "Failed to create event" }), {
      status: 500,
    });
  }
}