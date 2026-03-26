import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// -- FAQ DATA --
const faqData = [
    {
      question: 'How to book a stay?',
      answer: 'To book a stay, browse our listings, select your dates, and click "Book Now". You\'ll be guided through a secure checkout process.'
    },
    {
      question: 'How do I create an account?',
      answer: 'Click the "Sign Up" button in the top navigation. You will need to provide your email, create a password, and verify your account.'
    },
    {
      question: 'What are the safety measures for guests?',
      answer: 'We provide 24/7 support, secure messaging, verified reviews, and safety information for each property. Always read reviews before booking.'
    },
    {
      question: 'What are the cancellation policies?',
      answer: 'Cancellation policies vary by host and are clearly stated on each listing. Common policies include flexible, moderate, and strict options.'
    },
];

const HelpCenter = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const filteredFaqData = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Help Center</h1>
          <p style={styles.heroSubtitle}>Your questions, will always be answered.</p>
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search for help..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={styles.faqSection}>
        <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
        {filteredFaqData.length > 0 ? (
          filteredFaqData.map((faq, index) => (
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
          ))
        ) : (
          <p style={styles.noResultsText}>No results found. Please try another search term.</p>
        )}
      </div>

      {/* Contact Section */}
      <div style={styles.contactSection}>
        <h2 style={styles.sectionTitle}>Still Need Help?</h2>
        <p style={styles.contactText}>
          Our support team is here for you 24/7.
        </p>
        <Link to="/report-concern" style={styles.contactButton}>
          Contact Support
        </Link>
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
    backgroundImage: "url('/countryside-barn-loft/barn.jpg')",
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
    marginBottom: '30px',
    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
  },
  searchContainer: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  searchInput: {
    width: '100%',
    padding: '18px',
    fontSize: '1.1rem',
    borderRadius: '10px',
    border: '1px solid #444',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#333',
    outline: 'none',
  },
  faqSection: {
    maxWidth: '800px',
    margin: '60px auto',
    padding: '0 20px',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: '#FFF',
  },
  faqItem: {
    backgroundColor: '#282828',
    borderRadius: '10px',
    marginBottom: '15px',
    border: '1px solid #333',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
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
  noResultsText: {
    textAlign: 'center',
    fontSize: '1.1rem',
    color: '#B0B0B0',
  },
  contactSection: {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: '#282828',
    borderTop: '1px solid #333',
  },
  contactText: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#B0B0B0',
  },
  contactButton: {
    display: 'inline-block',
    padding: '15px 30px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#FFF',
    backgroundColor: '#007BFF',
    borderRadius: '10px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  },
};

export default HelpCenter;