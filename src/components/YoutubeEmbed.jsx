import React from "react";

const YoutubeEmbed = ({ embedId }) => (
  <div className="w-full h-full">
    <iframe
      className="w-full h-full"
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;