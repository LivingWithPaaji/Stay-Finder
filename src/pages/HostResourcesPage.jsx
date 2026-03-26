import React from 'react';
import { Link } from 'react-router-dom';

const HostResourcesPage = () => {
    const resources = [
        {
            title: 'The Ultimate Guide to Getting Started',
            description: 'Everything you need to know to set up your listing for success, from taking photos to writing a compelling description.',
            icon: '/public/assets/play-icon.png',
            link: '#'
        },
        {
            title: 'Smart Pricing & Calendar Tools',
            description: 'Learn how to use our dynamic pricing tools and calendar features to maximize your occupancy and revenue.',
            icon: '/public/assets/calendar-icon.png',
            link: '#'
        },
        {
            title: 'Creating a 5-Star Guest Experience',
            description: 'Tips and best practices for communicating with guests, providing top-notch amenities, and earning rave reviews.',
            icon: '/public/assets/starrating-icon.png',
            link: '#'
        },
        {
            title: 'Cleaning and Safety Protocols',
            description: 'Access our comprehensive cleaning checklists and safety guidelines to ensure your space is safe and welcoming for every guest.',
            icon: '/public/assets/safetycheck-icon.png',
            link: '#'
        },
        {
            title: 'Understanding Local Regulations',
            description: 'Navigate local laws and regulations with our localized guides and resources to ensure you are hosting responsibly.',
            icon: '/public/assets/verified-icon.png',
            link: '#'
        },
        {
            title: 'Host Community Forum',
            description: 'Connect with other hosts in our community forum to ask questions, share advice, and learn from experienced peers.',
            icon: '/public/assets/support-icon.png',
            link: '#'
        },
    ];

    return (
        <div style={styles.pageContainer}>
            {/* Hero Section */}
            <div style={styles.heroSection}>
                <div style={styles.heroOverlay} />
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>Host Resources</h1>
                    <p style={styles.heroSubtitle}>Your success is our mission. Here are the tools and guides to help you thrive.</p>
                </div>
            </div>

            {/* Resources Grid */}
            <div style={styles.mainContent}>
                <div style={styles.resourcesGrid}>
                    {resources.map((resource, index) => (
                        <div key={index} style={styles.resourceCard}>
                            <img src={resource.icon} alt="" style={styles.resourceIcon} />
                            <h3 style={styles.resourceTitle}>{resource.title}</h3>
                            <p style={styles.resourceDescription}>{resource.description}</p>
                            <a href={resource.link} style={styles.learnMoreLink}>Learn More →</a>
                        </div>
                    ))}
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
        padding: '100px 20px',
        backgroundImage: "url('/public/countryside-barn-loft/barn.jpg')",
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
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px',
    },
    resourcesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
    },
    resourceCard: {
        backgroundColor: '#282828',
        padding: '35px',
        borderRadius: '12px',
        border: '1px solid #333',
        display: 'flex',
        flexDirection: 'column',
    },
    resourceIcon: {
        width: '50px',
        height: '50px',
        marginBottom: '20px',
    },
    resourceTitle: {
        fontSize: '1.4rem',
        fontWeight: '600',
        marginBottom: '15px',
    },
    resourceDescription: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#B0B0B0',
        flexGrow: 1,
        marginBottom: '20px',
    },
    learnMoreLink: {
        color: '#007BFF',
        textDecoration: 'none',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    }
};

export default HostResourcesPage; 