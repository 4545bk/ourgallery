import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function Calendar({ events, onDateClick, onEventClick }) {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events.map(event => ({
        title: `${event.title} (Votes: ${event.votes.length})`,
        date: event.date,
        id: event._id,
      }))}
      dateClick={onDateClick}
      eventClick={onEventClick}
    />
  );
}