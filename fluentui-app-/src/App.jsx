import React, { useState, useEffect } from 'react';
import { Text } from '@fluentui/react-components';
import './App.css';

function ClockApp() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [formattedTime, setFormattedTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      setFormattedTime(now.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-split">
      <div className="left-half">
        <div className="clock-box">
          <h1 className="clock-title">Digital Clock</h1>
          <Text as="p" className="clock-time">
            {formattedTime}
          </Text>
        </div>
      </div>

      <div className="right-half">
        <div className="analog-clock">
          <div
            className="hour"
            style={{ transform: `rotate(${(currentTime.getHours() % 12) * 30 + currentTime.getMinutes() / 2}deg)` }}
          />
          <div
            className="minute"
            style={{ transform: `rotate(${currentTime.getMinutes() * 6}deg)` }}
          />
          <div
            className="second"
            style={{ transform: `rotate(${currentTime.getSeconds() * 6}deg)` }}
          />
          <div className="numbers">
            {[...Array(12)].map((_, i) => {
              const number = i + 1;
              const angle = number * 30;
              return (
                <span
                  key={number}
                  className="number"
                  style={{
                    transform: `rotate(${angle}deg) translate(85px) rotate(-${angle}deg)`,
                  }}
                >
                  {number}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClockApp;
