import { useState, useEffect } from "react";

interface VideoCategory {
  title: string;
  description: string;
  color: string;
  id: string;
  images: {
    large: string;
    medium: string;
    mini: string;
    small: string;
  };
  videos: Array<{
    id: string;
    title: string;
    description: string;
    durationSeconds: number;
    color: string;
    images: {
      large: string;
      medium: string;
      mini: string;
      small: string;
    };
    youtubeId: string;
    publishDate: string;
    subtitle: string;
    shareUrl: string;
  }>;
}

const useFetch = (url: string, isDebugMode: boolean) => {
  const [data, setData] = useState<VideoCategory | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result.data.videoCategory);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, isDebugMode]);

  return { data, loading, error };
};

export default useFetch;