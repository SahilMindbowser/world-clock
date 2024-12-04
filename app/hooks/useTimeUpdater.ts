import { useState, useEffect } from "react";

export const useTimeUpdater = (timezone: string) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date().toLocaleString("en-US", {
        timeZone: timezone,
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(now);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return currentTime;
};
