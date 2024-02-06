import React from 'react';
import './map.css'

const Map = ({url}) => {
  return (
    <div>
     
      <iframe id="frameMap" title="Google Maps"
        loading="lazy"
        allowFullScreen
        src={url}
      ></iframe>
    </div>
  );
};

export default Map;
