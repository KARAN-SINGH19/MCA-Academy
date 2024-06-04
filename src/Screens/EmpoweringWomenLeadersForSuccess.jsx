import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import reveal from '../Animations/Variants';
import { InView } from 'react-intersection-observer';
import { useInView } from 'react-intersection-observer';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const EmpoweringWomenLeadersForSuccess = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    function FooterSection({ children }) {
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
    }
    const slideInFromLeft = {
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const slideInFromRight = {
        hidden: { opacity: 0, x: 100 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };
    return (
        <>
            <Navbar />

            <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Row>
                    <Col>
                        <div className="image-container">
                            <motion.img
                                src="/images/3.jpg"
                                alt="Leadership Banner"
                                className="banner-image"
                                style={{ width: "100%", height: "40vh", objectFit: "cover" }}
                                initial={{ x: -1000 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 1 }}
                            />
                            <div className="overlay"><h1 style={{
                                color: "white", display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>Empowering Women Leaders for Success</h1></div>
                        </div>
                    </Col>
                </Row>
                <Row className="team-row mt-4 mission-section py-5 text-center bg-light">
                    <Col md={5} className="banner-col d-flex align-items-center justify-content-center">
                        <InView triggerOnce>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "show" : "hidden"}
                                    variants={reveal("up", 0.3)}
                                >
                                    <Card className='pillarCard' style={{ width: '18rem', borderRadius: '15px', overflow: 'hidden', height: "70vh" }}>
                                        <Card.Img
                                            variant="top"
                                            style={{ width: "30%", height: "25%", margin: "auto", padding: "20px 0" }}
                                            src="/images/icon3.png"
                                            className="custom-card-img"
                                        />
                                        <Card.Body>
                                            <Card.Title style={{ textAlign: "center", marginTop: "10px" }}>Empowering Women Leaders For Success</Card.Title>
                                            <Card.Text>
                                                <ul className='card-list'>
                                                    <li style={{ cursor: "pointer", marginLeft: "15px", padding: "10px", marginTop: "30px", textIndent: '-25px' }} onClick={() => { scrollToSection("UnlockingMyProfessionalPresence") }}>Unloacking 'My' Professional Presence</li>
                                                    <li style={{ cursor: "pointer", marginLeft: "15px", padding: "10px", marginTop: "10px", textIndent: '-25px' }} onClick={() => { scrollToSection("HarmonyEmpoweringforbalance") }}>Harmony-Empowering for balance</li>
                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer style={{ backgroundColor: '#74b72e', color: '#fff', textAlign: 'center', height: '10vh' }}>
                                        </Card.Footer>
                                    </Card>
                                </motion.div>
                            )}
                        </InView>
                    </Col>
                    <Col md={5} className="mission-col  d-flex align-items-center justify-content-center">
                        <InView triggerOnce>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "show" : "hidden"}
                                    variants={reveal("up", 0)}
                                >
                                    <div>
                                        <h2 className="mission-heading">Empowering Women Leaders for Success</h2>
                                        <p className='mt-4' style={{ textAlign: "left" }}>
                                            This pillar focuses on building 'bilingual' leadership and empowering women to thrive professionally and personally in leadership positions.
                                        </p>
                                        <p className='mt-4' style={{ textAlign: "left" }}>
                                            Our unique programs equip both men and women with the skills, confidence, and resilience needed to navigate diverse leadership challenges successfully, fostering a workplace culture where embracing gender diversity cultivates bilingual leadership.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </Col>

                    <Row id='UnlockingMyProfessionalPresence'>
                        <div className="mission-section py-5 text-center mt-3">
                            <h1 className='mission-heading'>Unlocking My Professional Presence</h1>
                        </div>

                        <InView threshold={0.2} triggerOnce>
                            {({ inView, ref }) => (
                                <>
                                    <Col xs={12} md={6} className='mt-3'>
                                        <motion.div
                                            ref={ref}
                                            initial="hidden"
                                            animate={inView ? "show" : "hidden"}
                                            variants={slideInFromLeft}
                                            style={{ height: 'auto', marginBottom: '10px', backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px' }}
                                        >
                                            <h4 className='mission-heading2'>Objectives</h4>
                                            <p style={{ textAlign: "justify", padding: "10px", color: "#666666", fontWeight: 600 }}>
                                                This program aims to empower women leaders by enhancing their professional presence, confidence, and influence in the workplace. Through a comprehensive curriculum, participants will develop the skills and strategies necessary to overcome barriers, amplify their voices, and unlock their full potential as successful leaders.
                                            </p>
                                        </motion.div>
                                    </Col>
                                    <Col>
                                        <motion.div
                                            ref={ref}
                                            initial="hidden"
                                            animate={inView ? "show" : "hidden"}
                                            variants={slideInFromLeft}
                                            className='mt-4'
                                            style={{ height: 'auto', backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px' }}
                                        >
                                            <ul className='card-list'>
                                                <h4 className='mission-heading2'>Who Should Attend?</h4> <br />
                                                <li>Women Leaders</li>
                                                <li>Emerging Leaders</li>
                                                <li>HR Professionals</li>
                                            </ul>
                                        </motion.div>
                                    </Col>
                                </>
                            )}
                        </InView>

                        <InView threshold={0.2} triggerOnce>
                            {({ inView, ref }) => (
                                <>
                                    <Col xs={12} md={6} className='mt-3'>
                                        <motion.div
                                            ref={ref}
                                            initial="hidden"
                                            animate={inView ? "show" : "hidden"}
                                            variants={slideInFromRight}
                                            style={{ height: 'auto', backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', width: '100%' }}
                                        >
                                            <h4 className='mission-heading2'>Learning Outcome</h4>
                                            <ul className='card-list'>
                                                <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Cultivate a strong and authentic professional presence
                                                </li>
                                                <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Develop effective communication skills to advocate for themselves and their ideas
                                                </li>
                                                <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Enhance self-awareness and emotional intelligence
                                                </li>
                                                <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Build strategic networks and alliances for career advancement
                                                </li>
                                                <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Implement tools to overcome gender biases and systemic barriers
                                                </li>
                                            </ul>
                                        </motion.div>
                                    </Col>

                                    <Col>
                                        <motion.div
                                            ref={ref}
                                            initial="hidden"
                                            animate={inView ? "show" : "hidden"}
                                            variants={slideInFromLeft}
                                            className='mt-4'
                                            style={{ height: 'auto', backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px' }}
                                        >
                                            <h4 className='mission-heading2'>Duration</h4>
                                            <ul className='card-list'>
                                                <p style={{ textAlign: "justify", padding: "10px", color: "#666666", fontWeight: 600 }}>
                                                    2-day program
                                                </p>
                                            </ul>
                                        </motion.div>
                                    </Col>
                                </>

                            )}
                        </InView>
                    </Row>


                    <Row id='HarmonyEmpoweringforbalance'>
                        <div className="mission-section py-5 text-center mt-3">
                            <h1 className='mission-heading'>Harmony - Empowering for balance</h1>
                        </div>

                        <InView threshold={0.2} triggerOnce>
                            {({ inView, ref }) => (
                                <>
                                    <Col xs={12} md={6} className='mt-3'>
                                        <motion.div
                                            ref={ref}
                                            initial="hidden"
                                            animate={inView ? "show" : "hidden"}
                                            variants={slideInFromLeft}
                                            style={{ height: 'auto', marginBottom: '10px', backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px' }}
                                        >
                                            <h4 className='mission-heading2'>Objectives</h4>
                                            <p style={{ textAlign: "justify", padding: "10px", color: "#666666", fontWeight: 600 }}>
                                                This program aims to empower women leaders to achieve balance and fulfillment across personal and professional domains. Through a holistic approach, participants will explore strategies for managing priorities, nurturing well-being, and fostering harmony in their lives, enabling them to thrive both personally and professionally.
                                            </p>
                                        </motion.div>
                                    </Col>
                                    <Col>
                                        <motion.div
                                            ref={ref}
                                            initial="hidden"
                                            animate={inView ? "show" : "hidden"}
                                            variants={slideInFromLeft}
                                            className='mt-4'
                                            style={{ height: 'auto', backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px' }}
                                        >
                                            <ul className='card-list'>
                                                <h4 className='mission-heading2'>Who Should Attend?</h4> <br />
                                                <li>Women Leaders</li>
                                                <li>Working Mothers</li>
                                                <li>Professionals seeking well-being strategies</li>
                                            </ul>
                                        </motion.div>
                                    </Col>
                                </>
                            )}
                        </InView>

                        <InView threshold={0.2} triggerOnce>
                            {({ inView, ref }) => (
                                <>
                                    <Col xs={12} md={6} className='mt-3'>
                                        <motion.div
                                            ref={ref}
                                            initial="hidden"
                                            animate={inView ? "show" : "hidden"}
                                            variants={slideInFromRight}
                                            style={{ height: 'auto', backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', width: '100%' }}
                                        >
                                            <h4 className='mission-heading2'>Learning Outcome</h4>
                                            <ul className='card-list'>
                                                <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Develop strategies for work-life balance and integrating priorities</li>
                                                <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Cultivate practices for enhancing well-being</li>
                                                <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Gain insights into time management techniques for productivity and stress reduction</li>
                                                <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Foster resilience to navigate challenges with grace</li>
                                                <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Establish boundaries and assertive communication for advocating needs.</li>
                                            </ul>
                                        </motion.div>
                                    </Col>
                                    <Col>
                                        <motion.div
                                            ref={ref}
                                            initial="hidden"
                                            animate={inView ? "show" : "hidden"}
                                            variants={slideInFromLeft}
                                            className='mt-4'
                                            style={{ height: 'auto', backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px' }}
                                        >
                                            <h4 className='mission-heading2'>Duration</h4>
                                            <ul className='card-list'>
                                                <p style={{ textAlign: "justify", padding: "10px", color: "#666666", fontWeight: 600 }}>
                                                    2-day program
                                                </p>
                                            </ul>
                                        </motion.div>
                                    </Col>
                                </>
                            )}
                        </InView>
                    </Row>


                </Row>
            </Container>

            <FooterSection />
        </>
    );
};

export default EmpoweringWomenLeadersForSuccess;
