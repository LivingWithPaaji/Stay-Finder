import React from 'react';

const TermsPage = () => {
    return (
        <div style={styles.pageContainer}>
            {/* Hero Section */}
            <div style={styles.heroSection}>
                <div style={styles.heroOverlay} />
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>Terms & Policies</h1>
                    <p style={styles.heroSubtitle}>Your rights and responsibilities when using our services.</p>
                </div>
            </div>

            {/* Main Content */}
            <div style={styles.mainContent}>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>1. Terms of Service</h2>
                    <p style={styles.paragraph}>
                        Welcome to Stay Finder! These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Stay Finder if you do not agree to all of the terms and conditions stated on this page.
                    </p>
                    <h3 style={styles.subheading}>1.1. User Accounts</h3>
                    <p style={styles.paragraph}>
                        When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                    </p>
                     <h3 style={styles.subheading}>1.2. Prohibited Activities</h3>
                    <p style={styles.paragraph}>
                        You are expressly prohibited from using the site for any of the following purposes: taking any action that imposes an unreasonable or disproportionately large load on the site's infrastructure; using the site for any unlawful purpose; or engaging in any other conduct that restricts or inhibits any other person from using or enjoying the site.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>2. Privacy Policy</h2>
                    <p style={styles.paragraph}>
                        Your privacy is important to us. It is Stay Finder's policy to respect your privacy regarding any information we may collect from you across our website. We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.
                    </p>
                     <h3 style={styles.subheading}>2.1. Data Collection</h3>
                    <p style={styles.paragraph}>
                        We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, and in connection with other activities, services, features or resources we make available on our Site.
                    </p>
                </section>

                 <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>3. Cookie Policy</h2>
                    <p style={styles.paragraph}>
                       Our website uses cookies to enhance user experience. By using our website, you consent to our use of cookies in accordance with our Cookie Policy. Cookies are small files stored on your computer that hold a modest amount of data specific to a particular client and website.
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
        backgroundImage: "url('/public/historic-stone-cottage/historic.jpg')",
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
        marginBottom: '25px',
        borderBottom: '2px solid #007BFF',
        paddingBottom: '10px',
    },
    subheading: {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#E0E0E0',
        marginBottom: '15px',
    },
    paragraph: {
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: '#D0D0D0',
        marginBottom: '20px',
    }
};

export default TermsPage; 