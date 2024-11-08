import React, { createContext, useState, useContext } from "react";

interface YouTubeContextType {
  selectedYouTubeId: string | null;
  setSelectedYouTubeId: (youtubeId: string, shouldFail?: boolean) => void;
  error: string | null;
  loading: boolean;
}

const YouTubeContext = createContext<YouTubeContextType | undefined>(undefined);

export const useYouTube = (): YouTubeContextType => {
  const context = useContext(YouTubeContext);
  if (!context) {
    throw new Error("useYouTube must be used within a YouTubeProvider");
  }
  return context;
};

export const YouTubeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [selectedYouTubeId, setSelectedYouTubeId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const selectYouTubeId = (youtubeId: string, shouldFail: boolean = false): void => {
    setLoading(true);
    if (shouldFail && Math.random() < 0.5) {
      setTimeout(() => {
        setError("Failed to load video. Please try again.");
        setLoading(false);
      }, 1000);
    } else {
      setError(null);
      setTimeout(() => {
        setSelectedYouTubeId(youtubeId);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <YouTubeContext.Provider
      value={{
        selectedYouTubeId,
        setSelectedYouTubeId: selectYouTubeId,
        error,
        loading,
      }}
    >
      {children}
    </YouTubeContext.Provider>
  );
};
