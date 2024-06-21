import React from "react";

export const Video = ({ url }) => {
  return (
    <div className="video-container mx-auto w-full">
      <video autoPlay muted controls loop playsInline className="video-player">
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
};
