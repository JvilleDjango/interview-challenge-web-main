import "./video-series.styles.css";
import useFetch from "../../hooks/useFetch";
import MastHead from "../../components/mast-head";
import Card from "../../components/card";

const VideoSeries: React.FC = () => {
  const isDebugMode = new URLSearchParams(window.location.search).has("debug");
  const { data, loading, error } = useFetch("/api/data.json", isDebugMode);

  if (loading) return <p role="status" aria-live="polite">Loading...</p>;
  if (error) return <p role="alert">Error: {error}</p>;

  return (
    <section className="video-series" aria-labelledby="video-series-title" aria-describedby="video-series-description">
      {data && (
        <>
          <MastHead
            title={data.title}
            description={data.description}
            image={data.images.large}
            color={data.color}
          />
          <section className="video-gallery" aria-label="Video Gallery">
            {data.videos.map((video) => (
              <Card {...video} key={video.id} isDebugMode={isDebugMode} />
            ))}
          </section>
        </>
      )}
    </section>
  );
};

export default VideoSeries;
