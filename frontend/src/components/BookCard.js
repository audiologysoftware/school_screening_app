// import React from 'react';
// import './BookCard.css'; // Import the CSS file

// const BookCard = ({ title, author, description, coverImage, infoLink }) => {
//   return (
//     <div className="book-card">
//       <img className="book-cover" src={coverImage} alt="Book Cover" />
//       <div className="book-info">
//         <h3 className="book-title">{title}</h3>
 
//         <a href={infoLink} target="_blank" rel="noopener noreferrer" className="info-button">
//           More Info
//         </a>
//       </div>
//     </div>
//   );
// };

// export default BookCard;


import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './BookCard.css'; // Import the CSS file

const BookCard = ({ title, author, description, coverImage }) => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleMoreInfoClick = () => {
    navigate('/library'); // Navigate to the library route
  };

  return (
    <div className="book-card">
      <img className="book-cover" src={coverImage} alt="Book Cover" />
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <button onClick={handleMoreInfoClick} className="info-button">
          More Info
        </button>
      </div>
    </div>
  );
};

export default BookCard;
