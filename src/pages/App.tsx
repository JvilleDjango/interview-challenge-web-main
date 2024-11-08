import VideoSeries from "./video-series";
import { YouTubeProvider } from "../context/youtube.context";

export const App = () => (
  <YouTubeProvider>
    <VideoSeries />
  </YouTubeProvider>
);
