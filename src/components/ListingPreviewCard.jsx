import React from 'react';
import StarRating from './StarRating';

const ListingPreviewCard = ({ listing, position }) => {
  if (!listing) return null;

  const cardStyle = {
    position: 'fixed',
    top: position.y,
    left: position.x,
    transform: 'translate(-110%, -50%)', // Position it to the left of the cursor
    width: '280px',
    backgroundColor: '#1a1a1a',
    color: '#f0f0f0',
    boxShadow: '0 8px 24px rgba(0,0,0,0.7)',
    borderRadius: '12px',
    zIndex: 1100, // Ensure it's above the chat panel
    overflow: 'hidden',
    border: '1px solid #444',
    fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
    pointerEvents: 'none', // Prevent the card from capturing mouse events
  };

  const imageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  };

  const contentStyle = {
    padding: '15px',
  };

  const titleStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const priceStyle = {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#00aaff',
  };

  const ratingStyle = {
    fontSize: '0.9rem',
    color: '#b0b0b0',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    marginTop: '8px',
  };

  return (
    <div style={cardStyle}>
      <img src={listing.images[0]} alt={listing.title} style={imageStyle} />
      <div style={contentStyle}>
        <div style={titleStyle}>{listing.title}</div>
        <div style={priceStyle}>${listing.price}/night</div>
        <div style={ratingStyle}>
          <StarRating rating={listing.rating} />
          <span style={{ marginLeft: '8px', color: '#b0b0b0' }}>{listing.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ListingPreviewCard; 