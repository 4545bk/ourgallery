import dbConnect, { Event } from "../../../../lib/mongodb";

export async function POST(request) {
  try {
    await dbConnect();
    const { eventId, userName } = await request.json();

    const event = await Event.findById(eventId);
    if (!event) {
      return new Response(JSON.stringify({ error: "Event not found" }), {
        status: 404,
      });
    }

    if (!event.votes.includes(userName)) {
      event.votes.push(userName);
      await event.save();
    }

    return new Response(JSON.stringify(event), { status: 200 });
  } catch (error) {
    console.error("POST /api/events/vote error:", error);
    return new Response(JSON.stringify({ error: "Failed to vote" }), {
      status: 500,
    });
  }
}