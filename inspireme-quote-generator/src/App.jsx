import React, { useState } from 'react';
import './App.css';

const quotes = [
  "The best way to get started is to quit talking and begin doing. – Walt Disney",
  "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. – Winston Churchill",
  "Don’t let yesterday take up too much of today. – Will Rogers",
  "You learn more from failure than from success. Don’t let it stop you. Failure builds character.",
  "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi"
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="app">
      <div className="quote-box">
        <p className="quote-text">"{quote}"</p>
        <button onClick={getRandomQuote} className="quote-button">New Quote</button>
      </div>
    </div>
  );
}

export default App;
