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

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

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
        <>
            <Navbar />

            <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Row>
                    <Col>
                        <div className="image-container">
                            <motion.img
                                src="/images/2.jpg"
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
                            }}>Entrepreneurial Excellence - Skills and mindset</h1></div>
                        </div>
                    </Col>
                </Row>
                <Row className="team-row mt-4 mission-section py-5 text-center bg-light">
                    <Col md={5} className="banner-col d-flex align-items-center justify-content-center">
                        <InView triggerOnce>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "show" : "hidden"}
                                    variants={reveal("up", 0.3)}
                                >
                                    <Card className='pillarCard' style={{ width: '18rem', borderRadius: '15px', overflow: 'hidden' }}>
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

                                                    <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }} onClick={() => { scrollToSection("StrategyandTransformation") }}>Strategy and Transformation</li>

                                                    <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }} onClick={() => { scrollToSection("GlobalLeadershipandCrisisManagement") }}>Global Leadership and Crisis Management</li>

                                                    <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }} onClick={() => { scrollToSection("LeadingaBusinessinaVUCAWorld") }}>Leading a Business in a VUCA World</li>

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
                    <Col md={5} className="mission-col  d-flex align-items-center justify-content-center">
                        <InView triggerOnce>
                            {({ inView, ref }) => (
                                <motion.div
                                    initial="hidden"
                                    animate={inView ? "show" : "hidden"}
                                    variants={reveal("up", 0)}
                                    ref={ref}
                                >
                                    <div>
                                        <h2 className="mission-heading">Entrepreneurial Excellence -  Skills and mindset</h2>
                                        <p className='mt-4' style={{ fontSize: "20px", textAlign: "justify" }}>
                                            This pillar focuses on skills, mindset, and knowledge to excel in entrepreneurship by fostering creativity, innovation, problem-solving, resilience, and strategic thinking.
                                        </p>
                                        <p className='mt-4' style={{ fontSize: "20px", textAlign: "justify" }}>
                                            These courses also focus on developing qualities like risk-taking, adaptability, perseverance, and seizing opportunities, while addressing strategies for navigating transformation, leading in a VUCA world, and crisis management.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </Col>
                </Row>

                <Row id="StrategyandTransformation">
                    <div className="mission-section py-5 text-center mt-3">
                        <h1 className='mission-heading'>Strategy & Transformation</h1>
                    </div>

                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <>
                                <Col xs={12} md={6} className='mt-3'>
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={slideInFromLeft}
                                        style={{ height: 'auto', marginBottom: '10px', backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px' }}
                                    >
                                        <h4 className='mission-heading2'>Objectives</h4>
                                        <p style={{ textAlign: "justify", padding: "10px", color: "#666666", fontWeight: 700 }}>
                                            This program is designed to equip participants with advanced strategic thinking skills and transformational leadership capabilities. Through this program, attendees will gain expertise in strategic planning aligned with organizational objectives, while also learning effective change management techniques to foster adaptability and drive organizational growth.
                                        </p>
                                    </motion.div>
                                </Col>
                                <Col>
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
                                            <li>Senior Leadership</li>
                                            <li>Entrepreneurs and Business Owners</li>
                                            <li>Business Transformation Leads</li>
                                        </ul>
                                    </motion.div>
                                </Col>
                            </>
                        )}
                    </InView>

                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <>
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
                                </Col>
                                <Col>
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
                                                        <p style={{ textAlign: "justify", padding: "10px", color: "#666666", fontWeight: 600 }}>
                                                            2-day program
                                                        </p>
                                                    </ul>
                                                </motion.div>
                                            </Col>
                                        )}
                                    </InView>
                                </Col>
                            </>
                        )}
                    </InView>
                </Row>




                <Row id='GlobalLeadershipandCrisisManagement'>
                    <div className="mission-section py-5 text-center mt-3">
                        <h1 className='mission-heading'>Global Leadership and Crisis Management</h1>
                    </div>

                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <>
                                <Col xs={12} md={6} className='mt-3'>
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={slideInFromLeft}
                                        style={{ height: 'auto', marginBottom: '10px', backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px' }}
                                    >
                                        <h4 className='mission-heading2'>Objectives</h4>
                                        <p style={{ textAlign: "justify", padding: "10px", color: "#666666", fontWeight: 600 }}>
                                            The program brings necessary frameworks and practical skills to effectively lead and manage in a global business environment. It focuses on understanding global and local dynamics, enhancing cross-cultural collaboration, developing inclusive leadership, aligning missions and values, and building strong networks. The program also equips participants with tools and strategies for effective crisis management.
                                        </p>
                                    </motion.div>
                                </Col>
                                <Col>
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
                                            <li>Senior Leadership</li>
                                            <li>Entrepreneurs and Business Owners</li>
                                            <li>Crisis Management Leads</li>
                                        </ul>
                                    </motion.div>
                                </Col>
                            </>
                        )}
                    </InView>

                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <>
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
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Enhance collaboration by integrating global and local strengths</li>
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Develop a diverse leadership team reflective of global customers</li>
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Align teams around the company’s mission and values</li>
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Navigate and manage cross-cultural sensitivities</li>
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Develop effective crisis management strategies</li>
                                        </ul>
                                    </motion.div>
                                </Col>
                                <Col>
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
                                                        <p style={{ textAlign: "justify", padding: "10px", color: "#666666", fontWeight: 600 }}>
                                                            2-day program
                                                        </p>
                                                    </ul>
                                                </motion.div>
                                            </Col>
                                        )}
                                    </InView>
                                </Col>
                            </>
                        )}
                    </InView>
                </Row>




                <Row id='LeadingaBusinessinaVUCAWorld'>
                    <div className="mission-section py-5 text-center mt-3">
                        <h1 className='mission-heading'>Leading a Business in a VUCA World</h1>
                    </div>

                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <>
                                <Col xs={12} md={6} className='mt-3'>
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "show" : "hidden"}
                                        variants={slideInFromLeft}
                                        style={{ height: 'auto', marginBottom: '10px', backgroundColor: "#f8f9fa", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px' }}
                                    >
                                        <h4 className='mission-heading2'>Objectives</h4>
                                        <p style={{ textAlign: "justify", padding: "10px", color: "#666666", fontWeight: 600 }}>
                                            This program builds knowledge and skills required to navigate and excel in volatile, uncertain, complex, and ambiguous (VUCA) business environment. Through this program, attendees will develop adaptive leadership strategies, gain insights into emerging trends and market dynamics, and foster a culture of innovation and resilience within their organizations to thrive amidst rapid change and uncertainty.
                                        </p>
                                    </motion.div>
                                </Col>
                                <Col>
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
                                            <li>Senior Leadership</li>
                                            <li>Entrepreneurs and Business Owners </li>
                                            <li>Business Transformation Leadss</li>
                                        </ul>
                                    </motion.div>
                                </Col>
                            </>
                        )}
                    </InView>

                    <InView threshold={0.2} triggerOnce>
                        {({ inView, ref }) => (
                            <>
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
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Understand VUCA concepts and their implications for leadership</li>
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Develop adaptive leadership skills to navigate uncertainty and drive success</li>
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Gain insights into emerging trends to capitalize on opportunities</li>
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Cultivate a culture of innovation and agility within their organizations</li>
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Apply VUCA leadership principles to drive sustainable growth</li>
                                        </ul>
                                    </motion.div>
                                </Col>
                                <Col>
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
                                                        <p style={{ textAlign: "justify", padding: "10px", color: "#666666", fontWeight: 600 }}>
                                                            2-day program
                                                        </p>
                                                    </ul>
                                                </motion.div>
                                            </Col>
                                        )}
                                    </InView>
                                </Col>
                            </>
                        )}
                    </InView>

                </Row>


            </Container >

            <FooterSection />
        </>
    );
};

export default Skills;
