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

const Skills = () => {
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
                            src="/images/working-791849_1280.jpg"
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
                                <h2 className="mission-heading">Building and Nurturing Entrepreneurial Skills</h2>
                                <p style={{ textAlign: "left" }}>
                                    Provides aspiring entrepreneurs with the tools, knowledge, and mindset necessary to successfully launch and grow their ventures.
                                </p>
                                <ul style={{ color: '#013252' }} className="card-list">
                                    <li><strong>Strategy & Transformation: </strong> Offers insights and frameworks for strategic planning and organizational transformation to adapt and thrive in dynamic business environments.</li>
                                    <li><strong>Global Leadership and Crisis Management: </strong>Prepares leaders to navigate complex global challenges and effectively manage crises with resilience and agility.</li>
                                    <li><strong>Leading a Business in a VUCA World: </strong>Equips leaders with strategies and tactics to lead in volatile, uncertain, complex, and ambiguous (VUCA) environments, fostering adaptability and innovation.</li>
                                </ul>

                            </div>
                        </motion.div>
                    </Col>
                    <Col md={3} className="banner-col">
                        <motion.div initial="hidden" animate="show" variants={reveal("right", 0.3)}>
                            <Image
                                src="/images/abilities.png"
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

export default Skills;
