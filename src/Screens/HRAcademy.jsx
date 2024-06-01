import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';
import reveal from '../Animations/Variants';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import HR from '../Api/HRAcademy';

const HRAcademy = () => {
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

    const generateURL = (text) => {
        return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    };

    const handleLinkClick = (event) => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        window.location.href = href;
        window.scrollTo(0, 0);
    };

    const circles = HR.map((_, i) => {
        let x, y;
        if (i === 0) {
            x = 50;
            y = -25;
        } else if (i === 1) {
            x = -15;
            y = 90;
        } else if (i === 2) {
            x = 115;
            y = 90;
        }
        return { x, y };
    });

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

    return (
        <div>
            <Navbar />
            <Container>
                <Row className="mt-5 bg-light py-4 rounded">
                    <Col xs={12} md={6}>
                        <motion.div initial="hidden" animate="show" variants={reveal("left", 0)}>
                            <div className="image-container">
                                <img src="/images/hr.jpg" alt="" className="img-fluid" />
                                <div className="overlay"></div>
                            </div>
                        </motion.div>
                    </Col>
                    <Col xs={12} md={6}>
                        <motion.div initial="hidden" animate="show" variants={reveal("right", 0.3)}>
                            <div className="py-5">
                                <h2 className="text-left mb-4 mission-heading" style={{ color: "#ff5c4a", fontWeight: 700 }}>HR Academy</h2>
                                <p style={{ color: "#013252", fontWeight: 600, textAlign: "justify" }} className="text-justify">
                                    HR Academy offers a range of programs designed to enhance HR professionals' skills and drive organizational success. Our programs focus on strategic partnership development, data-driven decision-making, and grooming future HR leaders.
                                </p>
                            </div>
                        </motion.div>
                    </Col>
                </Row>

                <Row className="mt-5 bg-light py-4 rounded" style={{ height: "80vh" }}>
                    <Col xs={12} className="text-center">
                        <h3 className='mission-heading' style={{ color: "#ff5c4a", fontWeight: 700 }}>Our HR Academy Programs</h3>
                    </Col>
                    <Col xs={6} md={6} className="d-flex justify-content-center">
                        <AnimatedColumn delay={0.3} direction="right">
                            <div className="py-5 text-center position-relative circle-container">
                                <div
                                    className="central-circle"
                                    style={{
                                        position: 'absolute',
                                        top: '65%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        color: '#ffffff',
                                        padding: '20px',
                                        borderRadius: '50%',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        width: '200px',
                                        height: '150px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    HR Academy Programs
                                </div>
                                <div className="surrounding-circles mt-5">
                                    {HR.map((program, index) => (
                                        <Link
                                            key={index}
                                            onClick={handleLinkClick}
                                            to={`/${generateURL(program)}`}
                                            className='surrounding-circle'
                                            style={{
                                                top: `${circles[index].y}%`,
                                                left: `${circles[index].x}%`,
                                                transform: 'translate(-50%, -50%)',
                                                textAlign: 'center',
                                                padding: '5px',
                                                fontSize: '0.85rem',
                                                textDecoration: 'none',
                                                transition: 'transform 0.3s ease',
                                                cursor: "pointer"
                                            }}
                                        >
                                            {program}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </AnimatedColumn>
                    </Col>
                    <Col xs={6} md={6} className="d-flex align-items-center justify-content-center pl-md-4">
                        <AnimatedColumn delay={0} direction="up">
                            <div className="image-container">
                                <img style={{ maxWidth: "85%", maxHeight: "calc(88vh - 40px)", marginLeft: "50px" }} src="/images/hr2.jpg" alt="" className="img-fluid" />
                                <div className="overlay"></div>
                            </div>
                        </AnimatedColumn>
                    </Col>
                </Row>
            </Container>
            <FooterSection />
        </div>
    );
};

export default HRAcademy;
