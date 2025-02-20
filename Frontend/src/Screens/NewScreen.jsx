import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import finance from '../Api/Finance';
import { motion } from 'framer-motion';
import reveal from '../Animations/Variants';
import { InView } from 'react-intersection-observer';
import { useInView } from 'react-intersection-observer';

const NewScreen = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const generateURL = (text) => {
        return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    };


    const boxStyle = {
        flex: 1,
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        padding: "20px",
        margin: "10px",
    };


    const scrollToSection = (sectionId) => {
        console.log("Scrolling to section:", sectionId);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleLinkClick = (event) => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        window.location.href = href;
        window.scrollTo(0, 0);
    };

    const AnimatedColumn = ({ children, delay, direction }) => {
        const [ref, inView] = useInView({
            triggerOnce: true,
            rootMargin: '-100px 0px',
        });

        return (
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                variants={reveal(direction, delay)}
                transition={{ delay }}
            >
                {children}
            </motion.div>
        );
    };

    const slideInFromLeft = {
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const slideInFromRight = {
        hidden: { opacity: 0, x: 100 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const FooterSection = () => {
        const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0,
        });

        return (
            <motion.div
                ref={ref}
                variants={reveal("left", 0.2)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
            >
                <Footer />
            </motion.div>
        );
    };


    return (
        <div>
            <Navbar />
            <Container>
                <Row className="mt-5 bg-light py-4 rounded">
                    <Col xs={12} md={8} lg={8} xl={8}>
                        <motion.div initial="hidden" animate="show" variants={reveal("right", 0.3)}>
                            <div className="py-5">
                                <h2 className="text-left mb-4 mission-heading" style={{ color: "#CE0932", fontWeight: 700 }}>
                                    ISB Executive Education
                                </h2>
                                <p style={{ color: "#212529", fontWeight: 600, textAlign: "justify" }} className="text-justify">
                                    MCA Academy partners with ISB Executive Education, marking a new chapter in delivering transformational learning designed to prepare future leaders. ISB empowers working professionals with cutting-edge management strategies, renowned faculty from the world’s top business schools, and an engaging exchange between academia and industry. This partnership aligns MCA Academy’s mission to drive regional growth with ISB’s legacy of empowering leaders. Together, we will deliver high-impact training programs to equip professionals with the skills and knowledge needed to thrive in today’s dynamic business landscape.
                                </p>
                            </div>
                        </motion.div>
                    </Col>
                    <Col xs={12} md={4} lg={4} xl={4} className="d-flex justify-content-end align-items-center">
                        <img
                            src="/images/isblogo.jpg" // Replace with your image URL
                            alt="ISB Executive Education"
                            className="img-fluid"
                            style={{
                                maxWidth: "400px", // Adjust width as needed
                                height: "auto",
                                objectFit: "cover", // Ensure image fits properly within the container
                            }}
                        />
                    </Col>
                </Row>
            </Container>


            <Container>

                <Row id='international-financial-reporting-standards'>

                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Col xs={12} md={6} className='mt-3' style={{ display: 'flex' }}>
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={slideInFromRight}
                                        style={{ flex: 1, backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', margin: '10px' }}
                                    >
                                        <h4 className='mission-heading2'>Learning Outcome</h4>
                                        <ul className='card-list'>
                                            <li>60,000 Executives groomed for leadership</li>
                                            <li>250+ Programs delivered every year</li>
                                            <li>250 + Client across Corporate Govt. & PSUs</li>
                                        </ul>
                                    </motion.div>
                                </Col>
                                <Col xs={12} md={6} className='mt-3' style={{ display: 'flex' }}>
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={slideInFromLeft}
                                        style={{ flex: 1, backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', margin: '10px' }}
                                    >
                                        <ul className='card-list'>
                                            <h4 className='mission-heading2'>FT Executive Education Custom 2024 Rankings</h4> <br />
                                            <li>#1 in India</li>
                                            <li>#2 in Asia</li>
                                            <li>#26 Globally</li>
                                        </ul>
                                    </motion.div>
                                </Col>
                            </div>
                        )}
                    </InView>
                </Row>


                <Row id='growth-program-for-accountants'>
                    <div className="mission-section py-5 text-center mt-3">
                        <h1 className='mission-heading'>Full Stack Learning Solutions for Enterprises</h1>
                    </div>

                    {/* Business Owners/ CXOs/ Board Members Exp: 25+ years */}
                    <h2 className="text-center mt-4">Business Owners/ CXOs/ Board Members (Exp: 25+ years)</h2>
                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Col xs={12} md={6} className='mt-3' style={{ display: 'flex' }}>
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={slideInFromLeft}
                                        style={boxStyle}
                                    >
                                        <h4 className='mission-heading2'>Objectives</h4>
                                        <p className="text-justify">Enabling leaders to lead with mindfulness, manage crises effortlessly, master boardroom dynamics, and be a changemaker with global impact.</p>
                                    </motion.div>
                                </Col>
                                <Col xs={12} md={6} className='mt-3' style={{ display: 'flex' }}>
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={slideInFromLeft}
                                        style={boxStyle}
                                    >
                                        <h4 className='mission-heading2'>Objectives</h4>
                                        <p className="text-justify">Mentoring senior leaders of the business to nurture leadership with unique, actionable insights.</p>
                                    </motion.div>
                                </Col>
                            </div>
                        )}
                    </InView>

                    {/* Functional Heads & Heads of Business Exp: 10 - 25 years */}
                    <h2 className="text-center mt-4">Functional Heads & Heads of Business (Exp: 10 - 25 years)</h2>
                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Col xs={12} md={6} className='mt-3' style={{ display: 'flex' }}>
                                    <motion.div ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} variants={slideInFromLeft} style={boxStyle}>
                                        <h4 className='mission-heading2'>Objectives</h4>
                                        <p className="text-justify">Helping functional and division heads transition into senior leadership roles with an entrepreneurial mindset and global business outlook.</p>
                                    </motion.div>
                                </Col>
                                <Col xs={12} md={6} className='mt-3' style={{ display: 'flex' }}>
                                    <motion.div ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} variants={slideInFromLeft} style={boxStyle}>
                                        <h4 className='mission-heading2'>Objectives</h4>
                                        <p className="text-justify">Helping functional and divisional heads learn how to be a leader as a coach, master mindfulness, and be a changemaker who leads with an entrepreneurial mindset.</p>
                                    </motion.div>
                                </Col>
                            </div>
                        )}
                    </InView>

                    {/* Mid to Mid Senior Functional Managers Exp: 10 - 15 years */}
                    <h2 className="text-center mt-4">Mid to Mid Senior Functional Managers (Exp: 10 - 15 years)</h2>
                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Col xs={12} md={6} className='mt-3' style={{ display: 'flex' }}>
                                    <motion.div ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} variants={slideInFromLeft} style={boxStyle}>
                                        <h4 className='mission-heading2'>Objectives</h4>
                                        <p className="text-justify">Enabling managers to efficiently transition into functional leadership roles with a broader perspective on strategic business goals.</p>
                                    </motion.div>
                                </Col>
                                <Col xs={12} md={6} className='mt-3' style={{ display: 'flex' }}>
                                    <motion.div ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} variants={slideInFromLeft} style={boxStyle}>
                                        <h4 className='mission-heading2'>Objectives</h4>
                                        <p className="text-justify">Strengthening leadership practices to ensure agility and relevance with an eye on collaborative outcomes.</p>
                                    </motion.div>
                                </Col>
                            </div>
                        )}
                    </InView>

                    {/* First Time Managers & High Potential Individual Contributors Exp: 5 - 10 years */}
                    <h2 className="text-center mt-4">First Time Managers & High Potential Individual Contributors (Exp: 5 - 10 years)</h2>
                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Col xs={12} md={6} className='mt-3' style={{ display: 'flex' }}>
                                    <motion.div ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} variants={slideInFromLeft} style={boxStyle}>
                                        <h4 className='mission-heading2'>Objectives</h4>
                                        <p className="text-justify">Foundational learning for executives with leadership potential to grow from being individual contributors to managing teams.</p>
                                    </motion.div>
                                </Col>
                                <Col xs={12} md={6} className='mt-3' style={{ display: 'flex' }}>
                                    <motion.div ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} variants={slideInFromLeft} style={boxStyle}>
                                        <h4 className='mission-heading2'>Objectives</h4>
                                        <p className="text-justify">Fostering a forward-thinking approach by leveraging bold, multilateral solutions that shape team and individual outcomes.</p>
                                    </motion.div>
                                </Col>
                            </div>
                        )}
                    </InView>
                </Row>





            </Container>

            <br /> <br />
            <FooterSection />
        </div >
    );
};

export default NewScreen;
