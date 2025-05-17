"use client";

import { useEffect, useState } from "react";

// Parse "HH:MM:SS" into milliseconds
function parseCountdownString(timeString: string) {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  return (hours * 3600 + minutes * 60 + seconds) * 1000;
}

// Format milliseconds into "HH:MM:SS"
function formatTimeLeft(milliseconds: number) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((totalSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

export function useCountdown(countdownString: string) {
  const [timeLeft, setTimeLeft] = useState(
    parseCountdownString(countdownString)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1000 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return {
    formattedTimeLeft: formatTimeLeft(timeLeft),
    timeLeftMs: timeLeft,
    isFinished: timeLeft === 0,
  };
}
