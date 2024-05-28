import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaChalkboardTeacher, FaChartLine, FaUserGraduate } from 'react-icons/fa';
import HR from '../Api/HRAcademy';
import { motion } from 'framer-motion';
import reveal from '../Animations/Variants';
import { InView } from 'react-intersection-observer';
import { useInView } from 'react-intersection-observer';

const HRAcademy = () => {

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
        <div>
            <Navbar />
            <Container>
                <Row className="mt-5 bg-light py-4 rounded">
                    <Col xs={12} md={6}>
                        <motion.div initial="hidden" animate="show" variants={reveal("left", 0)}>
                            <div className="image-container">
                                <img src="/images/office-desk-6952919_1280.jpg" alt="" className="img-fluid" />
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

                <Row className="mt-5 bg-light py-4 rounded">
                    <Col xs={12} className="text-center">
                        <InView triggerOnce>
                            {({ inView, ref }) => (
                                <motion.div
                                    initial="hidden"
                                    animate={inView ? "show" : "hidden"}
                                    variants={reveal("up", 0)}
                                    ref={ref}
                                >
                                    <h3 className='mission-heading' style={{ color: "#ff5c4a", fontWeight: 700 }}>Our HR Academy Programs</h3>
                                </motion.div>
                            )}
                        </InView>
                    </Col>
                    {HR.map((program, index) => (
                        <Col key={index} xs={12} md={4} className="mb-4 mt-3 d-flex align-items-center">
                            <InView triggerOnce>
                                {({ inView, ref }) => (
                                    <motion.div
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={reveal("up", index * 0.3)}
                                        ref={ref}
                                    >
                                        <Card className="allCards h-100 shadow">
                                            <Card.Body className="d-flex flex-column align-items-center">
                                                {index === 0 && <FaChalkboardTeacher size={35} className="mb-3" />}
                                                {index === 1 && <FaChartLine size={35} className="b-3" />}
                                                {index === 2 && <FaUserGraduate size={35} className="mb-3" />}
                                                <Card.Title style={{ color: "#ff5c4a", fontWeight: 600, textAlign: "center" }}>{program[`heading${index + 1}`]}</Card.Title>
                                                <Card.Text style={{ color: "#013252", fontWeight: 600, textAlign: "justify" }}>{program[`point${index + 1}`]}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </motion.div>
                                )}
                            </InView>
                        </Col>
                    ))}
                </Row>
            </Container>
            <FooterSection />
        </div>
    );
};

export default HRAcademy;
