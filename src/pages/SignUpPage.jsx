import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCohereResponse } from '../components/cohereChat';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const backgroundStyle = {
    height: '91vh',
    width: '100%',
    backgroundImage: "url('/high-rise-city-penthouse/high.webp')",
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

  const socialButtonStyle = {
    width: '100%',
    padding: '13px',
    borderRadius: '8px',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '1.05rem',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    cursor: 'pointer',
    transition: 'background 0.2s, box-shadow 0.2s',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (email === 'newuser@example.com' && password === 'newpassword') {
      setSuccess(true);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } else {
      setError('Sign up failed. Please try again.');
    }
  };

  return (
    <div style={backgroundStyle}>
      <style>{keyframes}</style>
      <div style={{ ...formContainerStyle, ...fadeInStyle }}>
        <h1 style={titleStyle}>Sign Up</h1>
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
          <input
            type="password"
            placeholder="Confirm Password"
            style={inputStyle}
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            style={{ ...socialButtonStyle, background: '#000', color: '#fff', marginTop: '10px' }}
            onClick={() => alert('Apple sign up coming soon!')}
          >
            <svg width="20" height="20" viewBox="0 0 1024 1024" fill="currentColor" style={{ marginRight: 8 }}><path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path></svg>
            Sign Up with Apple
          </button>
          <button
            type="button"
            style={{ ...socialButtonStyle, background: '#fff', color: '#222', border: '1px solid #ccc' }}
            onClick={() => alert('Google sign up coming soon!')}
          >
            <svg width="20" height="20" viewBox="0 0 48 48" style={{ marginRight: 8 }}><g><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></g></svg>
            Sign Up with Google
          </button>
          <button
            type="submit"
            style={{ ...buttonStyle, marginTop: '18px' }}
            onMouseEnter={e => Object.assign(e.currentTarget.style, buttonHoverStyle)}
            onMouseLeave={e => Object.assign(e.currentTarget.style, buttonStyle)}
          >
            Sign Up
          </button>
        </form>
        {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
        {success && <div style={{ color: 'lightgreen', marginTop: '10px' }}>Sign up successful!</div>}
        <p style={{ marginTop: '20px', color: '#b0b0b0' }}>
          Already have an account? <Link to="/login" style={{ color: '#007bff' }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage; 