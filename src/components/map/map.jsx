import React from 'react';
import './map.css'

const Map = ({url}) => {
  return (
    <div>
     
      <iframe
        title="Google Maps"
        width="600"
        
        height="450"
        loading="lazy"
        allowFullScreen
        src={url}
      ></iframe>
    </div>
  );
};

export default Map;
