import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import { mockListings } from '../data/listings'; // Import mockListings
import { getCohereResponse } from '../components/cohereChat';
import StarRating from '../components/StarRating';
import './Home.css';

const LISTINGS_PER_PAGE = 8; // Reverting to 8 listings per page to show all on one page initially

// Add this function at the top level of Home.jsx (outside the Home component)
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const stars = [];
  const starIconStyle = {
    width: '18px',
    height: '18px',
    marginRight: '1px',
    verticalAlign: 'middle',
  };
  for (let i = 0; i < fullStars; i++) {
    stars.push(<img key={i} src="/assets/starrating-icon.png" alt="star" style={starIconStyle} />);
  }
  if (halfStar) {
    stars.push(<img key="half" src="/assets/starratehalf-icon.png" alt="half star" style={starIconStyle} />);
  }
  return stars;
}

const heroBackgroundUrl = '/beach-hut-on-private-island/hut.webp'; // Use your best hero image

const Home = () => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState({});
  const [searchParamsURL, setSearchParamsURL] = useSearchParams();
  
  const [hoveredCardId, setHoveredCardId] = useState(null);
  
  // Get current page from URL query params, default to 1 if not present
  const currentPage = parseInt(searchParamsURL.get('page')) || 1;

  // Ref for the 3D background text
  const backgroundTextRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (backgroundTextRef.current) {
        // Position the center of the text at the mouse pointer
        backgroundTextRef.current.style.left = `${e.clientX}px`;
        backgroundTextRef.current.style.top = `${e.clientY}px`;
        backgroundTextRef.current.style.transform = 'translate(-50%, -50%)';
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Simulate API call with mock data
    const filteredListings = mockListings.filter(listing => {
      // Use optional chaining or a default empty string for safe access
      const lowerCaseLocation = (listing.location || '').toLowerCase();
      const searchLocation = searchParams.location ? searchParams.location.toLowerCase() : '';
      const minPrice = parseFloat(searchParams.minPrice);
      const maxPrice = parseFloat(searchParams.maxPrice);
      const filter = searchParams.filter || '';

      let matches = true;

      if (searchLocation && !lowerCaseLocation.includes(searchLocation)) {
        matches = false;
      }

      if (minPrice && listing.price < minPrice) {
        matches = false;
      }

      if (maxPrice && listing.price > maxPrice) {
        matches = false;
      }

      // Filter by amenities if any are selected
      if (Array.isArray(filter) && filter.length > 0 && Array.isArray(listing.amenities)) {
        const amenitiesLower = listing.amenities.map(a => a.toLowerCase());
        // All selected filters must be present in amenities
        const allPresent = filter.every(f => amenitiesLower.includes(f.toLowerCase()));
        if (!allPresent) {
          matches = false;
        }
      }

      // Basic date availability check (can be expanded)
      if (searchParams.checkIn && searchParams.checkOut) {
        const checkInDate = new Date(searchParams.checkIn);
        const checkOutDate = new Date(searchParams.checkOut);
        // For mock data, we'll assume all listings are available for simplicity
        // In a real app, you'd check listing.availability array
      }

      return matches;
    });

    // Calculate the start and end index for the current page
    const startIndex = (currentPage - 1) * LISTINGS_PER_PAGE;
    const endIndex = startIndex + LISTINGS_PER_PAGE;
    const listingsToDisplay = filteredListings.slice(startIndex, endIndex);

    setListings(listingsToDisplay);
    setError(null); // Clear any previous errors

  }, [searchParams, currentPage]); // Add currentPage to dependency array

  const handleSearch = (params) => {
    setSearchParams(params);
    // Reset to first page on new search and update URL
    setSearchParamsURL({ ...params, page: '1' });
  };

  const handlePageChange = (pageNumber) => {
    // Update URL with new page number while preserving other search params
    const newParams = new URLSearchParams(searchParamsURL);
    newParams.set('page', pageNumber.toString());
    setSearchParamsURL(newParams);
  };

  const totalPages = Math.ceil(mockListings.length / LISTINGS_PER_PAGE); // Calculate total pages

  const homePageStyle = {
    padding: '10px 20px 20px 20px',
    maxWidth: '1400px',
    margin: '0 auto',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  };

  const sectionTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#f0f0f0',
  };

  const listingsGridStyle = {
    listStyle: 'none',
    padding: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px',
    marginBottom: '2rem',
  };

  const listingCardStyle = {
    backgroundColor: '#282828',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    color: 'inherit',
  };

  const listingImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderBottom: '1px solid #3a3a3a',
  };

  const listingInfoStyle = {
    padding: '16px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  };

  const listingTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#f0f0f0',
  };

  const listingLocationStyle = {
    color: '#b0b0b0',
    fontSize: '0.95rem',
    marginBottom: '4px',
  };

  const listingPriceStyle = {
    color: '#f0f0f0',
    fontWeight: 'bold',
    fontSize: '1.15rem',
    marginTop: 'auto', // Push price to the bottom if content above is shorter
  };

  const noListingsStyle = {
    textAlign: 'center',
    marginTop: '40px',
    color: '#f0f0f0',
    width: '100%',
    gridColumn: '1 / -1', // Span across all columns in the grid
  };

  const paginationContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    gap: '10px',
    marginBottom: '20px', // Add some margin before the footer
  };

  const paginationButtonStyle = {
    padding: '10px 15px',
    backgroundColor: '#4a4a4a',
    color: '#f0f0f0',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.2s ease, transform 0.2s ease',
  };

  const activePaginationButtonStyle = {
    backgroundColor: '#007bff',
    fontWeight: 'bold',
    transform: 'scale(1.05)',
  };

  const ratingContainerStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '0.9rem',
  };
  
  const ratingTextStyle = {
    fontWeight: 'bold',
    marginLeft: '4px',
  };

  if (error) return <h1 className="error-message">Error: {error}</h1>;
  if (listings.length === 0) return <h1 className={noListingsStyle}>No listings found for your search criteria.</h1>;

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroBackgroundUrl})` }}>
        <div className="hero-overlay" />
        <h1 className="hero-title">Discover a New Standard of Comfort</h1>
        <p className="hero-subtitle">
          Enjoy your time in our curated stays with pleasure and peace of mind.
        </p>
        <div className="hero-search-bar">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      {/* Listings Section */}
      <div className="home-page-content">
        <h2 className="section-title">Explore Stays</h2>
        <div className="listings-grid">
          {listings.map(listing => (
            <Link 
              to={`/listing/${listing.id}`} 
              key={listing.id} 
              className="listing-card-link"
              onMouseEnter={() => setHoveredCardId(listing.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              style={{
                transform: hoveredCardId === listing.id ? 'scale(1.02)' : 'scale(1)'
              }}
            >
              <img src={listing.images?.[0] || '/Cozy-Downtown-Apartment/cozy.jpg'} alt={listing.title} className="listing-card-image" loading="lazy" />
              <div className="rating-container">
                <StarRating rating={listing.rating} />
                <span className="rating-text">{listing.rating}</span>
              </div>
              <div className="listing-card-info">
                <h3 className="listing-card-title">{listing.title}</h3>
                <p className="listing-card-location">Location: {listing.location}</p>
                <p className="listing-card-price">Price: ${listing.price}/Night</p>
              </div>
            </Link>
          ))}
        </div>
        {listings.length === 0 && (
          <div className={noListingsStyle}>No listings found for your search criteria.</div>
        )}
        {/* Pagination */}
        <div className="pagination-container">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home; 

<style>
  {`
    .listing-card {
      position: relative;
    }
    .home-page {
      position: relative;
      z-index: 1;
    }
    @media (max-width: 768px) {
      .listings-grid {
        grid-template-columns: 1fr;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        display: flex;
        padding-bottom: 20px;
      }
      .listing-card {
        scroll-snap-align: start;
        flex-shrink: 0;
        width: 80%;
        margin-right: 20px;
      }
      .listing-card:last-child {
        margin-right: 0;
      }
      .listing-title {
        font-size: 1.1rem;
      }
      .home-page {
        padding: 10px;
      }
    }
  `}
</style> 