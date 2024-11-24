import React, { useState } from 'react';
import Clock from './Clock';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    hours: '',
    minutes: '',
    seconds: '',
    country: '',
  });
  const [clocks, setClocks] = useState([]); // מערך של שעונים
  const [message, setMessage] = useState(''); // הודעה למשתמש

  // עדכון הערכים של הטופס
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // יצירת שעון חדש
  const handleAddClock = () => {
    const { hours, minutes, seconds, country } = formData;

    // בדיקה שכל השדות מלאים
    if (!hours || !minutes || !seconds || !country) {
      alert('Please fill in all fields');
      return;
    }

    // יצירת אובייקט Clock חדש
    const newClock = new Clock(hours, minutes, seconds, country);

    // הוספה למערך השעונים
    const updatedClocks = [...clocks, newClock];
    setClocks(updatedClocks);

    // איפוס שדות הטופס
    setFormData({
      hours: '',
      minutes: '',
      seconds: '',
      country: '',
    });

    // בדיקה אם הגענו ל-5 שעונים
    if (updatedClocks.length === 5) {
      setMessage('Here are the 5 clocks you entered:');
    } else {
      setMessage(`You have entered ${updatedClocks.length} clocks. Add more.`);
    }
  };

  return (
    <div className="App">
      <h1>Clock Application</h1>
      <div className="form">
        <input
          type="number"
          name="hours"
          value={formData.hours}
          onChange={handleInputChange}
          placeholder="Enter hours"
        />
        <input
          type="number"
          name="minutes"
          value={formData.minutes}
          onChange={handleInputChange}
          placeholder="Enter minutes"
        />
        <input
          type="number"
          name="seconds"
          value={formData.seconds}
          onChange={handleInputChange}
          placeholder="Enter seconds"
        />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          placeholder="Enter country name"
        />
        <button onClick={handleAddClock}>Add Clock</button>
      </div>

      <p>{message}</p>

      {/* הצגת השעונים רק אם יש 5 */}
      {clocks.length === 5 && (
        <ul>
          {clocks.map((clock, index) => (
            <li key={index}>
              <strong>{clock.country}</strong>: {clock.show()} ({clock.convertToSeconds()} seconds)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
