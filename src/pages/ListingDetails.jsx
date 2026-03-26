import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockListings } from '../data/listings'; // Import mockListings
import { getCohereResponse } from '../components/cohereChat';

const ListingDetails = () => {
  const { id } = useParams();
  const [ listing, setListing ] = useState(null);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    // Simulate API call with mock data
    // Convert id from string param to number for comparison with mock data
    const listingId = parseInt(id);
    const foundListing = mockListings.find(item => item.id === listingId);
    if (foundListing) {
      setListing(foundListing);
      setError(null);
    } else {
      setError('Listing not found');
      setListing(null);
    }
  }, [ id ]);

  const pageContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const contentWrapperStyle = {
    width: '100%',
    maxWidth: '800px',
    marginTop: '20px',
    paddingTop: '0px',
  };

  const backToListingsStyle = {
    color: '#ccc',
    textDecoration: 'none',
    fontSize: '1.1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    marginBottom: '20px',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: '#fff',
    }
  };

  const cardContainerStyle = {
    backgroundColor: '#282828',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    width: '100%',
    color: '#f0f0f0',
  };

  const cardContentStyle = {
    display: 'flex',
    flexDirection: 'row',
    padding: '30px',
    flexWrap: 'wrap',
    gap: '30px',
  };

  const imageSectionStyle = {
    flex: '1',
    minWidth: '300px',
    maxWidth: '400px',
    flexShrink: '0',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '280px',
    objectFit: 'cover',
    borderRadius: '12px 0 0 12px', // Rounded only left corners for image
  };

  const imageOverlayStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '15px 20px',
    color: '#f0f0f0',
    borderBottomLeftRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
  };

  const overlayTitleStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#f0f0f0',
  };

  const overlayDescriptionStyle = {
    fontSize: '0.9rem',
    color: '#ccc',
    marginBottom: '0',
  };

  const detailsSectionStyle = {
    flex: '1.5',
    minWidth: '350px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '30px',
    backgroundColor: '#1a1a1a',
  };

  const listingTitleStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#f0f0f0',
  };

  const hostInfoStyle = {
    fontSize: '0.9rem',
    color: '#ccc',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#ccc',
    lineHeight: '1.6',
    marginBottom: '20px',
  };

  const amenityIconsStyle = {
    display: 'flex',
    gap: '15px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  };

  const amenityItemStyle = {
    display: 'flex',
    alignItems: 'center',
    color: '#ccc',
    fontSize: '0.95rem',
  };

  const iconStyle = {
    marginRight: '8px',
    width: '20px',
    height: '20px',
  };

  const priceAndBookStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: '15px',
    borderTop: '1px solid #333',
  };

  const priceStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#f0f0f0',
  };

  const bookButtonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const reviewsSectionStyle = {
    marginTop: '30px',
    background: '#232323',
    borderRadius: '10px',
    padding: '24px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    width: '100%',
    maxWidth: '800px',
    color: '#f0f0f0',
  };

  const reviewItemStyle = {
    borderBottom: '1px solid #333',
    padding: '16px 0',
    marginBottom: '8px',
  };

  const reviewHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '6px',
  };

  const starIconStyle = {
    width: '22px',
    height: '22px',
    marginRight: '2px',
    verticalAlign: 'middle',
  };

  function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<img key={i} src="/assets/starrating-icon.png" alt="star" style={starIconStyle} />);
    }
    if (halfStar) {
      stars.push(<img key="half" src="/assets/starratehalf-icon.png" alt="half star" style={starIconStyle} />);
    }
    return stars;
  }

  if (error) return <h1 style={{ color: 'red', textAlign: 'center', marginTop: '40px' }}>Error: { error }</h1>;
  if (!listing) return <h1 style={{ textAlign: 'center', marginTop: '40px', color: '#f0f0f0' }}>Loading listing details...</h1>;

  return (
    <div style={pageContainerStyle}>
      <div style={contentWrapperStyle}>
        <Link to="/home" style={backToListingsStyle}>
          &lt;<span> Back to listings</span>
        </Link>

        <div style={cardContainerStyle}>
          <div style={cardContentStyle}>
            <div style={imageSectionStyle}>
              <img src={ listing.images[0] } alt={ listing.title } style={imageStyle} loading="lazy" />
              <div style={imageOverlayStyle}>
                <p style={overlayTitleStyle}>{listing.title}</p>
                <p style={overlayDescriptionStyle}>{listing.description}</p>
              </div>
            </div>
            <div style={detailsSectionStyle}>
              <div>
                <h2 style={listingTitleStyle}>{ listing.title }</h2>
                <p style={hostInfoStyle}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', marginRight: '5px' }}>{renderStars(listing.rating)}</span>
                  <span style={{ color: 'white', fontWeight: 'bold', marginRight: '5px' }}>{listing.rating}</span>
                  Hosted by JohiSuperhost
                </p>
                <p style={descriptionStyle}>{ listing.description }</p>
                <div style={amenityIconsStyle}>
                  <div style={amenityItemStyle}>
                    <img src='/assets/location-icon.png' alt='Location' style={iconStyle}/> {listing.location}
                  </div>
                  <div style={{height: 0}}></div>
                  {/* Dynamic amenities rendering */}
                  {Array.isArray(listing.amenities) && listing.amenities.map((amenity, idx) => {
                    const amenityIconMap = {
                      'WiFi': 'wifi-icon.png',
                      'Wi-Fi': 'wifi-icon.png',
                      'Air Conditioning': 'ac-icon.png',
                      'Air-Conditioning': 'ac-icon.png',
                      'AC': 'ac-icon.png',
                      'TV': 'tv-icon.png',
                      'Kitchen': 'kitchen-icon.png',
                      'Pool': 'pool-icon.png',
                      'Private Pool': 'privatepool-icon.png',
                      'Parking': 'parking-icon.png',
                      'Fireplace': 'fireplace-icon.png',
                      'Hot Tub': 'hottub-icon.png',
                      'Washer': 'washer-icon.png',
                      'Pet Friendly': 'perfriendly-icon.png',
                      'Breakfast': 'breakfast-icon.png',
                      'Garden': 'garden-icon.png',
                      'Ocean View': 'ocean-icon.png',
                      'Beach Access': 'beachaccess-icon.png',
                      'Beach View': 'beachaccess-icon.png',
                      'Mountain View': 'mountainview-icon.png',
                      'City View': 'cityview-icon.png',
                      'Sauna': 'sauna-icon.png',
                      'Wine Cellar': 'winecellar-icon.png',
                      'Stargazing Deck': 'stargazing-icon.png',
                      'Solar Power': 'solarpower-icon.png',
                      'Patio': 'patio-icon.png',
                      'Chef Services': 'chefservice-icon.png',
                      'Heating': 'heating-icon.png',
                      'Snow Gear': 'snowgear-icon.png',
                      'Floor-to-Ceiling Windows': 'window-icon.png',
                      'Gym Access': 'fitnessaccess-icon.png',
                    };
                    const iconFile = amenityIconMap[amenity];
                    return (
                      <div style={amenityItemStyle} key={amenity+idx}>
                        {iconFile ? (
                          <img src={`/assets/${iconFile}`} alt={amenity} style={iconStyle} />
                        ) : null}
                        {amenity}
                      </div>
                    );
                  })}
                  {/* Bedroom count always shown */}
                  <div style={amenityItemStyle}>
                    <img src='/assets/bedroom-icon.png' alt='Bedroom' style={iconStyle}/> {listing.bedrooms} Bedroom{listing.bedrooms > 1 ? 's' : ''}
                  </div>
                </div>
              </div>
              <div style={priceAndBookStyle}>
                <p style={priceStyle}>${ listing.price }/Night</p>
                <button style={bookButtonStyle}>Book Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews section directly below the card/details section */}
        {listing.reviews && listing.reviews.length > 0 && (
          <div style={reviewsSectionStyle}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '18px', color: 'white' }}>Guest Reviews</h3>
            {listing.reviews.map((review, idx) => (
              <div key={idx} style={reviewItemStyle}>
                <div style={reviewHeaderStyle}>
                  <span style={{ fontWeight: 'bold', color: '#fff' }}>{review.name}</span>
                  <span>{renderStars(review.rating)}</span>
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>{review.rating.toFixed(1)}</span>
                </div>
                <div style={{ color: '#ccc', fontSize: '1rem' }}>{review.comment}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ marginTop: '300px', textAlign: 'center' }}>
        
      </div>
    </div>
  );
};

export default ListingDetails; 