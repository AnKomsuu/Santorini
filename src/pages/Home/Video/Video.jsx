import decore1 from "../../../assets/decoreMini1.svg";
import decore2 from "../../../assets/decoreMini2.svg";
import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
const Video = () => {
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
    <section className="container py-10 md:py-20">
      <div className="flex justify-center items-center md:items-start gap-x-2 md:gap-x-5 mb-10 md:mb-20 mt-10 md:mt-28">
        <img src={decore1} alt="" className="hidden md:block" />
        <h2 className="text-3xl md:text-5xl uppercase text-center leading-tight md:leading-17">
          посмотрите Обзорное видео <br className="hidden md:block" /> о нашем
          отеле
        </h2>
        <img src={decore2} alt="" className="hidden md:block -mt-7" />
      </div>
      <div
        className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl relative bg-black"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <video
          ref={videoRef}
          src="/video.mp4"
          width="100%"
          height="100%"
          controls={true}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={handleVideoEnd}
          className="w-full h-full"
          poster="/videoframe.png"
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
    </section>
  );
};
export default Video;
