import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const backgroundStyle = {
    height: '91vh',
    width: '100%',
    backgroundImage: "url('/luxury-villa-with-infinity-pool/infinity.jpg')",
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

  const keyframes = `@keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    if (email === 'user@example.com' && password === 'password') {
      setSuccess(true);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div style={backgroundStyle}>
      <style>{keyframes}</style>
      <div style={{ ...formContainerStyle, ...fadeInStyle }}>
        <h1 style={titleStyle}>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={e => Object.assign(e.currentTarget.style, buttonHoverStyle)}
            onMouseLeave={e => Object.assign(e.currentTarget.style, buttonStyle)}
          >
            Login
          </button>
        </form>
        {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
        {success && <div style={{ color: 'lightgreen', marginTop: '10px' }}>Login successful!</div>}
        <p style={{ marginTop: '20px', color: '#b0b0b0' }}>
          Don't have an account? <Link to="/signup" style={{ color: '#007bff' }}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage; 