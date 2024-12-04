"use client";

import React from "react";
import { useTimeUpdater } from "../hooks/useTimeUpdater";

interface ClockProps {
  city: string;
  timezone: string;
  aqi?: string;
  temperature?: string;
}

export const Clock = ({ city, timezone, aqi, temperature }: ClockProps) => {
  const currentTime = useTimeUpdater(timezone);

  return (
    <div className="border p-4 rounded-lg shadow-md w-64 h-max text-center bg-gray-50">
      <h2 className="text-xl font-bold">{city}</h2>
      <p className="text-gray-600">{new Date().toLocaleDateString("en-US", { timeZone: timezone, month: "short", day: "2-digit", year: "numeric" })}</p>
      <p className="text-lg font-mono">{currentTime}</p>
      {aqi && <p className="text-sm text-gray-500">AQI: {aqi}</p>}
      {temperature && <p className="text-sm text-gray-500">Temp: {temperature}°C</p>}
    </div>
  );
};
