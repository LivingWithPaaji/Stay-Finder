import React from 'react';
import { getCohereResponse } from '../components/cohereChat';

const GetStartedPage = () => {
  const backgroundStyle = {
    height: '91vh',
    width: '100%',
    backgroundImage: "url('/cozy-downtown-apartment/cozy2.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const formContainerStyle = {
    padding: '40px',
    maxWidth: '450px',
    width: '100%',
    backgroundColor: 'rgba(40,40,40,0.85)',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    color: '#f0f0f0',
    textAlign: 'center',
    margin: '40px 0',
  };

  const titleStyle = {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#f0f0f0',
  };

  const subtitleStyle = {
    fontSize: '1.1rem',
    marginBottom: '30px',
    color: '#b0b0b0',
    lineHeight: '1.5',
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    marginBottom: '20px',
    borderRadius: '8px',
    border: '1px solid #444',
    backgroundColor: '#3a3a3a',
    color: '#f0f0f0',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '15px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const fadeInStyle = {
    animation: 'fadeIn 0.8s ease-out',
  };

  // Add keyframes for fadeIn
  const keyframes = `@keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }`;

  return (
    <div style={backgroundStyle}>
      <style>{keyframes}</style>
      <div style={{ ...formContainerStyle, ...fadeInStyle }}>
        <h1 style={titleStyle}>Get Started</h1>
        <p style={subtitleStyle}>
          Sign up to list your property and start hosting travelers.
        </p>

        <form>
          <input type="text" placeholder="First name" style={inputStyle} />
          <input type="text" placeholder="Last name" style={inputStyle} />
          <input type="email" placeholder="Email" style={inputStyle} />
          <input type="password" placeholder="Password" style={inputStyle} />
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
          >
            List Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetStartedPage; 