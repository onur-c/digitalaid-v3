import React from "react";

const YoutubeEmbed = ({ embedId }) => (
  <div className="relative flex items-center justify-center w-full h-full p-4 overflow-hidden ">
    <iframe
      width="760"
      height="409"
      className="rounded"
      src={`https://www.youtube.com/embed/${embedId}?si=tNXIl4qbrM7Uray6`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
);

export default YoutubeEmbed;
