import React from "react";
import "./mast-head.styles.css";
import YouTubeEmbed from "../youtube";
import Spinner from "../spinner";
import { useYouTube } from "../../context/youtube.context";

interface MastHeadProps {
  title: string;
  description: string;
  image: string;
  color: string;
}

const MastHead: React.FC<MastHeadProps> = ({
  title,
  description,
  image,
  color,
}) => {
  const { selectedYouTubeId, error, loading } = useYouTube();

  return (
    <section
      className="mast-head"
      aria-labelledby="masthead-title"
      style={
        {
          "--masthead-image": `url(${image})`,
          "--masthead-bg-color": color,
          "--masthead-bottom-border": `10px solid ${color}`,
        } as React.CSSProperties
      }
    >
      <header className="mast-head__left-column">
        <h1>BibleProject</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </header>
      <aside
        className="mast-head__right-column"
        role="complementary"
        aria-label="Video content"
      >
        {loading ? (
          <Spinner />
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          selectedYouTubeId && <YouTubeEmbed youtubeId={selectedYouTubeId} />
        )}
      </aside>
    </section>
  );
};

export default MastHead;
