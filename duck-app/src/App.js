// src/App.js
import React, { useState } from 'react';
import Duck from './Duck';
import quackSound from './src_quack.mp3'; // Import the audio file
import './App.css';

function App() {
  const [duck, setDuck] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    color: '',
    age: '',
    weight: '',
    image: '',
  });
  const [output, setOutput] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Create the Duck object
  const handleCreateDuck = () => {
    const { name, color, age, weight, image } = formData;
    if (!name || !color || !age || !weight || !image) {
      alert('Please fill in all fields');
      return;
    }
    const newDuck = new Duck(name, color, age, weight, image);
    setDuck(newDuck);
    setFormData({
      name: '',
      color: '',
      age: '',
      weight: '',
      image: '',
    });
  };

  // Show the Duck's details
  const handleShow = () => {
    setOutput('');
    if (duck) {
      setOutput(duck.show());
    }
  };

  // Handle the Quack action
  const handleQuack = () => {
    if (duck) {
      // Get the quack text from the Duck object
      const quackText = duck.quack();
      setOutput(quackText);

      // Play the quack sound 3 times
      let playCount = 0;
      const playQuackSound = () => {
        if (playCount < 3) {
          const audio = new Audio(quackSound);
          audio.play().then(() => {
            playCount++;
            // Wait for the sound to finish before playing again
            audio.onended = () => {
              playQuackSound();
            };
          }).catch((error) => {
            console.error('Error playing audio:', error);
          });
        }
      };

      playQuackSound();
    }
  };

  return (
    <div className="App">
      <h1>Duck Application</h1>
      {!duck && (
        <div className="form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter duck's name"
          />
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
            placeholder="Enter duck's color"
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter duck's age"
          />
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            placeholder="Enter duck's weight"
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            placeholder="Enter duck's image URL"
          />
          <button onClick={handleCreateDuck}>Create Duck</button>
        </div>
      )}
      {duck && (
        <div>
          <button onClick={handleShow}>Show</button>
          <button onClick={handleQuack}>Quack</button>
        </div>
      )}
      {output && (
        <div>
          <p>{output}</p>
          {duck && duck.image && <img src={duck.image} alt="Duck" />}
        </div>
      )}
    </div>
  );
}

export default App;