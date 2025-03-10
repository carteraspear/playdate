import React, { useState } from 'react';
import './index.css'; // Ensure this file is correctly styled

const Home: React.FC = () => {
  const [image, setImage] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>('');
  const [eventTime, setEventTime] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [rsvpLimit, setRsvpLimit] = useState<number | string>('');
  const [ticketCost, setTicketCost] = useState<number | string>('');
  const [description, setDescription] = useState<string>('');

  const handleImageChange = () => {
    const newImage = prompt('Enter the image URL');
    if (newImage) {
      setImage(newImage);
    }
  };

  const goToDashboard = () => {
    window.location.href = 'Dashboard.tsx';
  };

  return (
    <div className="App">
      {/* Top Bar */}
      <div className="top-bar">
        <button className="dashboard-button" onClick={goToDashboard}>
          Go to Dashboard
        </button>
        <a href="https://carterspear.com/fix" target="_blank" rel="noopener noreferrer">
          by Spear Technologies
        </a>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Create an Event</h1>

        <div className="image-section">
          <img 
            src={image || 'default-image.jpg'} 
            alt="Event" 
            className="event-image"
          />
          <button className="change-image-button" onClick={handleImageChange}>Change Image</button>
        </div>

        <div className="input-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter event title"
          />
        </div>

        <div className="input-group">
          <label>Date and Time:</label>
          <div className="date-time">
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
            <input
              type="time"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter event location"
          />
        </div>

        <div className="input-group">
          <label>RSVP Limit:</label>
          <input
            type="number"
            value={rsvpLimit}
            onChange={(e) => setRsvpLimit(e.target.value)}
            placeholder="Enter RSVP limit"
          />
        </div>

        <div className="input-group">
          <label>Ticket Cost:</label>
          <input
            type="number"
            value={ticketCost}
            onChange={(e) => setTicketCost(e.target.value)}
            placeholder="Enter ticket cost"
          />
        </div>

        <div className="input-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter event description"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        © Copyright 2025 Spear Technologies
      </div>
    </div>
  );
};

export default Home;
