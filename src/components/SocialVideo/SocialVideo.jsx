import React from 'react';

const TikTokVideo = ({ url }) => {
  return (
    <div>
      <iframe
        title="TikTok Video"
        width="100%"
        height="400"
        src={url}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TikTokVideo;
