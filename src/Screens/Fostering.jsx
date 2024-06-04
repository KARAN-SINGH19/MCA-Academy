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

const Fostering = () => {
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
                            src="/images/4.jpg"
                            alt="Leadership Banner"
                            className="banner-image"
                            style={{ width: "100%", height: "40vh", objectFit: "cover" }}
                            initial={{ x: -1000 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}
                        />
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
                                    <Card className='pillarCard' style={{ width: '18rem', borderRadius: '15px', overflow: 'hidden' }}>
                                        <Card.Img
                                            variant="top"
                                            style={{ width: "30%", height: "20%", margin: "auto", padding: "20px 0" }}
                                            src="/images/icon4.png"
                                            className="custom-card-img"
                                        />
                                        <Card.Body>
                                            <Card.Title style={{ textAlign: "center" }}>Fostering Functional Expertise</Card.Title>
                                            <Card.Text>
                                                <ul className='card-list'>

                                                    <Link style={{ textDecoration: "none", color: "#013252" }} to={'/FinanceAcademy'}>
                                                        <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }}>Finance Academy</li>
                                                    </Link>

                                                    <Link style={{ textDecoration: "none", color: "#013252" }} to={'/HRAcademy'}>
                                                        <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }}>HR Academy</li>
                                                    </Link>

                                                    <Link style={{ textDecoration: "none", color: "#013252" }} to={'/SupplyChainAcademy'}>
                                                        <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }}>Supply Chain Academy</li>
                                                    </Link>

                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer style={{ backgroundColor: '#F4B400 ', color: '#fff', textAlign: 'center', height: '10vh' }}>
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
                                        <h2 className="mission-heading">Fostering Functional Expertise</h2>
                                        <p className='mt-4' style={{ textAlign: "left" }}>
                                            Under this pillar we have specific functional academies focusing on building in-depth knowledge, skills, and application
                                        </p>

                                        <p className='mt-4' style={{ textAlign: "left" }}>
                                            The mission of our Functional Academies is to empower professionals with specialized knowledge, skills, and expertise in their respective fields. Through comprehensive training and development programs, we aim to enhance competency, efficiency, and effectiveness, enabling participants to excel in their roles and contribute to organizational success.
                                        </p>

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

export default Fostering;
