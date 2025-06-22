import React from 'react';
import { Link } from 'react-router-dom';

const newsArticles = [
    {
        id: 1,
        title: 'Stay Finder Launches New AI-Powered Travel Assistant',
        date: 'June 20, 2025',
        image: '/public/desert-home-retreat/desert2.webp',
        summary: 'We are thrilled to announce the launch of our new AI-powered travel assistant, designed to make planning your next trip easier than ever.'
    },
    {
        id: 2,
        title: 'The Top 5 Eco-Friendly Stays for a Sustainable Getaway',
        date: 'June 18, 2025',
        image: '/public/lakeview-glass-house/glass2.avif',
        summary: 'Discover our top picks for sustainable travel. These stunning, eco-friendly homes prove that luxury and sustainability can go hand-in-hand.'
    },
    {
        id: 3,
        title: 'A Look Inside Our Most Luxurious Cliffside Villas',
        date: 'June 16, 2025',
        image: '/public/cliffside-ocean-bungalow/cliffside2.avif',
        summary: 'From infinity pools to private chefs, take a tour of our most exclusive properties offering unparalleled luxury and breathtaking views.'
    },
    {
        id: 4,
        title: 'How to Be a 5-Star Host: Tips from Our Community',
        date: 'May 31, 2025',
        image: '/public/cozy-downtown-apartment/cozy.jpg',
        summary: 'Learn the secrets to becoming a top-rated host with advice from our most experienced and successful community members.'
    },
     {
        id: 5,
        title: 'New Partnership to Bring High-Speed Internet to Rural Stays',
        date: 'May 28, 2025',
        image: '/public/countryside-barn-loft/barn.jpg',
        summary: 'We\'re excited to partner with leading satellite internet providers to ensure all our properties have reliable, high-speed Wi-Fi.'
    },
    {
        id: 6,
        title: 'Stay Finder\'s Commitment to Community and Safety',
        date: 'May 21, 2025',
        image: '/public/historic-stone-cottage/historic2.jpg',
        summary: 'Read about our latest initiatives and features designed to protect our community and ensure a safe, secure experience for everyone.'
    }
];

const NewsPage = () => {
    return (
        <div style={styles.pageContainer}>
            {/* Hero Section */}
            <div style={styles.heroSection}>
                <div style={styles.heroOverlay} />
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>Stay Finder News</h1>
                    <p style={styles.heroSubtitle}>The latest stories and updates from our community.</p>
                </div>
            </div>

            {/* News Articles Section */}
            <div style={styles.mainContent}>
                <div style={styles.newsGrid}>
                    {newsArticles.map(article => (
                        <div key={article.id} style={styles.articleCard}>
                            <img src={article.image} alt={article.title} style={styles.articleImage} />
                            <div style={styles.articleContent}>
                                <p style={styles.articleDate}>{article.date}</p>
                                <h3 style={styles.articleTitle}>{article.title}</h3>
                                <p style={styles.articleSummary}>{article.summary}</p>
                                <a href="#" style={styles.readMoreLink}>Read More →</a>
                            </div>
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
        backgroundImage: "url('/mountain-cabin-retreat/aspen.jpg')",
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
    mainContent: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px',
    },
    newsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
    },
    articleCard: {
        backgroundColor: '#282828',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #333',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
    },
    articleImage: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    },
    articleContent: {
        padding: '25px',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    articleDate: {
        color: '#B0B0B0',
        fontSize: '0.9rem',
        marginBottom: '10px',
    },
    articleTitle: {
        fontSize: '1.4rem',
        fontWeight: '600',
        marginBottom: '15px',
        flexGrow: 1,
    },
    articleSummary: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#D0D0D0',
        marginBottom: '20px',
    },
    readMoreLink: {
        color: '#007BFF',
        textDecoration: 'none',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    }
};

export default NewsPage; 