"use client";

import { TimeProvider } from "./context/TimeContext";
import { Clock } from "./components/Clock";

const cities = [
  { city: "New York", timezone: "America/New_York" },
  { city: "Toronto", timezone: "America/Toronto" },
  { city: "Mumbai", timezone: "Asia/Kolkata" },
  { city: "London", timezone: "Europe/London" }
];

export default function Home() {
  return (
    <TimeProvider>
      <main className="p-10 bg-gray-100 min-h-screen space-y-5">
        <h2 className="text-2xl text-center">World Clock</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {cities.map(({ city, timezone }) => (
            <Clock key={city} city={city} timezone={timezone} />
          ))}
        </div>
      </main>
    </TimeProvider>
  );
}
