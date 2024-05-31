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

    const AnimatedColumn = ({ children, delay, direction }) => {
        const [ref, inView] = useInView({
            triggerOnce: true,
            rootMargin: '-100px 0px',
        });

        return (
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                variants={reveal(direction, delay)}
                transition={{ delay }}
            >
                {children}
            </motion.div>
        );
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

    const circles = [...Array(7)].map((_, i) => {
        const angle = (i / 7) * 2 * Math.PI;
        const radius = 120;
        const x = 50 + (radius * Math.cos(angle)) / 70 * 50;
        const y = 50 + (radius * Math.sin(angle)) / 70 * 50;
        return { x, y };
    });

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
            </Container>

            <Container>
                <Row className="mt-5 bg-light py-4 rounded">
                    <Col xs={12} md={6} className="mb-4 mb-md-0 pr-md-4">
                        <AnimatedColumn delay={0.3} direction="right">
                            <div className="py-5 text-center position-relative circle-container">
                                <div className="central-circle">Finance Academy <br /> Programs</div>
                                <div className="surrounding-circles">
                                    {circles.map((circle, i) => (
                                        <Link
                                            key={i}
                                            onClick={handleLinkClick}
                                            to={`/${generateURL(finance[i])}`}
                                            className={`surrounding-circle circle${(i % 7) + 1}`}
                                            style={{
                                                top: `${circle.y}%`,
                                                left: `${circle.x}%`,
                                                transform: 'translate(-50%, -50%)',
                                                textAlign: 'center',
                                                padding: '5px',
                                                fontSize: '0.85rem',
                                                textDecoration: 'none',
                                                transition: 'transform 0.3s ease',
                                            }}
                                        >
                                            {finance[i]}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </AnimatedColumn>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center pl-md-4">
                        <AnimatedColumn delay={0} direction="left">
                            <div className="image-container">
                                <img style={{ maxWidth: "85%", maxHeight: "calc(88vh - 40px)", marginLeft: "50px" }} src="/images/blur-1853262_1280.jpg" alt="" className="img-fluid" />
                                <div className="overlay"></div>
                            </div>
                        </AnimatedColumn>
                    </Col>
                </Row>
            </Container>


            <br /> <br />
            <FooterSection />
        </div >
    );
};

export default Finance;
