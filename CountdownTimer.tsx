import React, { useState, useEffect } from 'react';

// CountdownTimer component by Muhammad Osama
const CountdownTimer: React.FC = () => {
  const [time, setTime] = useState<number>(0); // Time to countdown from
  const [isRunning, setIsRunning] = useState<boolean>(false); // Controls whether the timer is running
  const [remainingTime, setRemainingTime] = useState<number>(0); // Keeps track of remaining time

  // useEffect to handle countdown logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setIsRunning(false); // Stop the timer when it reaches 0
    }
    return () => clearInterval(timer); // Cleanup interval
  }, [isRunning, remainingTime]);

  // Start the countdown
  const handleStart = () => {
    if (time > 0) {
      setRemainingTime(time);
      setIsRunning(true);
    }
  };

  // Pause the countdown
  const handlePause = () => {
    setIsRunning(false);
  };

  // Reset the countdown
  const handleReset = () => {
    setIsRunning(false);
    setRemainingTime(0);
    setTime(0);
  };

  // Function to format time in minutes and seconds
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6">
      <h1 className="text-5xl font-bold mb-8 text-center">Countdown Timer</h1>

      {/* Input to set the countdown time */}
      <input
        type="number"
        placeholder="Enter time in seconds"
        className="text-black text-center p-3 rounded-lg mb-8 w-64 shadow-lg"
        value={time > 0 ? time : ''}
        onChange={(e) => setTime(Number(e.target.value))}
        disabled={isRunning} // Disable input while countdown is running
      />

      {/* Display the formatted remaining time */}
      <div className="text-7xl font-mono mb-8">
        {formatTime(remainingTime)}
      </div>

      {/* Control buttons */}
      <div className="flex space-x-4">
        <button
          onClick={handleStart}
          className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-lg text-xl transition-all duration-300"
          disabled={isRunning || time <= 0} // Disable if already running or time is 0
        >
          Start
        </button>
        <button
          onClick={handlePause}
          className="bg-yellow-500 hover:bg-yellow-600 px-5 py-3 rounded-lg text-xl transition-all duration-300"
          disabled={!isRunning} // Disable if the timer isn't running
        >
          Pause
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-lg text-xl transition-all duration-300"
        >
          Reset
        </button>
      </div>

      {/* Footer with author name */}
      <footer className="mt-12 text-sm text-gray-300">
        Designed and Developed by <span className="font-bold">Muhammad Osama</span>
      </footer>
    </div>
  );
};

export default CountdownTimer;
