"use client";

import { useEffect, useState } from "react";
import { Card } from "../ui/card";

interface CountdownTimerProps {
  time: number; // Time in hours
}

const CBTestTimer: React.FC<CountdownTimerProps> = ({ time }) => {
  const [secondsLeft, setSecondsLeft] = useState(time * 3600);

  useEffect(() => {
    if (secondsLeft > 0) {
      const intervalId = setInterval(() => {
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [secondsLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Card className="p-4 mx-auto mb-4 text-center w-60 text-destructive">
      {secondsLeft > 0 ? (
        <p>Time remaining: {formatTime(secondsLeft)}</p>
      ) : (
        <p>Times up!</p>
      )}
    </Card>
  );
};

export default CBTestTimer;
