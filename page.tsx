"use client"; // This is necessary for client-side rendering in Next.js

import React from 'react';
import CountdownTimer from './components/CountdownTimer'; // Make sure the path is correct

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <CountdownTimer />
    </div>
  );
};

export default Home;
