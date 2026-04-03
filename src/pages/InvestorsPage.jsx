import React from 'react';

const InvestorsPage = () => {
    return (
        <div style={styles.pageContainer}>
            {/* Hero Section */}
            <div style={styles.heroSection}>
                <div style={styles.heroOverlay} />
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>Investor Relations</h1>
                    <p style={styles.heroSubtitle}>Committed to driving growth and delivering value.</p>
                </div>
            </div>

            {/* Main Content */}
            <div style={styles.mainContent}>
                {/* Financial Highlights Section */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Financial Highlights</h2>
                    <div style={styles.highlightsGrid}>
                        <div style={styles.highlightCard}>
                            <h3 style={styles.highlightValue}>$1.2B</h3>
                            <p style={styles.highlightLabel}>Annual Revenue (2024)</p>
                        </div>
                        <div style={styles.highlightCard}>
                            <h3 style={styles.highlightValue}>+15%</h3>
                            <p style={styles.highlightLabel}>YoY Growth</p>
                        </div>
                        <div style={styles.highlightCard}>
                            <h3 style={styles.highlightValue}>4.5M</h3>
                            <p style={styles.highlightLabel}>Active Listings</p>
                        </div>
                        <div style={styles.highlightCard}>
                            <h3 style={styles.highlightValue}>$500M</h3>
                            <p style={styles.highlightLabel}>Net Profit</p>
                        </div>
                    </div>
                </section>

                {/* Reports & Presentations Section */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Reports & Presentations</h2>
                    <div style={styles.reportList}>
                        <div style={styles.reportItem}>
                            <div>
                                <h4 style={styles.reportTitle}>Q3 2025 Earnings Report</h4>
                                <p style={styles.reportDate}>October 25, 2025</p>
                            </div>
                            <a href="#" style={styles.downloadButton}>Download PDF</a>
                        </div>
                        <div style={styles.reportItem}>
                            <div>
                                <h4 style={styles.reportTitle}>2024 Annual Shareholder Meeting Presentation</h4>
                                <p style={styles.reportDate}>September 15, 2025</p>
                            </div>
                            <a href="#" style={styles.downloadButton}>Download PDF</a>
                        </div>
                        <div style={styles.reportItem}>
                            <div>
                                <h4 style={styles.reportTitle}>Q2 2025 Earnings Report</h4>
                                <p style={styles.reportDate}>July 26, 2025</p>
                            </div>
                            <a href="#" style={styles.downloadButton}>Download PDF</a>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Investor Contact</h2>
                    <div style={styles.contactInfo}>
                        <p>For inquiries, please contact our Investor Relations team:</p>
                        <p><strong>Email:</strong> <a href="mailto:investors@stayfinder.com" style={styles.contactLink}>investors@stayfinder.com</a></p>
                        <p><strong>Phone:</strong> +1 (800) XXX-XXXX</p>
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
        backgroundImage: "url('/public/high-rise-city-penthouse/high.webp')",
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
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '60px 20px',
    },
    section: {
        marginBottom: '60px',
    },
    sectionTitle: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: '30px',
        borderBottom: '2px solid #007BFF',
        paddingBottom: '10px',
    },
    highlightsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '30px',
    },
    highlightCard: {
        backgroundColor: '#282828',
        padding: '30px',
        borderRadius: '12px',
        textAlign: 'center',
        border: '1px solid #333',
    },
    highlightValue: {
        fontSize: '2.8rem',
        fontWeight: 'bold',
        color: '#007BFF',
        margin: '0 0 10px 0',
    },
    highlightLabel: {
        fontSize: '1.1rem',
        color: '#B0B0B0',
    },
    reportList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    reportItem: {
        backgroundColor: '#282828',
        padding: '20px 25px',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #333',
    },
    reportTitle: {
        fontSize: '1.2rem',
        fontWeight: '600',
        margin: '0 0 5px 0',
    },
    reportDate: {
        fontSize: '0.9rem',
        color: '#B0B0B0',
    },
    downloadButton: {
        backgroundColor: '#007BFF',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    contactInfo: {
        backgroundColor: '#282828',
        padding: '30px',
        borderRadius: '12px',
        fontSize: '1.1rem',
        lineHeight: '1.8',
    },
    contactLink: {
        color: '#007BFF',
        textDecoration: 'none',
    }
};

export default InvestorsPage; 