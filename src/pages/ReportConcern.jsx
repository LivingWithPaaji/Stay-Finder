import React, { useState } from 'react';

const ReportConcern = () => {
  const [form, setForm] = useState({ name: '', email: '', concern: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.concern) {
      setSubmitted(true);
      // Here you would typically send form data to a backend
    }
  };

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Report a Concern</h1>
          <p style={styles.heroSubtitle}>We are here to help. Please provide details about the issue.</p>
        </div>
      </div>

      {/* Form Section */}
      <div style={styles.formContainer}>
        {submitted ? (
          <div style={styles.thankYouMessage}>
            <img src="/assets/teamwork.png" alt="Thank you" style={styles.thankYouIcon} />
            <h2 style={styles.thankYouTitle}>Thank You for Your Report</h2>
            <p>We take your concerns seriously. Our team will review the information and get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label htmlFor="name" style={styles.label}>Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="concern" style={styles.label}>Describe Your Concern</label>
              <textarea
                id="concern"
                name="concern"
                value={form.concern}
                onChange={handleChange}
                required
                rows={6}
                style={styles.textarea}
              />
            </div>
            <button type="submit" style={styles.submitButton}>
              Submit Report
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// -- STYLES --
const styles = {
    pageContainer: {
        backgroundColor: '#1E1E1E',
        color: '#F0F0F0',
        fontFamily: "'Inter', sans-serif",
    },
    heroSection: {
        position: 'relative',
        textAlign: 'center',
        padding: '100px 20px',
        backgroundImage: "url('/desert-home-retreat/desert.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
    },
    heroOverlay: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1,
    },
    heroContent: {
        position: 'relative',
        zIndex: 2,
    },
    heroTitle: {
        fontSize: '3.5rem',
        fontWeight: 'bold',
        marginBottom: '15px',
        textShadow: '0 2px 4px rgba(0,0,0,0.5)',
    },
    heroSubtitle: {
        fontSize: '1.5rem',
        textShadow: '0 2px 4px rgba(0,0,0,0.5)',
    },
    formContainer: {
        maxWidth: '700px',
        margin: '60px auto',
        padding: '40px',
        backgroundColor: '#282828',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '10px',
        fontSize: '1.1rem',
        fontWeight: '600',
        color: '#D0D0D0',
    },
    input: {
        padding: '15px',
        fontSize: '1rem',
        borderRadius: '8px',
        border: '1px solid #444',
        backgroundColor: '#1E1E1E',
        color: '#F0F0F0',
        outline: 'none',
    },
    textarea: {
        padding: '15px',
        fontSize: '1rem',
        borderRadius: '8px',
        border: '1px solid #444',
        backgroundColor: '#1E1E1E',
        color: '#F0F0F0',
        resize: 'vertical',
        minHeight: '120px',
        outline: 'none',
    },
    submitButton: {
        padding: '18px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#FFF',
        backgroundColor: '#007BFF',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        marginTop: '10px',
    },
    thankYouMessage: {
        textAlign: 'center',
        padding: '40px 0',
    },
    thankYouIcon: {
        width: '80px',
        height: '80px',
        marginBottom: '25px',
    },
    thankYouTitle: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '15px',
    }
};

export default ReportConcern; 