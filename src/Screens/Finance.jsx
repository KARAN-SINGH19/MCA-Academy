import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import finance from '../Api/Finance';
import { motion } from 'framer-motion';
import reveal from '../Animations/Variants';
import { InView } from 'react-intersection-observer';
import { useInView } from 'react-intersection-observer';

const Finance = () => {
    const generateURL = (text) => {
        return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    };
    const handleLinkClick = (event) => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        window.location.href = href;
        window.scrollTo(0, 0);
    };
    const FooterSection = () => {
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
    };

    return (
        <div>
            <Navbar />
            <Container>
                <Row className="mt-5 bg-light py-4 rounded">
                    <Col xs={12} md={6}>
                        <motion.div initial="hidden" animate="show" variants={reveal("left", 0)}>
                            <div className="image-container">
                                <img src="/images/calculator-385506_1280.jpg" alt="" className="img-fluid" />
                                <div className="overlay"></div>
                            </div>
                        </motion.div>
                    </Col>
                    <Col xs={12} md={6}>
                        <motion.div initial="hidden" animate="show" variants={reveal("right", 0.3)}>
                            <div className="py-5">
                                <h2 className="text-left mb-4 mission-heading" style={{ color: "#ff5c4a", fontWeight: 700 }}>Finance Academy</h2>
                                <p style={{ color: "#013252", fontWeight: 600, textAlign: "justify" }} className="text-justify">
                                    Finance Academy offers a variety of programs tailored to elevate financial professionals' expertise and foster organizational prosperity. Our curriculum centers on cultivating strategic financial partnerships, leveraging data for informed decision-making, and nurturing the next generation of financial professionals.
                                </p>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
                <Row className="mt-5 bg-light py-4 rounded">
                    <Col xs={12} md={6}>
                        <motion.div initial="hidden" animate="show" variants={reveal("left", 0)}>
                            <div className="py-5">
                                <h3 className='mission-heading' style={{ color: "#ff5c4a", fontWeight: 700 }}>Our Finance Academy Programs</h3>
                                <InView threshold={0.2} triggerOnce={true}>
                                    {({ inView, ref }) => (
                                        <ul className="text-left card-list" ref={ref} style={{ listStyleType: 'none', padding: 0 }}>
                                            {finance.map((point, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial="hidden"
                                                    animate={inView ? "show" : "hidden"}
                                                    variants={reveal("left", 0.1 + 0.1 * index)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <Link to={`/${generateURL(point)}`} style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleLinkClick}>
                                                        {point}
                                                    </Link>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    )}
                                </InView>
                            </div>
                        </motion.div>
                    </Col>
                    <Col xs={12} md={6}>
                        <InView threshold={0.2} triggerOnce={true}>
                            {({ inView, ref }) => (
                                <motion.div ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} variants={reveal("up", 0.1)}>
                                    <div className="image-container">
                                        <img src="/images/blur-1853262_1280.jpg" alt="" className="img-fluid" />
                                        <div className="overlay"></div>
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </Col>
                </Row>

            </Container>
            <FooterSection />
        </div>
    );
};

export default Finance;
