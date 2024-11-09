import React from "react";
import "./card.styles.css";
import { useYouTube } from "../../context/youtube.context";
import { formatTime } from "../../utilities";

interface CardProps {
  id: string;
  images: {
    mini: string;
  };
  title: string;
  color: string;
  description: string;
  durationSeconds: number;
  youtubeId: string;
  isDebugMode: boolean;
}

const Card: React.FC<CardProps> = ({
  id,
  images,
  title,
  description,
  durationSeconds,
  youtubeId,
  isDebugMode,
}) => {
  const { setSelectedYouTubeId } = useYouTube();

  const handleClick = () => {
    setSelectedYouTubeId(youtubeId, isDebugMode);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className="card"
      id={id}
      onClick={handleClick}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      role="button"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-description ${id}-duration`}
    >
      <div
        className="card__media"
        role="img"
        aria-label={`Video thumbnail for ${title}`}
      >
        <figure>
          <img src={images.mini} alt={`Thumbnail for ${title}`} />
        </figure>
      </div>
      <div className="card__body">
        <h4 id={`${id}-title`}>{title}</h4>
        <p id={`${id}-description`}>{description}</p>
      </div>
      <div className="card__actions">
        <div id={`${id}-duration`} aria-label="Video duration">
          {formatTime(durationSeconds)} minutes
        </div>
        <div className="card__actions__play" aria-hidden="true"></div>
      </div>
    </section>
  );
};

export default Card;
