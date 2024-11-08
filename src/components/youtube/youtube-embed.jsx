import React from "react";
import "./youtube-embed.styles.css";

const YouTubeEmbed = ({ youtubeId }) => {
  return (
    <div className="youtube-embed">
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
