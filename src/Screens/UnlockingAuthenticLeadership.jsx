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

const UnlockingAuthenticLeadership = () => {
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
                            src="/images/leadership-7882178_1280.jpg"
                            alt="Leadership Banner"
                            className="banner-image"
                            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
                            initial={{ x: -1000 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}
                        />
                    </Col>
                </Row>
                <Row className="team-row mt-4">
                    <Col md={6} className="mission-col">
                        <InView triggerOnce>
                            {({ inView, ref }) => (
                                <motion.div
                                    initial="hidden"
                                    animate={inView ? "show" : "hidden"}
                                    variants={reveal("up", 0)}
                                    ref={ref}
                                >
                                    <div className="mission-section py-5 text-center bg-light">
                                        <h2 className="mission-heading">Unlocking Authentic Leadership</h2>
                                        <p style={{ textAlign: "left" }}>
                                            This program focuses on helping individuals discover and leverage their unique leadership style, fostering authenticity and effectiveness in leadership roles.
                                        </p>
                                        <ul style={{ color: '#013252' }} className="card-list">
                                            <li><strong>Emerging Leader Development:</strong> Designed to empower and equip emerging leaders with the essential skills and mindset needed to navigate the challenges of leadership early in their careers.</li>
                                            <li><strong>Leadership, Business Communication, and Executive Presence:</strong> Equips participants with advanced communication strategies and executive presence techniques essential for effective leadership in today's competitive business landscape.</li>
                                        </ul>

                                    </div>

                                </motion.div>
                            )}
                        </InView>
                    </Col>
                    <Col md={6} className="banner-col d-flex align-items-center justify-content-center">
                        <InView triggerOnce>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "show" : "hidden"}
                                    variants={reveal("up", 0.3)}
                                >
                                    <div className="image-container">
                                        <img src="/images/meeting-2284501_1280.jpg" alt="" className="img-fluid" />
                                        <div className="overlay"></div>
                                    </div>
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

export default UnlockingAuthenticLeadership;
