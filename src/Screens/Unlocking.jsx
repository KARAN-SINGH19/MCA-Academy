import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { useInView } from 'react-intersection-observer';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import reveal from '../Animations/Variants';

const Unlocking = () => {
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
        <div>
            <Navbar />
            <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Row>
                    <Col style={{ position: "relative" }}>
                        <div className="image-container">
                            <motion.img
                                src="/images/w2.jpg"
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
                            }}>Unlocking My Professional Presence</h1></div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <div className="mission-section py-5 text-center">
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
                                <Col xs={12} md={6} className='mt-3'>
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={slideInFromRight}
                                        style={{ height: 'auto', backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', width: '100%' }}
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

            </Container>
            <FooterSection />
        </div >
    )
}

export default Unlocking;
