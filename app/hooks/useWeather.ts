import { useState, useEffect } from "react";

const useWeather = (city: string) => {
  const [temperature, setTemperature] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = "8bbf3271050cc30d560b63525592db6d"; 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        setTemperature(data.main.temp);
        setLoading(false);
      } catch (error: any) {
        setError(error.message || "Something went wrong");
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  return { temperature, loading, error };
};

export { useWeather };
