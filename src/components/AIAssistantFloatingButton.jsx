import React from 'react';

const AIAssistantFloatingButton = ({ onClick, style }) => {
  const containerStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    zIndex: 999,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    ...style,
  };

  const buttonStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#007bff',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
    transition: 'transform 0.2s ease-in-out',
  };

  const iconStyle = {
    fontSize: '28px',
  };

  return (
    <div style={containerStyle}>
      <button 
        style={buttonStyle} 
        onClick={onClick}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Open AI Assistant"
      >
        <span style={iconStyle}>💬</span>
      </button>
    </div>
  );
};

export default AIAssistantFloatingButton; 