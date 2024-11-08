import React, { createContext, useState, useContext } from "react";

const YouTubeContext = createContext();

export const useYouTube = () => useContext(YouTubeContext);

export const YouTubeProvider = ({ children }) => {
  const [selectedYouTubeId, setSelectedYouTubeId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const selectYouTubeId = (youtubeId, shouldFail = false) => {
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
