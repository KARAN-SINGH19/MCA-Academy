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

const FinancialReporting = () => {
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
                            src="/images/office-1574717_1280.jpg"
                            alt="Leadership Banner"
                            className="banner-image"
                            style={{ width: "100%", height: "50vh", objectFit: "cover" }}
                            initial={{ x: -1000 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}
                        />
                    </Col>
                </Row>

                <Row>
                    <div className="mission-section py-5 text-center">
                        <h1 className='mission-heading'>Accounting Standards</h1>
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
                                        This 3-day program will enable the participants to better understand the conceptual framework and be able to prepare both stand alone and consolidated financial statements by effectively using the rules of recognition, measurement, presentation, and disclosure for determining the Impact of important business events on the financial statements.
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
                                        <h4 className='mission-heading2'> Who Should Attend?</h4> <br />
                                        <li>All involved in financial analysis and financial reporting</li>
                                        <li>Owners and identified successors of family businesses</li>
                                        <li>Internal auditors</li>
                                    </ul>
                                </motion.div>
                            </Col>
                        )}
                    </InView>

                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <Col xs={12} md={6} style={{ display: 'flex', alignItems: 'center' }}>
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "show" : "hidden"}
                                    variants={slideInFromRight}
                                    style={{ height: 'auto', backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', width: '100%' }}
                                >
                                    <h4 className='mission-heading2'>Learning Outcome</h4>
                                    <ul className='card-list'>
                                        <li>Understand the conceptual framework of IFRS</li>
                                        <li>Prepare standalone and consolidated financial statements in compliance with IFRS standards</li>
                                        <li>Effectively apply rules of recognition, measurement, presentation, and disclosure in financial reporting</li>
                                        <li>Determine the impact of significant business events on financial statements according to IFRS guidelines</li>
                                    </ul>
                                </motion.div>
                            </Col>
                        )}
                    </InView>
                </Row>

            </Container>
            <FooterSection />
        </div >
    )
}

export default FinancialReporting;
