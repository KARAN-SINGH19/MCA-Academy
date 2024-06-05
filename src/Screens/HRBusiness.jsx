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

const HRBusiness = () => {
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
                            src="/images/hrr1.jpg"
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
                        <h1 className='mission-heading'>HR Business Partnering Development Program</h1>
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
                                    <p style={{ textAlign: "justify", padding: "10px", color: "#212529", fontWeight: 600 }}>
                                        This program aims to equip HR professionals with the skills and knowledge necessary to become strategic business partners within their organizations. The program focuses on developing strategic thinking, enhancing business acumen, and fostering strong partnerships between HR and other business units to drive organizational success.
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
                                        <li>HR professionals moving to strategic roles</li>
                                        <li>HR professionals moving to strategic roles</li>
                                        <li>Business leaders enhancing HR functions</li>
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
                                        <li>Develop strategic thinking skills to align HR initiatives with business goals</li>
                                        <li>Enhance business acumen to better understand and contribute to organizational strategy</li>
                                        <li>Build strong partnerships with business leaders to drive performance and growth</li>
                                        <li>Gain expertise in data-driven decision-making and HR analytics</li>
                                        <li>Implement best practices in change management and organizational development</li>
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
                                                    <p style={{ textAlign: "justify", padding: "10px", color: "#212529", fontWeight: 600 }}>
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

export default HRBusiness;
