import React, { useState, useEffect } from "react";
import "./video-series.styles.css";
import useFetch from "../../hooks/useFetch";
import MastHead from "../../components/mast-head";
import Card from "../../components/card";

const VideoSeries = () => {
  const [selectedYouTubeId, setSelectedYouTubeId] = useState(null);

  const isDebugMode = new URLSearchParams(window.location.search).has("debug");
  const { data, loading, error } = useFetch("/api/data.json", isDebugMode);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="video-series">
      <MastHead
        {...{
          title: data.title,
          description: data.description,
          image: data.images.large,
          color: data.color,
        }}
      />
      <section className="video-gallery">
        {data &&
          data.videos.map((video) => (
            <Card {...video} key={video.id} isDebugMode={isDebugMode} />
          ))}
      </section>
    </section>
  );
};

export default VideoSeries;
