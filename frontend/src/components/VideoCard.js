import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './VideoCard.css'; // Import the CSS file

const VideoCard = ({ title,thumbnail}) => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleMoreInfoClick = () => {
    navigate('/libraryvideo'); // Navigate to the library route
  };

  return (
    <div className="video-card">
      <img className="video-thumbnail" src={thumbnail} alt="Video Thumbnail" />
      <div className="video-info">
        <h3 className="video-title">{title}</h3>
    
        <button onClick={handleMoreInfoClick} className="info-button">
           Watch Video
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
