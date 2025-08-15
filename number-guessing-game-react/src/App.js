import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [targetNumber, setTargetNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [maxAttempts] = useState(10);
  const [guessedNumbers, setGuessedNumbers] = useState(new Set());
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success', 'error', 'hint'
  const [gameHistory, setGameHistory] = useState([]);

  // Initialize game
  useEffect(() => {
    startNewGame();
  }, []);

  const generateRandomNumber = (min = 1, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const startNewGame = () => {
    setTargetNumber(generateRandomNumber());
    setGuess('');
    setAttempts(0);
    setGuessedNumbers(new Set());
    setGameStatus('playing');
    setMessage('I\'m thinking of a number between 1 and 100. Can you guess it?');
    setMessageType('hint');
  };

  const handleGuess = () => {
    const guessNum = parseInt(guess);
    
    // Validation
    if (!guess || isNaN(guessNum) || guessNum < 1 || guessNum > 100) {
      setMessage('Please enter a valid number between 1 and 100!');
      setMessageType('error');
      return;
    }

    if (guessedNumbers.has(guessNum)) {
      setMessage('You already guessed that number! Try something different.');
      setMessageType('error');
      return;
    }

    // Add to guessed numbers
    const newGuessedNumbers = new Set(guessedNumbers);
    newGuessedNumbers.add(guessNum);
    setGuessedNumbers(newGuessedNumbers);

    // Increment attempts
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    // Check if correct
    if (guessNum === targetNumber) {
      setGameStatus('won');
      setMessage(`🎉 CONGRATULATIONS! You guessed it in ${newAttempts} attempt(s)!`);
      setMessageType('success');
      
      // Add to game history
      setGameHistory(prev => [...prev, {
        target: targetNumber,
        attempts: newAttempts,
        won: true,
        timestamp: new Date().toLocaleString()
      }]);
    } else {
      // Provide hint
      let hint = '';
      if (guessNum < targetNumber) {
        hint = 'Too low! Try a higher number.';
      } else {
        hint = 'Too high! Try a lower number.';
      }

      // Add more specific hints after 3 attempts
      if (newAttempts >= 3) {
        const difference = Math.abs(targetNumber - guessNum);
        if (difference <= 10) {
          hint += ' You\'re getting warm!';
        } else if (difference <= 25) {
          hint += ' You\'re getting closer!';
        } else {
          hint += ' You\'re still quite far off.';
        }
      }

      setMessage(hint);
      setMessageType('hint');

      // Check if game over
      if (newAttempts >= maxAttempts) {
        setGameStatus('lost');
        setMessage(`💀 GAME OVER! The number was ${targetNumber}.`);
        setMessageType('error');
        
        // Add to game history
        setGameHistory(prev => [...prev, {
          target: targetNumber,
          attempts: newAttempts,
          won: false,
          timestamp: new Date().toLocaleString()
        }]);
      }
    }

    setGuess('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && gameStatus === 'playing') {
      handleGuess();
    }
  };

  const getProgressPercentage = () => {
    return (attempts / maxAttempts) * 100;
  };

  return (
    <div className="App">
      <div className="game-container">
        <header className="game-header">
          <h1>🎯 Number Guessing Game</h1>
          <p>Guess the number between 1 and 100!</p>
        </header>

        <div className="game-stats">
          <div className="stat-item">
            <span className="stat-label">Attempts:</span>
            <span className="stat-value">{attempts}/{maxAttempts}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Remaining:</span>
            <span className="stat-value">{maxAttempts - attempts}</span>
          </div>
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${getProgressPercentage()}%` }}
          ></div>
        </div>

        {gameStatus === 'playing' && (
          <div className="game-input">
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your guess (1-100)"
              min="1"
              max="100"
              className="guess-input"
            />
            <button onClick={handleGuess} className="guess-button">
              Guess!
            </button>
          </div>
        )}

        <div className={`message ${messageType}`}>
          {message}
        </div>

        {guessedNumbers.size > 0 && (
          <div className="guessed-numbers">
            <h3>Previous Guesses:</h3>
            <div className="guesses-list">
              {Array.from(guessedNumbers).map((num, index) => (
                <span 
                  key={index} 
                  className={`guess-tag ${num < targetNumber ? 'low' : num > targetNumber ? 'high' : 'correct'}`}
                >
                  {num}
                </span>
              ))}
            </div>
          </div>
        )}

        {(gameStatus === 'won' || gameStatus === 'lost') && (
          <div className="game-over">
            <button onClick={startNewGame} className="new-game-button">
              Play Again
            </button>
          </div>
        )}

        {gameHistory.length > 0 && (
          <div className="game-history">
            <h3>Game History</h3>
            <div className="history-list">
              {gameHistory.slice(-5).reverse().map((game, index) => (
                <div key={index} className={`history-item ${game.won ? 'won' : 'lost'}`}>
                  <span className="history-result">
                    {game.won ? '🎉' : '💀'} {game.won ? 'Won' : 'Lost'}
                  </span>
                  <span className="history-details">
                    Target: {game.target} | Attempts: {game.attempts}
                  </span>
                  <span className="history-time">{game.timestamp}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
