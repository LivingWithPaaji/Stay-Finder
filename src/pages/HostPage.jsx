import React from 'react';
import { Link } from 'react-router-dom';

const steps = [
    {
        icon: '/assets/verified-icon.png',
        title: 'Create Your Listing',
        description: 'Showcase your space with great photos and a detailed description. Highlight what makes it unique.'
    },
    {
        icon: '/assets/calendar-icon.png',
        title: 'Set Your Availability',
        description: 'Choose the dates your space is available and set your own prices. You have full control over your calendar.'
    },
    {
        icon: '/assets/welcome-icon.png',
        title: 'Welcome Your Guests',
        description: 'Once your listing is live, get ready to welcome travelers and start earning. We\'re here to support you 24/7.'
    }
];

const HostPage = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Become a Host</h1>
          <p style={styles.heroSubtitle}>Join our community and earn money by sharing your extra space.</p>
        </div>
      </div>

      {/* How It Works Section */}
      <div style={styles.mainContent}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Hosting in 3 Easy Steps</h2>
          <div style={styles.stepsGrid}>
            {steps.map((step, index) => (
              <div key={index} style={styles.stepCard}>
                <div style={styles.stepIconContainer}>
                    <img src={step.icon} alt={`${step.title} icon`} style={styles.icon} />
                </div>
                <h3 style={styles.cardTitle}>{step.title}</h3>
                <p style={styles.cardText}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.buttonContainer}>
          <Link to="/get-started" style={styles.ctaButton}>
              Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
    pageContainer: {
        backgroundColor: '#1E1E1E',
        color: '#F0F0F0',
        fontFamily: "'Inter', sans-serif",
    },
    heroSection: {
        position: 'relative',
        textAlign: 'center',
        padding: '120px 20px',
        backgroundImage: "url('/lakeview-glass-house/glass.avif')",
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
        marginBottom: '40px',
        textShadow: '0 2px 4px rgba(0,0,0,0.5)',
    },
    ctaButton: {
        display: 'inline-block',
        padding: '18px 40px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#FFF',
        backgroundColor: '#007BFF',
        borderRadius: '10px',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease',
    },
    mainContent: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px',
    },
    section: {
        marginBottom: '60px',
    },
    sectionTitle: {
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '50px',
    },
    stepsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
    },
    stepCard: {
        backgroundColor: '#282828',
        borderRadius: '12px',
        padding: '30px',
        textAlign: 'center',
        border: '1px solid #333',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    stepIconContainer: {
        backgroundColor: 'rgba(0, 123, 255, 0.1)',
        borderRadius: '50%',
        width: '80px',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '25px',
    },
    icon: {
        width: '40px',
        height: '40px',
    },
    cardTitle: {
        fontSize: '1.5rem',
        fontWeight: '600',
        marginBottom: '15px',
    },
    cardText: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#B0B0B0',
    },
    buttonContainer: {
        textAlign: 'center',
        marginTop: '40px',
    }
};

export default HostPage; 