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

const Stratergy = () => {
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
                        <motion.img
                            src="/images/s1.jpg"
                            alt="Leadership Banner"
                            className="banner-image"
                            style={{ width: "100%", height: "60vh", objectFit: "cover" }}
                            initial={{ x: -1000 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}
                        />
                    </Col>
                </Row>

                <Row>
                    <div className="mission-section py-5 text-center">
                        <h1 className='mission-heading'>Strategy & Transformation</h1>
                    </div>

                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <Col xs={12} md={6} className='mt-3'>
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "show" : "hidden"}
                                    variants={slideInFromLeft}
                                    style={{ height: 'auto', marginBottom: '10px', backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px' }}
                                >
                                    <h4 className='mission-heading2'>Objectives</h4>
                                    <p style={{ textAlign: "justify", padding: "10px", color: "#013252", fontWeight: 600 }}>
                                        This program is designed to equip participants with advanced strategic thinking skills and transformational leadership capabilities. Through this program, attendees will gain expertise in strategic planning aligned with organizational objectives, while also learning effective change management techniques to foster adaptability and drive organizational growth.
                                    </p>
                                </motion.div>
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
                                        <li>Mid to Senior-Level Managers</li>
                                        <li>Entrepreneurs and Business Owners</li>
                                        <li>Consultants and Advisors</li>
                                    </ul>
                                </motion.div>
                            </Col>
                        )}
                    </InView>

                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
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
                                        <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Proficiency in conducting comprehensive strategic analyses</li>
                                        <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Advanced leadership competencies for successful transformation initiatives</li>
                                        <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Development of strategic plans aligned with organizational objectives</li>
                                        <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Effective management of organizational change and fostering innovation</li>
                                        <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Application of strategic thinking and leadership principles to real-world challenges</li>
                                    </ul>
                                </motion.div>
                                <InView threshold={0.2} triggerOnce>
                                    {({ inView, ref }) => (
                                        <Col xs={12} md={6} style={{ width: "100%" }} className='mt-3'>
                                            <motion.div
                                                ref={ref}
                                                initial="hidden"
                                                animate={inView ? "show" : "hidden"}
                                                variants={slideInFromRight}
                                                style={{ height: 'auto', backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', width: '100%' }}
                                            >
                                                <h4 className='mission-heading2'>Duration</h4>
                                                <ul className='card-list'>
                                                    <p style={{ textAlign: "justify", padding: "10px", color: "#013252", fontWeight: 600 }}>
                                                        2-day program
                                                    </p>
                                                </ul>
                                            </motion.div>
                                        </Col>
                                    )}
                                </InView>
                            </Col>
                        )}
                    </InView>
                </Row>

            </Container>
            <FooterSection />
        </div >
    )
}

export default Stratergy;
