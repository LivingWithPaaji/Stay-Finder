import React from 'react';

const CommunityProgramPage = () => {
    const galleryImages = [
        { src: '/image-assets/teamwork.png', caption: 'Community Cleanup Drive' },
        { src: '/image-assets/localworkshop.jpg', caption: 'Local Workshop for Hosts' },
        { src: '/image-assets/charitymeetup.png', caption: 'Charity Partner Meetup' },
    ];

    return (
        <div style={styles.pageContainer}>
            {/* Hero Section */}
            <div style={styles.heroSection}>
                <div style={styles.heroOverlay} />
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>Our Community Program</h1>
                    <p style={styles.heroSubtitle}>Building strong, sustainable, and connected neighborhoods together.</p>
                </div>
            </div>

            {/* Main Content */}
            <div style={styles.mainContent}>
                {/* About the Program Section */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>About the Program</h2>
                    <p style={styles.paragraph}>
                        The Stay Finder Community Program is our commitment to making a positive impact in the communities where we operate. We believe in the power of travel to foster connection and understanding, and we are dedicated to supporting local initiatives that create a better world for everyone. Through this program, we partner with local non-profits, support sustainable tourism, and empower our hosts and guests to give back.
                    </p>
                </section>

                {/* How to Participate Section */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>How to Get Involved</h2>
                    <div style={styles.stepsGrid}>
                        <div style={styles.stepCard}>
                            <h3 style={styles.stepNumber}>01</h3>
                            <h4 style={styles.stepTitle}>Nominate a Cause</h4>
                            <p style={styles.stepDescription}>Know a local non-profit or community project that could use our help? Nominate them for a grant or partnership.</p>
                        </div>
                        <div style={styles.stepCard}>
                            <h3 style={styles.stepNumber}>02</h3>
                            <h4 style={styles.stepTitle}>Volunteer</h4>
                            <p style={styles.stepDescription}>Join our organized volunteer events, from environmental cleanups to local workshops, and make a hands-on difference.</p>
                        </div>
                        <div style={styles.stepCard}>
                            <h3 style={styles.stepNumber}>03</h3>
                            <h4 style={styles.stepTitle}>Donate at Checkout</h4>
                            <p style={styles.stepDescription}>Opt-in to round up your booking total or add a small donation to support our featured community partners.</p>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Program Highlights</h2>
                    <div style={styles.galleryGrid}>
                        {galleryImages.map((image, index) => (
                            <div key={index} style={styles.galleryItem}>
                                <img src={image.src} alt={image.caption} style={styles.galleryImage} />
                                <p style={styles.galleryCaption}>{image.caption}</p>
                            </div>
                        ))}
                    </div>
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
        backgroundImage: "url('/image-assets/teamwork.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
    },
    heroOverlay: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px',
    },
    section: {
        marginBottom: '60px',
    },
    sectionTitle: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF',
        marginBottom: '40px',
    },
    paragraph: {
        fontSize: '1.2rem',
        lineHeight: '1.8',
        color: '#D0D0D0',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
    },
    stepsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
        marginTop: '30px',
    },
    stepCard: {
        backgroundColor: '#282828',
        padding: '30px',
        borderRadius: '12px',
        textAlign: 'center',
        border: '1px solid #333',
    },
    stepNumber: {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#007BFF',
        marginBottom: '10px',
    },
    stepTitle: {
        fontSize: '1.5rem',
        fontWeight: '600',
        marginBottom: '15px',
    },
    stepDescription: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#B0B0B0',
    },
    galleryGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
    },
    galleryItem: {
        backgroundColor: '#282828',
        borderRadius: '12px',
        overflow: 'hidden',
        textAlign: 'center',
    },
    galleryImage: {
        width: '100%',
        height: '220px',
        objectFit: 'cover',
    },
    galleryCaption: {
        padding: '15px',
        fontSize: '1rem',
        fontWeight: '500',
    }
};

export default CommunityProgramPage; 