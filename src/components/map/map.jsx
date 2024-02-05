import React from 'react';
import './map.css'

const Map = () => {
  return (
    <div>
      <h1>Your React App</h1>
      <iframe
        title="Google Maps"
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.7930080563057!2d80.1045661!3d6.9116981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3abfdf24bb4f1%3A0xd244814799827974!2sW56P%2BMQP%2C%20Digana!5e0!3m2!1sen!2slk!4v1624327450682!5m2!1sen!2slk"
      ></iframe>
    </div>
  );
};

export default Map;
