import React from "react";
import "./mast-head.styles.css";
import YouTubeEmbed from "../youtube";
import Spinner from "../spinner";
import { useYouTube } from "../../context/youtube.context";

const MastHead = ({ title, description, image, color }) => {
  const { selectedYouTubeId, error, loading } = useYouTube();

  return (
    <section className="mast-head" style={{
      '--masthead-image': `url(${image})`,
      backgroundColor: color,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      '--border-color': `10px solid ${color}`
    }}>
      <article className="mast-head__left-column">
        <h1>BibleProject</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </article>
      <article className="mast-head__right-column">
        {loading ? (
          <Spinner /> 
        ) : error ? (
          <p className="error-message">{error}</p> 
        ) : (
          selectedYouTubeId && <YouTubeEmbed youtubeId={selectedYouTubeId} />
        )}
      </article>
    </section>
  );
};

export default MastHead;
