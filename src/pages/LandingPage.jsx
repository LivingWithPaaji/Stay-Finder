import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCohereResponse } from '../components/cohereChat';

const backgroundUrl = '/beach-hut-on-private-island/hut.webp'; // Use your best hero image

const LandingPage = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleDiscover = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate('/home');
    }, 600); // match the transition duration
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: `url(${backgroundUrl}) center center/cover no-repeat`,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transform: fadeOut ? 'translateY(-100vh)' : 'translateY(0)',
        transition: 'transform 0.7s cubic-bezier(.4,0,.2,1)',
      }}
    >
      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(18, 20, 24, 0.72)',
        zIndex: 1,
      }} />
      {/* Brand Text */}
      <div style={{
        fontSize: '2.7rem',
        fontWeight: 800,
        color: '#fff',
        letterSpacing: '-1.5px',
        marginBottom: 32,
        zIndex: 2,
        textShadow: '0 2px 16px #000a',
        fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
      }}>
        Stay Finder
      </div>
      {/* Headline */}
      <h1 style={{
        color: '#fff',
        fontSize: '2.5rem',
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: 18,
        zIndex: 2,
        textShadow: '0 2px 16px #000a',
      }}>
        Discover a New Standard of Comfort
      </h1>
      <p style={{
        color: '#e0e0e0',
        fontSize: '1.2rem',
        textAlign: 'center',
        marginBottom: 38,
        zIndex: 2,
        textShadow: '0 2px 8px #000a',
        maxWidth: 520,
      }}>
        Enjoy your time in our curated stays with pleasure and peace of mind.
      </p>
      {/* Discover Rooms Button */}
      <button
        onClick={handleDiscover}
        style={{
          padding: '18px 48px',
          fontSize: '1.25rem',
          borderRadius: 12,
          background: 'linear-gradient(90deg, #007bff 60%, #0056b3 100%)',
          color: '#fff',
          fontWeight: 600,
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 24px #0006',
          zIndex: 2,
          transition: 'background 0.3s',
        }}
        onMouseOver={e => e.currentTarget.style.background = 'transparent'}
        onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #007bff 60%, #0056b3 100%)'}
      >
        Discover Stays
      </button>
    </div>
  );
};

export default LandingPage; 