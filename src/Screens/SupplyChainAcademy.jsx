import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaBoxOpen, FaExchangeAlt, FaUsers, FaBalanceScale, FaProjectDiagram, FaRobot, FaTools, FaUserShield } from 'react-icons/fa'; // Import icons
import Supplychainacademy from '../Api/SupplyChainAcademy';
import { motion } from 'framer-motion';
import reveal from '../Animations/Variants';
import { InView } from 'react-intersection-observer';
import { useInView } from 'react-intersection-observer';

const SupplyChainAcademy = () => {

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

    const getIcon = (index) => {
        switch (index) {
            case 0:
                return <FaBoxOpen size={35} className="mb-3" />;
            case 1:
                return <FaExchangeAlt size={35} className="mb-3" />;
            case 2:
                return <FaUsers size={35} className="mb-3" />;
            case 3:
                return <FaBalanceScale size={35} className="mb-3" />;
            case 4:
                return <FaProjectDiagram size={35} className="mb-3" />;
            case 5:
                return <FaRobot size={35} className="mb-3" />;
            case 6:
                return <FaTools size={35} className="mb-3" />;
            case 7:
                return <FaUserShield size={35} className="mb-3" />;
            default:
                return <FaBoxOpen size={35} className="mb-3" />;
        }
    };

    return (
        <div>
            <Navbar />
            <Container>
                <Row className="mt-5 bg-light py-4 rounded">
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <motion.div initial="hidden" animate="show" variants={reveal("left", 0)}>
                            <div className="image-container">
                                <img src="/images/supply.jpg" alt="" className="img-fluid" />
                                <div className="overlay"></div>
                            </div>
                        </motion.div>
                    </Col>
                    <Col xs={12} md={6} className="py-5">
                        <motion.div initial="hidden" animate="show" variants={reveal("right", 0.3)}>
                            <h2 className="text-left mb-4 mission-heading" style={{ color: "#ff5c4a", fontWeight: 700 }}>Supply Chain Academy</h2>
                            <p style={{ color: "#013252", fontWeight: 600, textAlign: "justify" }} className="text-justify">
                                Supply Chain Academy provides tailored programs for logistics professionals, emphasizing warehouse management, transportation, and stakeholder communication. Courses cover risk mitigation, technology integration, and leadership development aligned with organizational goals.
                            </p>
                        </motion.div>
                    </Col>
                </Row>

                <Row className="mt-5 bg-light py-4 rounded justify-content-center">
                    <Col xs={12} className="text-center">
                        <InView triggerOnce>
                            {({ inView, ref }) => (
                                <motion.div
                                    initial="hidden"
                                    animate={inView ? "show" : "hidden"}
                                    variants={reveal("up", 0)}
                                    ref={ref}
                                >
                                    <h3 className='mission-heading' style={{ color: "#ff5c4a", fontWeight: 700 }}>Our Supply Chain Academy Programs</h3>
                                </motion.div>
                            )}
                        </InView>
                    </Col>
                    {Supplychainacademy.map((program, index) => (
                        <Col key={index} xs={12} md={3} className="mb-4 mt-3 d-flex align-items-stretch">
                            <InView triggerOnce>
                                {({ inView, ref }) => (
                                    <motion.div
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={reveal("up", index * 0.3)}
                                        ref={ref}
                                        style={{ display: 'flex', flexGrow: 1, margin: '10px' }}
                                    >
                                        <Card className="allCards h-100 shadow" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'stretch', height: '100%' }}>
                                            <Card.Body className="d-flex flex-column align-items-center" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                {getIcon(index)}
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

export default SupplyChainAcademy;
