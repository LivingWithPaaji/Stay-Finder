import React from 'react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  const starStyle = {
    width: '18px',
    height: '18px',
    margin: '0 1px',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {[...Array(fullStars)].map((_, i) => (
        <img key={`full-${i}`} src="/assets/starrating-icon.png" alt="Full Star" style={starStyle} />
      ))}
      {halfStar === 1 && <img src="/assets/starratehalf-icon.png" alt="Half Star" style={starStyle} />}
      {[...Array(emptyStars)].map((_, i) => (
        <img key={`empty-${i}`} src="/assets/starrating-icon.png" alt="Empty Star" style={{ ...starStyle, filter: 'grayscale(100%) opacity(0.2)' }} />
      ))}
    </div>
  );
};

export default StarRating; 