import React from 'react';

const guestTips = [
    'Always communicate and pay through Stay Finder to be protected by our policies.',
    'Read reviews and check host verification status before you book a stay.',
    'Review the property\'s safety features and familiarize yourself with the space upon arrival.',
    'Share your itinerary with a friend or family member for added peace of mind.',
];

const hostTips = [
    'Keep your communication and bookings exclusively on the Stay Finder platform.',
    'Set clear house rules and provide emergency contact information for your guests.',
    'Ensure your property is equipped with essential safety features like smoke detectors.',
    'Screen guest profiles and read reviews before accepting a booking request.',
];

const SafetyInfo = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Your Safety is Our Priority</h1>
          <p style={styles.heroSubtitle}>Learn how we're committed to keeping our community secure.</p>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Our Commitment Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Commitment to Safety</h2>
          <div style={styles.cardGrid}>
            <div style={styles.card}>
              <img src="/assets/verified-icon.png" alt="Verified" style={styles.icon} />
              <h3 style={styles.cardTitle}>Verified Profiles</h3>
              <p style={styles.cardText}>We verify hosts and guests to build a trusted community and ensure a secure experience for everyone.</p>
            </div>
            <div style={styles.card}>
              <img src="/assets/secured-icon.png" alt="Secure" style={styles.icon} />
              <h3 style={styles.cardTitle}>Secure Payments</h3>
              <p style={styles.cardText}>Our platform uses end-to-end encryption to protect your financial data during every transaction.</p>
            </div>
            <div style={styles.card}>
              <img src="/assets/support-icon.png" alt="Support" style={styles.icon} />
              <h3 style={styles.cardTitle}>24/7 Support</h3>
              <p style={styles.cardText}>Our global support team is available around the clock to assist you with any questions or concerns.</p>
            </div>
          </div>
        </div>

        {/* Safety for Guests */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Safety Tips for Guests</h2>
          <div style={styles.tipContainer}>
            {guestTips.map((tip, index) => (
              <div key={index} style={styles.tipItem}>
                <img src="/assets/rightarrow-icon.png" alt="Safety check" style={styles.tipIcon} />
                <p style={styles.tipText}>{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety for Hosts */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Guidelines for Hosts</h2>
          <div style={styles.tipContainer}>
            {hostTips.map((tip, index) => (
              <div key={index} style={styles.tipItem}>
                <img src="/assets/rightarrow-icon.png" alt="Safety check" style={styles.tipIcon} />
                <p style={styles.tipText}>{tip}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Emergency Contact */}
        <div style={styles.emergencySection}>
            <h2 style={styles.sectionTitle}>In Case of Emergency</h2>
            <p style={styles.emergencyText}>If you are in an emergency situation, please contact local police or emergency services immediately.</p>
        </div>
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
    backgroundImage: "url('/historic-stone-cottage/historic.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
    marginBottom: '40px',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  card: {
    backgroundColor: '#282828',
    borderRadius: '12px',
    padding: '30px',
    textAlign: 'center',
    border: '1px solid #333',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  icon: {
    width: '60px',
    height: '60px',
    marginBottom: '20px',
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
  tipContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  tipItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#282828',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid #383838',
  },
  tipIcon: {
    width: '24px',
    height: '24px',
    marginRight: '20px',
    flexShrink: 0,
  },
  tipText: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#D0D0D0',
    margin: 0,
  },
  emergencySection: {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: 'rgba(255, 100, 100, 0.1)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 100, 100, 0.3)',
  },
  emergencyText: {
    fontSize: '1.2rem',
    maxWidth: '700px',
    margin: '0 auto',
    color: '#FFC0C0',
  }
};

export default SafetyInfo; 