import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBg = () => {

 const trailerId = useMovieTrailer();

  return (
    <div>
      <iframe
       className="w-screen aspect-video h-screen"
        src={"https://www.youtube.com/embed/7u3zBVAxx_w?si=V_Unhf4M67QvHD33"+  trailerId + "&autoplay=1&mute=1"}
        title="YouTube video player" 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBg;
