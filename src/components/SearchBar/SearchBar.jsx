import React, { useState, useRef, useEffect } from 'react';
import { getCohereResponse } from '../cohereChat';
import './SearchBar.css';

const filterOptions = [
  { value: 'Pet Friendly', label: 'Pet Friendly', icon: '/assets/perfriendly-icon.png' },
  { value: 'Pool', label: 'Pool', icon: '/assets/pool-icon.png' },
  { value: 'WiFi', label: 'WiFi', icon: '/assets/wifi-icon.png' },
  { value: 'Parking', label: 'Parking', icon: '/assets/parking-icon.png' },
  { value: 'Breakfast', label: 'Breakfast', icon: '/assets/breakfast-icon.png' },
  { value: 'Fireplace', label: 'Fireplace', icon: '/assets/fireplace-icon.png' },
  { value: 'Kitchen', label: 'Kitchen', icon: '/assets/kitchen-icon.png' },
  { value: 'Washer', label: 'Washer', icon: '/assets/washer-icon.png' },
  { value: 'AC', label: 'AC', icon: '/assets/ac-icon.png' },
  { value: 'TV', label: 'TV', icon: '/assets/tv-icon.png' },
  { value: 'Garden', label: 'Garden', icon: '/assets/garden-icon.png' },
  { value: 'Sauna', label: 'Sauna', icon: '/assets/sauna-icon.png' },
  { value: 'Private Pool', label: 'Private Pool', icon: '/assets/privatepool-icon.png' },
  { value: 'Mountain View', label: 'Mountain View', icon: '/assets/mountainview-icon.png' },
  { value: 'Ocean View', label: 'Ocean View', icon: '/assets/ocean-icon.png' },
  { value: 'Balcony', label: 'Balcony', icon: '/assets/window-icon.png' },
  { value: 'Patio', label: 'Patio', icon: '/assets/patio-icon.png' },
  { value: 'Hot Tub', label: 'Hot Tub', icon: '/assets/hottub-icon.png' },
  { value: 'Gym Access', label: 'Gym Access', icon: '/assets/fitnessaccess-icon.png' },
  { value: 'City View', label: 'City View', icon: '/assets/cityview-icon.png' },
  { value: 'Beach Access', label: 'Beach Access', icon: '/assets/beachaccess-icon.png' },
  { value: 'Wine Cellar', label: 'Wine Cellar', icon: '/assets/winecellar-icon.png' },
  { value: 'Solar Power', label: 'Solar Power', icon: '/assets/solarpower-icon.png' },
  { value: 'Stargazing Deck', label: 'Stargazing Deck', icon: '/assets/stargazing-icon.png' },
  { value: 'Heating', label: 'Heating', icon: '/assets/heating-icon.png' },
  { value: 'Snow Gear', label: 'Snow Gear', icon: '/assets/snowgear-icon.png' },
  { value: 'Window', label: 'Window', icon: '/assets/window-icon.png' },
  { value: 'Chef Services', label: 'Chef Services', icon: '/assets/chefservice-icon.png' },
];

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [filters, setFilters] = useState([]);
  const [tempFilters, setTempFilters] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [errors, setErrors] = useState({});
  const dropdownRef = useRef(null);

  const validate = () => {
    const newErrors = {};
    if (minPrice && maxPrice && parseFloat(maxPrice) < parseFloat(minPrice)) {
      newErrors.maxPrice = 'Max price cannot be less than min price.';
    } else {
      newErrors.maxPrice = null;
    }
    setErrors(newErrors);
    return !newErrors.maxPrice;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    onSearch({
      location,
      minPrice,
      maxPrice,
      checkIn,
      checkOut,
      filter: filters,
    });
  };

  useEffect(() => {
    if (showDropdown) {
      setTempFilters(filters);
    }
  }, [showDropdown, filters]);

  const handleFilterChange = (value) => {
    setTempFilters((prev) =>
      prev.includes(value)
        ? prev.filter((f) => f !== value)
        : [...prev, value]
    );
  };

  const handleApplyFilters = () => {
    setFilters(tempFilters);
    setShowDropdown(false);
    onSearch({
      location,
      minPrice,
      maxPrice,
      checkIn,
      checkOut,
      filter: tempFilters,
    });
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="search-row">
        <div className="form-group location-group">
          <label htmlFor="location" className="form-label">Location</label>
          <input
            id="location"
            type="text"
            placeholder="Location (e.g., New York)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="form-group price-group">
          <label htmlFor="minPrice" className="form-label">Min Price</label>
          <input
            id="minPrice"
            type="number"
            min="0"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            onBlur={validate}
            className="search-input"
          />
        </div>

        <div className="form-group price-group">
          <label htmlFor="maxPrice" className="form-label">Max Price</label>
          <input
            id="maxPrice"
            type="number"
            min="0"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            onBlur={validate}
            className="search-input"
          />
          {errors.maxPrice && <span className="error-message">{errors.maxPrice}</span>}
        </div>
      </div>

      <div className="search-row">
        <div className="form-group date-group">
          <label htmlFor="checkIn" className="form-label">Check In Date</label>
          <input
            id="checkIn"
            type="date"
            placeholder="DD/MM/YYYY"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="search-input date-input-white-icon"
          />
        </div>
        
        <div className="form-group date-group">
          <label htmlFor="checkOut" className="form-label">Check Out Date</label>
          <input
            id="checkOut"
            type="date"
            placeholder="DD/MM/YYYY"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="search-input date-input-white-icon"
          />
        </div>

        <div className="search-actions">
          <div className="filter-button-wrapper" ref={dropdownRef}>
            <button
              type="button"
              className="filter-icon-btn"
              onClick={() => setShowDropdown((v) => !v)}
              aria-label="Filter amenities"
            >
              <img src="/assets/filter-icon.png" alt="filter" />
              <span className="filter-text">Filter</span>
            </button>
            {showDropdown && (
              <div className="filter-dropdown">
                <div className="filter-options">
                  {filterOptions.map(opt => (
                    <label key={opt.value}>
                      <input
                        type="checkbox"
                        checked={tempFilters.includes(opt.value)}
                        onChange={() => handleFilterChange(opt.value)}
                      />
                      {opt.icon && <img src={opt.icon} alt={opt.label} />}
                      {opt.label}
                    </label>
                  ))}
                </div>
                <div className="filter-actions">
                  <button type="button" className="filter-cancel-btn" onClick={() => setShowDropdown(false)}>
                    Cancel
                  </button>
                  <button type="button" className="filter-apply-btn" onClick={handleApplyFilters}>
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar; 