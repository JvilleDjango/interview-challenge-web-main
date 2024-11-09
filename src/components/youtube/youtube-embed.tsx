import React from "react";
import "./youtube-embed.styles.css";

interface YouTubeEmbedProps {
  youtubeId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ youtubeId }) => {
  return (
    <div
      className="youtube-embed"
      role="region"
    >
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title="YouTube video player"
        role="img"
        aria-label="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
