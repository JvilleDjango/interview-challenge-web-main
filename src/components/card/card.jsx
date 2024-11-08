import React, { useState } from "react";
import "./card.styles.css";
import { useYouTube } from "../../context/youtube.context";
import { formatTime } from "../../utilities";

const Card = ({
  id,
  images,
  title,
  color,
  description,
  durationSeconds,
  youtubeId,
  isDebugMode,
}) => {
  const { setSelectedYouTubeId } = useYouTube();

  const handleClick = () => {
    setSelectedYouTubeId(youtubeId, isDebugMode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="card" id={id} onClick={handleClick} style={{"--card-color": color}}>
      <div className="card__media">
        <figure>
          <img src={images.mini} alt={title} />
        </figure>
      </div>
      <div className="card__body">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="card__actions">
        <div>{formatTime(durationSeconds)} minutes</div>
        <div className="card__actions__play" ></div>
      </div>
    </section>
  );
};

export default Card;
