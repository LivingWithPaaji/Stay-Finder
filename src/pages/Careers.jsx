import React, { useState } from 'react';

const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'Remote / India',
      type: 'Full Time',
      details: `
        <h3>About the Role</h3>
        <p>As a Frontend Developer, you'll build beautiful, scalable interfaces for thousands of travelers and hosts. You'll work closely with designers and backend engineers to deliver a seamless user experience.</p>
        <h4>Responsibilities</h4>
        <ul>
          <li>Build and maintain user interfaces using React.js</li>
          <li>Collaborate with designers and backend developers</li>
          <li>Write clean, maintainable, and testable code</li>
        </ul>
        <h4>Requirements</h4>
        <ul>
          <li>2+ years experience with React</li>
          <li>Strong CSS/JS skills</li>
          <li>Familiarity with REST APIs</li>
        </ul>
      `
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      location: 'Remote / USA',
      type: 'Full Time',
      details: `
        <h3>About the Role</h3>
        <p>As a UI/UX Designer, you'll shape the look and feel of Stay Finder. You'll turn ideas into delightful, intuitive experiences for users worldwide.</p>
        <h4>Responsibilities</h4>
        <ul>
          <li>Design user flows, wireframes, and prototypes</li>
          <li>Create high-fidelity mockups and design systems</li>
          <li>Conduct user research and usability testing</li>
        </ul>
        <h4>Requirements</h4>
        <ul>
          <li>2+ years experience in UI/UX design</li>
          <li>Proficiency in Figma/Adobe XD</li>
          <li>Strong portfolio</li>
        </ul>
      `
    },
    {
        id: 3,
        title: 'Backend Engineer',
        location: 'Remote / India, Europe',
        type: 'Full Time',
        details: `
          <h3>About the Role</h3>
          <p>As a Backend Engineer, you'll design and build scalable APIs and services that power Stay Finder. You'll work with a modern stack and help shape our technical direction.</p>
          <h4>Responsibilities</h4>
          <ul>
            <li>Design, build, and maintain RESTful APIs</li>
            <li>Optimize database queries and data models</li>
            <li>Collaborate with frontend and product teams</li>
          </ul>
          <h4>Requirements</h4>
          <ul>
            <li>2+ years experience with Node.js or Python</li>
            <li>Experience with SQL/NoSQL databases</li>
            <li>Understanding of cloud platforms (AWS, GCP, Azure)</li>
          </ul>
        `
    },
    {
        id: 4,
        title: 'Data Scientist',
        location: 'Remote / Global',
        type: 'Full Time',
        details: `
          <h3>About the Role</h3>
          <p>As a Data Scientist, you will leverage data to build machine learning models that personalize the user experience and drive business decisions.</p>
          <h4>Responsibilities</h4>
          <ul>
            <li>Develop and deploy machine learning models for pricing and recommendations.</li>
            <li>Analyze large datasets to uncover trends and insights.</li>
            <li>Collaborate with engineering and product teams to integrate models.</li>
          </ul>
          <h4>Requirements</h4>
          <ul>
            <li>3+ years of experience in data science or a related field.</li>
            <li>Proficiency in Python, SQL, and machine learning libraries (e.g., TensorFlow, PyTorch).</li>
            <li>Strong statistical knowledge and problem-solving skills.</li>
          </ul>
        `
    },
    {
        id: 5,
        title: 'SEO Specialist',
        location: 'Remote / USA',
        type: 'Part Time',
        details: `
          <h3>About the Role</h3>
          <p>As an SEO Specialist, you will be responsible for developing and implementing our SEO strategy to increase organic search traffic and improve rankings.</p>
          <h4>Responsibilities</h4>
          <ul>
            <li>Conduct keyword research and competitive analysis.</li>
            <li>Optimize website content, landing pages, and technical SEO elements.</li>
            <li>Track and report on SEO performance and metrics.</li>
          </ul>
          <h4>Requirements</h4>
          <ul>
            <li>2+ years of experience in an SEO-focused role.</li>
            <li>Deep understanding of search engine algorithms and ranking factors.</li>
            <li>Experience with SEO tools (e.g., Ahrefs, SEMrush, Google Analytics).</li>
          </ul>
        `
    },
    {
        id: 6,
        title: 'Community Manager',
        location: 'Remote / Europe',
        type: 'Full Time',
        details: `
          <h3>About the Role</h3>
          <p>As a Community Manager, you will be the voice of Stay Finder, responsible for engaging with our community of hosts and guests across various platforms.</p>
          <h4>Responsibilities</h4>
          <ul>
            <li>Manage and grow our social media presence.</li>
            <li>Foster a positive and supportive community environment.</li>
            <li>Organize online events and gather user feedback.</li>
          </ul>
          <h4>Requirements</h4>
          <ul>
            <li>2+ years of experience in community management or social media marketing.</li>
            <li>Excellent communication and interpersonal skills.</li>
            <li>A passion for building and nurturing online communities.</li>
          </ul>
        `
    },
    {
        id: 7,
        title: 'Legal Counsel',
        location: 'New York, NY',
        type: 'Full Time',
        details: `
          <h3>About the Role</h3>
          <p>As Legal Counsel, you will provide legal guidance on a wide range of matters, including regulatory compliance, commercial contracts, and privacy.</p>
          <h4>Responsibilities</h4>
          <ul>
            <li>Advise on legal risks and opportunities for our global platform.</li>
            <li>Draft and negotiate commercial agreements.</li>
            <li>Ensure compliance with international laws and regulations.</li>
          </ul>
          <h4>Requirements</h4>
          <ul>
            <li>Juris Doctor (JD) degree and licensed to practice law in New York.</li>
            <li>3+ years of relevant legal experience, preferably in tech or hospitality.</li>
            <li>Strong analytical and communication skills.</li>
          </ul>
        `
    },
    {
        id: 8,
        title: 'IT Support Engineer',
        location: 'Remote / India',
        type: 'Full Time',
        details: `
          <h3>About the Role</h3>
          <p>As an IT Support Engineer, you will provide technical assistance to our global team, ensuring our internal systems run smoothly and efficiently.</p>
          <h4>Responsibilities</h4>
          <ul>
            <li>Provide helpdesk support for hardware, software, and network issues.</li>
            <li>Manage employee onboarding and offboarding IT processes.</li>
            <li>Maintain IT inventory and documentation.</li>
          </ul>
          <h4>Requirements</h4>
          <ul>
            <li>2+ years of experience in an IT support role.</li>
            <li>Strong knowledge of operating systems (macOS, Windows) and networking.</li>
            <li>Excellent problem-solving and customer service skills.</li>
          </ul>
        `
    }
];

const cultureCards = [
    {
        icon: '/assets/ai-chat.png',
        title: 'Innovation',
        text: 'We encourage creative solutions and forward-thinking to redefine the future of travel.'
    },
    {
        icon: '/assets/stargazing-icon.png',
        title: 'Growth',
        text: 'We invest in our team\'s personal and professional development with continuous learning opportunities.'
    },
    {
        icon: '/assets/community-icon.png',
        title: 'Community',
        text: 'We foster a collaborative and inclusive environment where every voice is heard and valued.'
    }
]

const Careers = () => {
    const [selectedJob, setSelectedJob] = useState(null);

    const openModal = (job) => {
        setSelectedJob(job);
    };

    const closeModal = () => {
        setSelectedJob(null);
    };

    return (
        <div style={styles.pageContainer}>
            {/* Hero Section */}
            <div style={styles.heroSection}>
                <div style={styles.heroOverlay} />
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>Shape the Future of Travel</h1>
                    <p style={styles.heroSubtitle}>Join our passionate team and help us build the next generation of hospitality.</p>
                </div>
            </div>

            <div style={styles.mainContent}>
                {/* Why Join Us Section */}
                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>Why Join Us?</h2>
                    <div style={styles.cardGrid}>
                        {cultureCards.map((card, index) => (
                             <div key={index} style={styles.cultureCard}>
                                <img src={card.icon} alt={`${card.title} icon`} style={styles.icon} />
                                <h3 style={styles.cardTitle}>{card.title}</h3>
                                <p style={styles.cardText}>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Open Positions Section */}
                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>Open Positions</h2>
                    <div style={styles.jobList}>
                        {jobs.map(job => (
                            <div key={job.id} style={styles.jobCard} onClick={() => openModal(job)}>
                                <div>
                                    <h3 style={styles.jobTitle}>{job.title}</h3>
                                    <p style={styles.jobInfo}>{job.location} • {job.type}</p>
                                </div>
                                <span style={styles.arrow}>→</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Job Details Modal */}
            {selectedJob && (
                <div style={styles.modalOverlay} onClick={closeModal}>
                    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button style={styles.closeButton} onClick={closeModal}>×</button>
                        <h2>{selectedJob.title}</h2>
                        <p>{selectedJob.location} • {selectedJob.type}</p>
                        <div style={styles.divider}></div>
                        <div dangerouslySetInnerHTML={{ __html: selectedJob.details }} />
                        <button style={styles.applyButton} onClick={() => window.location.href = 'mailto:careers@stayfinder.com'}>Apply Now</button>
                    </div>
                </div>
            )}
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
        backgroundImage: "url('/modern-loft-with-city-view/Modern.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
        color: 'white',
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
    cultureCard: {
        backgroundColor: '#282828',
        borderRadius: '12px',
        padding: '30px',
        textAlign: 'center',
        border: '1px solid #333',
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
    jobList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    jobCard: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px',
        backgroundColor: '#282828',
        borderRadius: '10px',
        cursor: 'pointer',
        border: '1px solid #333',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
    jobTitle: {
        fontSize: '1.4rem',
        fontWeight: '600',
        margin: '0 0 5px 0',
    },
    jobInfo: {
        fontSize: '1rem',
        color: '#B0B0B0',
        margin: 0,
    },
    arrow: {
        fontSize: '1.8rem',
        color: '#007BFF',
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modalContent: {
        backgroundColor: '#282828',
        padding: '40px',
        borderRadius: '12px',
        width: '90%',
        maxWidth: '700px',
        maxHeight: '80vh',
        overflowY: 'auto',
        position: 'relative',
        color: '#F0F0F0',
    },
    closeButton: {
        position: 'absolute',
        top: '15px',
        right: '20px',
        background: 'none',
        border: 'none',
        color: '#FFF',
        fontSize: '2rem',
        cursor: 'pointer',
    },
    divider: {
        height: '1px',
        backgroundColor: '#444',
        margin: '20px 0',
    },
    applyButton: {
        display: 'inline-block',
        marginTop: '30px',
        padding: '15px 30px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        color: '#FFF',
        backgroundColor: '#007BFF',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
    }
};

export default Careers;
