import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const RoomVideo = ({ videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  const handleVideoEnd = () => {
    setIsPlaying(false);
    videoRef.current.load();
  };
  return (
    <section className="bg-grayFon mt-10 md:mt-25 py-10 md:py-25">
      <div className="container">
        <h2 className="text-center uppercase text-3xl md:text-5xl leading-tight md:leading-17 mb-10 md:mb-22">
          посмотрите обзорное <br className="hidden md:block" /> видео номера
        </h2>
        <div
          className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl relative bg-black"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <video
            ref={videoRef}
            src={videoUrl}
            width="100%"
            height="100%"
            controls={true}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={handleVideoEnd}
            className="w-full h-full"
          />
          <div
            onClick={handlePlayPause}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white/30 backdrop-blur-sm p-8 rounded-full cursor-pointer  transition-all duration-300 ${
              isHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-125 pointer-events-none"
            }`}
          >
            {isPlaying ? (
              <FaPause className="text-white text-4xl" />
            ) : (
              <FaPlay className="text-white text-4xl ml-2" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default RoomVideo;
