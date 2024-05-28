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

const EmpoweringWomenLeadersForSuccess = () => {
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
                            src="/images/working-1219889_1280.jpg"
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
                    <Col md={9} className="mission-col">
                        <motion.div initial="hidden" animate="show" variants={reveal("left", 0)}>
                            <div className="mission-section py-5 text-center bg-light">
                                <h2 className="mission-heading">Empowering Women Leaders for Success</h2>
                                <p style={{ textAlign: "left" }}>
                                    Empowers women leaders with skills, support, and strategies to overcome barriers, unlock their potential, and thrive in leadership roles.
                                </p>
                                <ul style={{ color: '#013252' }} className="card-list">
                                    <li><strong>Unlocking My Professional Presence: </strong> Focuses on personal branding, self-awareness, and professional development to enhance one's presence and impact in the workplace.</li>
                                    <li>Fortifying Corporate resilience for uncertain times</li>
                                    <li><strong>Harmony</strong>- Empowering for balance -  professional and personal life balance</li>
                                </ul>
                            </div>
                        </motion.div>
                    </Col>
                    <Col md={3} className="banner-col">
                        <motion.div initial="hidden" animate="show" variants={reveal("right", 0.3)}>
                            <Image
                                src="/images/avatar.png"
                                alt="Leadership Banner"
                                fluid
                                className="banner-image"
                                style={{ height: "45vh", width: "auto", marginTop: "50px" }}
                            />
                        </motion.div>
                    </Col>
                </Row>
            </Container>

            <FooterSection />
        </>
    );
};

export default EmpoweringWomenLeadersForSuccess;
