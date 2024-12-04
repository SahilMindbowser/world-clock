"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

interface TimeContextProps {
  currentTime: Date;
}

const TimeContext = createContext<TimeContextProps | undefined>(undefined);

export const TimeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TimeContext.Provider value={{ currentTime }}>
      {children}
    </TimeContext.Provider>
  );
};

export const useTimeContext = () => {
  const context = React.useContext(TimeContext);
  if (!context) {
    throw new Error("useTimeContext must be used within a TimeProvider");
  }
  return context;
};
