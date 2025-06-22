import React from 'react';
import { Link } from 'react-router-dom';

const HostingResponsiblyPage = () => {
    return (
        <div style={styles.pageContainer}>
            {/* Hero Section */}
            <div style={styles.heroSection}>
                <div style={styles.heroOverlay} />
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>Hosting Responsibly</h1>
                    <p style={styles.heroSubtitle}>Building a foundation of trust in our community.</p>
                </div>
            </div>

            {/* Main Content */}
            <div style={styles.mainContent}>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Your Commitment to Safety</h2>
                    <p style={styles.paragraph}>
                        As a host, the safety of your guests is a top priority. This includes providing essential safety amenities like smoke detectors, carbon monoxide alarms, and a fire extinguisher. Ensure your property meets all local safety codes and clearly mark all emergency exits.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Being a Good Neighbor</h2>
                    <p style={styles.paragraph}>
                        Great hosts are also great neighbors. Communicate your house rules regarding noise, parties, and common areas to your guests. Being mindful of your neighbors helps ensure a positive experience for everyone and maintains a good standing for the hosting community in your area.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Understanding Local Laws and Taxes</h2>
                    <p style={styles.paragraph}>
                        It is your responsibility to understand and comply with all local laws, regulations, and tax obligations that apply to your hosting activities. This may include obtaining permits or licenses, and collecting and remitting occupancy taxes. We encourage you to visit our <Link to="/host-resources" style={styles.link}>Host Resources</Link> page for more localized information.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Insurance and Protection</h2>
                    <p style={styles.paragraph}>
                        We provide Host Damage Protection and Host Liability Insurance to help protect you in case of accidents, but we recommend you also secure your own homeowner's or renter's insurance. Review your policy to ensure you have adequate coverage for short-term rental activities.
                    </p>
                </section>
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
        padding: '100px 20px',
        backgroundImage: "url('/public/historic-stone-cottage/historic2.jpg')",
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
    },
    heroSubtitle: {
        fontSize: '1.5rem',
    },
    mainContent: {
        maxWidth: '900px',
        margin: '0 auto',
        padding: '60px 20px',
    },
    section: {
        marginBottom: '50px',
    },
    sectionTitle: {
        fontSize: '2.2rem',
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: '20px',
        borderBottom: '2px solid #007BFF',
        paddingBottom: '10px',
    },
    paragraph: {
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: '#D0D0D0',
    },
    link: {
        color: '#007BFF',
        textDecoration: 'underline',
    }
};

export default HostingResponsiblyPage; 