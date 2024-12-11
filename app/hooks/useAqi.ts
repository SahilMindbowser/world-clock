import { useState, useEffect } from "react";

const useAqi = (city: string) => {
  const [aqi, setAqi] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAqiData = async () => {
      const apiKey = "33c85a7fe8d59bb39b325e06c03429b82bd5b9e6";
      const url = `https://api.waqi.info/feed/${city}/?token=${apiKey}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch AQI data");
        }

        const data = await response.json();

        if (data.status === "ok" && data.data.aqi) {
          setAqi(data.data.aqi);
        } else {
          throw new Error("Invalid AQI data");
        }

        setLoading(false);
      } catch (error: any) {
        setError(error.message || "Something went wrong");
        setLoading(false);
      }
    };

    fetchAqiData();
  }, [city]);

  return { aqi, loading, error };
};

export { useAqi };
