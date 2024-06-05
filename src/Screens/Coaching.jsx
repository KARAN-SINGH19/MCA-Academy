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

const Coaching = () => {
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
    return (
        <>
            <Navbar />

            <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Row>
                    <Col>
                        <motion.img
                            src="/images/5.jpg"
                            alt="Leadership Banner"
                            className="banner-image"
                            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
                            initial={{ x: -1000 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}
                        />
                    </Col>
                </Row>
                <Row className="team-row mt-4 mission-section py-5 text-center bg-light">
                    <Col md={8} className="mission-col  d-flex align-items-center justify-content-center">
                        <InView triggerOnce>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "show" : "hidden"}
                                    variants={reveal("up", 0)}
                                >
                                    <div>
                                        <h2 className="mission-heading">Coaching for Professionals</h2>
                                        <p className='mt-4' style={{ textAlign: "left" }}>
                                            Empowers women leaders with skills, support, and strategies to overcome barriers, unlock their potential, and thrive in leadership roles.
                                        </p>
                                        <ul style={{ color: '#212529' }} className="card-list">
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}><strong>Unlocking My Professional Presence: </strong> Focuses on personal branding, self-awareness, and professional development to enhance one's presence and impact in the workplace.</li>
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Fortifying Corporate resilience for uncertain times</li>
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}><strong>Harmony</strong>- Empowering for balance -  professional and personal life balance</li>
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </Col>
                    <Col md={4} className="banner-col d-flex align-items-center justify-content-center">
                        <InView triggerOnce>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "show" : "hidden"}
                                    variants={reveal("up", 0.3)}
                                >
                                    <Card style={{ width: '18rem', borderRadius: '15px', overflow: 'hidden' }}>
                                        <Card.Img
                                            variant="top"
                                            style={{ width: "30%", height: "20%", margin: "auto", padding: "20px 0" }}
                                            src="/images/icon5.png"
                                            className="custom-card-img"
                                        />
                                        <Card.Body>
                                            <Card.Title style={{ textAlign: "center" }}>Coaching for Professionals</Card.Title>
                                            <Card.Text>
                                                <ul className='card-list'>
                                                    <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }}>Charted Financial Analyst</li>
                                                    <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }}>Certified Management Accountant</li>
                                                    <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }}>Certified Internal Auditor</li>
                                                    <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }}>International Financial Reporting Standards</li>
                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer style={{ backgroundColor: '#C21807', color: '#fff', textAlign: 'center', height: '10vh' }}>
                                        </Card.Footer>
                                    </Card>
                                </motion.div>
                            )}
                        </InView>
                    </Col>
                </Row>
            </Container>

            <FooterSection />
        </>
    );
};

export default Coaching;
