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
                            src="/images/2.jpg"
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
                                    initial="hidden"
                                    animate={inView ? "show" : "hidden"}
                                    variants={reveal("up", 0)}
                                    ref={ref}
                                >
                                    <div>
                                        <h2 className="mission-heading">Building and Nurturing Entrepreneurial Skills</h2>
                                        <p className='mt-4' style={{ textAlign: "left" }}>
                                            Provides aspiring entrepreneurs with the tools, knowledge, and mindset necessary to successfully launch and grow their ventures.
                                        </p>
                                        <ul style={{ color: '#013252', marginLeft: "15px", textIndent: '-25px' }} className="card-list">
                                            <li><strong>Strategy & Transformation: </strong> Offers insights and frameworks for strategic planning and organizational transformation to adapt and thrive in dynamic business environments.</li>
                                            <li><strong>Global Leadership and Crisis Management: </strong>Prepares leaders to navigate complex global challenges and effectively manage crises with resilience and agility.</li>
                                            <li><strong>Leading a Business in a VUCA World: </strong>Equips leaders with strategies and tactics to lead in volatile, uncertain, complex, and ambiguous (VUCA) environments, fostering adaptability and innovation.</li>
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
                                            src="/images/icon2.png"
                                            className="custom-card-img"
                                        />
                                        <Card.Body>
                                            <Card.Title style={{ textAlign: "center" }}>Entrepreneurial Excellence - Skills and mindset</Card.Title>
                                            <Card.Text>
                                                <ul className='card-list'>

                                                    <Link style={{ textDecoration: "none", color: "#013252" }} to={'/StratergyandTransformation'}>
                                                        <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }}>Strategy and Transformation</li>
                                                    </Link>


                                                    <Link style={{ textDecoration: "none", color: "#013252" }} to={'/GlobalLeadershipandCrisisManagement'}>
                                                        <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }}>Global Leadership and Crisis Management</li>
                                                    </Link>

                                                    <Link style={{ textDecoration: "none", color: "#013252" }} to={'/LeadingaBusinessinaVUCAWorld'}>
                                                        <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }}>Leading a Business in a VUCA World</li>
                                                    </Link>

                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer style={{ backgroundColor: '#395f60 ', color: '#fff', textAlign: 'center', height: '10vh' }}>
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

export default Skills;
