import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const policyTiers = [
    {
        title: 'Flexible',
        icon: '/assets/privacy-icon.png',
        description: 'Full refund for cancellations made up to 24 hours before check-in.'
    },
    {
        title: 'Moderate',
        icon: '/assets/verified-icon.png',
        description: 'Full refund for cancellations made up to 5 days before check-in.'
    },
    {
        title: 'Strict',
        icon: '/assets/secured-icon.png',
        description: 'Receive a 50% refund for cancellations made up to 1 week before check-in.'
    }
];

const faqData = [
    {
        question: 'How do I cancel my booking?',
        answer: 'You can cancel a booking from your "My Stays" page. Select the reservation you wish to cancel and follow the on-screen instructions.'
    },
    {
        question: 'How long does it take to receive a refund?',
        answer: 'Refunds are typically processed within 5-7 business days, depending on your original payment method and bank.'
    },
    {
        question: 'Can I change my reservation dates instead of canceling?',
        answer: 'Yes, you can request a reservation change through your "My Stays" page. The host will need to approve the change.'
    }
];

const Cancellation = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const handleFaqToggle = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div style={styles.pageContainer}>
            {/* Hero Section */}
            <div style={styles.heroSection}>
                <div style={styles.heroOverlay} />
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>Cancellation Policies</h1>
                    <p style={styles.heroSubtitle}>Flexible options designed for your peace of mind.</p>
                </div>
            </div>

            {/* Main Content */}
            <div style={styles.mainContent}>
                {/* Policy Tiers Section */}
                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>Understand Your Options</h2>
                    <div style={styles.cardGrid}>
                        {policyTiers.map((tier, index) => (
                            <div key={index} style={styles.card}>
                                <img src={tier.icon} alt={`${tier.title} icon`} style={styles.icon} />
                                <h3 style={styles.cardTitle}>{tier.title}</h3>
                                <p style={styles.cardText}>{tier.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
                    <div style={styles.faqContainer}>
                        {faqData.map((faq, index) => (
                            <div key={index} style={styles.faqItem}>
                                <button onClick={() => handleFaqToggle(index)} style={styles.faqQuestion}>
                                    {faq.question}
                                    <span style={{...styles.faqIcon, transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)'}}>▼</span>
                                </button>
                                {openFaq === index && (
                                    <div style={styles.faqAnswer}>
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Support Section */}
                <div style={styles.supportSection}>
                    <h2 style={styles.sectionTitle}>Need More Help?</h2>
                    <p style={styles.supportText}>If you have questions about a specific reservation, please contact our support team.</p>
                    <Link to="/report-concern" style={styles.supportButton}>
                        Contact Support
                    </Link>
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
        backgroundImage: "url('/cliffside-ocean-bungalow/cliffside.avif')",
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
    },
    icon: {
        width: '50px',
        height: '50px',
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
    faqContainer: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    faqItem: {
        backgroundColor: '#282828',
        borderRadius: '10px',
        marginBottom: '15px',
        border: '1px solid #333',
    },
    faqQuestion: {
        width: '100%',
        textAlign: 'left',
        padding: '20px',
        fontSize: '1.3rem',
        fontWeight: '600',
        color: '#F0F0F0',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    faqIcon: {
        fontSize: '1.2rem',
        transition: 'transform 0.3s ease',
    },
    faqAnswer: {
        padding: '0 20px 20px',
        fontSize: '1.1rem',
        color: '#B0B0B0',
        lineHeight: '1.6',
        borderTop: '1px solid #333',
        marginTop: '10px',
        paddingTop: '20px',
    },
    supportSection: {
        textAlign: 'center',
        padding: '40px 20px',
        backgroundColor: '#282828',
        borderRadius: '12px',
        border: '1px solid #333',
    },
    supportText: {
        fontSize: '1.2rem',
        marginBottom: '25px',
        color: '#B0B0B0',
    },
    supportButton: {
        display: 'inline-block',
        padding: '15px 30px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#FFF',
        backgroundColor: '#007BFF',
        borderRadius: '10px',
        textDecoration: 'none',
    },
};

export default Cancellation; 