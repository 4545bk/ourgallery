'use client';
import { useState, useEffect } from 'react';
import Calendar from '../../components/Calendar';

export default function Scheduling() {
  const [events, setEvents] = useState([]);

  // Fetch events from API
  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  const handleDateClick = async (arg) => {
    const title = prompt("Enter event name:");
    if (title) {
      const timeInput = prompt("Enter time in EAT (e.g., 2:00 PM or 14:00):") || "00:00";
      let time; // Will store 24-hour format for storage
      if (/^\d{1,2}:\d{2}\s?(AM|PM)$/i.test(timeInput)) {
        // Parse 12-hour EAT input
        const [timePart, period] = timeInput.split(/\s+/);
        let [hours, minutes] = timePart.split(":");
        hours = parseInt(hours);
        if (period.toUpperCase() === "PM" && hours !== 12) hours += 12;
        if (period.toUpperCase() === "AM" && hours === 12) hours = 0;
        time = `${hours.toString().padStart(2, "0")}:${minutes}`;
      } else if (/^\d{2}:\d{2}$/.test(timeInput)) {
        // Accept 24-hour EAT input as fallback
        time = timeInput;
      } else {
        alert("Invalid time format! Use H:MM AM/PM (e.g., 2:00 PM) or HH:MM (e.g., 14:00)");
        return;
      }
      const newEvent = { title, date: arg.dateStr, time, votes: [] };
      try {
        const res = await fetch("/api/events", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEvent),
        });
        if (!res.ok) throw new Error("Failed to create event");
        const savedEvent = await res.json();
        setEvents([...events, savedEvent]);
        setNotification(`Event "${title}" scheduled for ${arg.dateStr} ${time} EAT!`);
        setTimeout(() => setNotification(""), 5000);
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleEventClick = async (info) => {
    const eventId = info.event.id;
    const userName = prompt('Enter your name to vote:');
    if (userName) {
      const res = await fetch(`/api/events/vote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventId, userName }),
      });
      if (res.ok) {
        const updatedEvents = await fetch('/api/events').then(res => res.json());
        setEvents(updatedEvents);
      }
    }
  };

  return (
    <div>
      <h1>Family Scheduling</h1>
      <Calendar events={events} onDateClick={handleDateClick} onEventClick={handleEventClick} />
    </div>
  );
}