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

const Leading = () => {
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
                                src="/images/s3.jpg"
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
                            }}>Leading a Business in a VUCA World</h1></div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='mt-4'> 
                    <div className="mission-section py-5 text-center">
                        {/* <h1 className='mission-heading'>Leading a Business in a VUCA World</h1> */}
                    </div>

                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Col xs={12} md={6} className='mt-4' style={{ display: 'flex' }}>
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={slideInFromLeft}
                                        style={{ flex: 1, backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', margin: '10px' }}
                                    >
                                        <h4 className='mission-heading2'>Objectives</h4>
                                        <p style={{ textAlign: "justify", padding: "10px", color: "#212529", fontWeight: 600 }}>
                                            This program aims to equip participants with the knowledge and skills required to navigate and excel in volatile, uncertain, complex, and ambiguous (VUCA) business environments. Through this program, attendees will develop adaptive leadership strategies, gain insights into emerging trends and market dynamics, and foster a culture of innovation and resilience within their organizations to thrive amidst rapid change and uncertainty.
                                        </p>
                                    </motion.div>
                                </Col>
                                <Col xs={12} md={6} className='mt-3' style={{ display: 'flex' }}>
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={slideInFromLeft}
                                        className='mt-4'
                                        style={{ flex: 1, backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', margin: '10px' }}
                                    >
                                        <ul className='card-list'>
                                            <h4 className='mission-heading2'>Who Should Attend?</h4> <br />
                                            <li>Entrepreneurs and Business Leaders</li>
                                            <li>Senior Executives and Managers </li>
                                            <li>Industry Professionals</li>
                                        </ul>
                                    </motion.div>
                                </Col>
                            </div>
                        )}
                    </InView>

                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Col xs={12} md={6} className='mt-3' style={{ display: 'flex' }}>
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={slideInFromRight}
                                        style={{ flex: 1, backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', margin: '10px' }}
                                    >
                                        <h4 className='mission-heading2'>Learning Outcome</h4>
                                        <ul className='card-list'>
                                            <li>Understand VUCA concepts and their implications for leadership</li>
                                            <li>Develop adaptive leadership skills to navigate uncertainty and drive success</li>
                                            <li>Gain insights into emerging trends to capitalize on opportunities</li>
                                            <li>Cultivate a culture of innovation and agility within their organizations</li>
                                            <li>Apply VUCA leadership principles to drive sustainable growth</li>
                                        </ul>
                                    </motion.div>
                                </Col>
                                <Col xs={12} md={6} className='mt-3' style={{ display: 'flex' }}>
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={slideInFromRight}
                                        style={{ flex: 1, backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', margin: '10px' }}
                                    >
                                        <h4 className='mission-heading2'>Duration</h4>
                                        <ul className='card-list'>
                                            <p style={{ textAlign: "justify", padding: "10px", color: "#212529", fontWeight: 600 }}>
                                                2-day program
                                            </p>
                                        </ul>
                                    </motion.div>
                                </Col>
                            </div>
                        )}
                    </InView>
                </Row>

            </Container>
            <FooterSection />
        </div >
    )
}

export default Leading;
