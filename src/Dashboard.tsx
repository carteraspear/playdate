import React, { useEffect, useState } from 'react';

// Mock Event Data (this could be replaced with API data fetching)
const mockEvents = [
  { id: 1, name: 'Concert A', date: '2025-03-05', location: 'Venue 1' },
  { id: 2, name: 'Conference B', date: '2025-03-06', location: 'Venue 2' },
  { id: 3, name: 'Festival C', date: '2025-03-07', location: 'Venue 3' },
  { id: 4, name: 'Workshop D', date: '2025-03-08', location: 'Venue 4' },
  // More events...
];

const Dashboard: React.FC = () => {
  const [events, setEvents] = useState(mockEvents);

  useEffect(() => {
    // You could fetch data here using an API call.
    // Example: fetch('/api/events').then(response => response.json()).then(data => setEvents(data));

    // For now, using mock data
    setEvents(mockEvents);
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard!</p>
      
      <div className="event-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h2>{event.name}</h2>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
