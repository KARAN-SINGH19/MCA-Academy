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

const UnlockingAuthenticLeadership = () => {

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
                                src="/images/1.jpg"
                                alt="Leadership Banner"
                                className="banner-image"
                                style={{ width: "100%", height: "40vh", objectFit: "cover" }}
                                initial={{ x: -1000 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 1 }}
                            />
                            <div className="overlay"><h1 style={{ color: "white",display: "flex",
                            justifyContent: "center",
                            alignItems: "center" }}>Unlocking Authentic Leadership</h1></div>
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
                                            src="/images/icon1.png"
                                            className="custom-card-img"
                                        />
                                        <Card.Body>
                                            <Card.Title style={{ textAlign: "center" }}>Unlocking Authentic Leadership</Card.Title>
                                            <Card.Text>
                                                <ul className='card-list'>

                                                    <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }} onClick={() => scrollToSection('LeadershipandExecutivePresence')}>Leadership and Executive Presence</li>

                                                    <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }} onClick={() => scrollToSection('EmergingLeaderDevelopment')}>Emerging Leader Development</li>

                                                    <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }} onClick={() => scrollToSection('DevelopmentCenters')}>Development Centers</li>

                                                    <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }} onClick={() => scrollToSection('ExecutiveCoaching')}>Executive Coaching</li>

                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer style={{ backgroundColor: '#071630', color: '#fff', textAlign: 'center', height: '10vh' }}>
                                        </Card.Footer>
                                    </Card>
                                </motion.div>
                            )}
                        </InView>
                    </Col>

                    <Col md={5} className="mission-col">
                        <InView triggerOnce>
                            {({ inView, ref }) => (
                                <motion.div
                                    initial="hidden"
                                    animate={inView ? "show" : "hidden"}
                                    variants={reveal("up", 0)}
                                    ref={ref}
                                >
                                    <div>
                                        <h2 className="mission-heading">Unlocking Authentic Leadership</h2>
                                        <p className='mt-4' style={{ fontSize: "20px", textAlign: "justify" }}>
                                            This pillar focuses on understanding and embodying the principles that define authentic leaders.
                                        </p>
                                        <p className='mt-4' style={{ fontSize: "20px", textAlign: "justify" }}>
                                            There are various programs here covering each level of leadership. The programs are aimed at building self-awareness, fostering transparency, cultivating ethical behavior, and nurturing a genuine desire to build talents and team.
                                        </p>
                                    </div>

                                </motion.div>
                            )}
                        </InView>
                    </Col>
                </Row>

                <Row id="LeadershipandExecutivePresence">
                    <div className="mission-section py-5 text-center mt-3">
                        <h1 className='mission-heading'>Leadership and Executive Presence</h1>
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
                                            This program equips participants with essential skills to lead effectively in a disruptive business environment. It covers six key dimensions: leading oneself, teams, organizations, society, crisis management, and ESG challenges. Through interactive exercises and case studies, participants will develop ethical leadership, enhance communication, manage crises, and promote sustainable business practices.
                                        </p>
                                    </motion.div>
                                </Col>

                                <Col xs={12} md={6}>
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
                                            <li>Senior leadership</li>
                                            <li>Business heads</li>
                                            <li>Leaders transitioning as entrepreneurs</li>
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
                                            <li>Develop personal leadership models and executive presence</li>
                                            <li>Enhance communication strategies for various audiences</li>
                                            <li>Build and lead diverse, psychologically safe teams</li>
                                            <li>Apply strategic leadership through case studies</li>
                                            <li>Lead with integrity and purpose in a rapidly changing world</li>
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


                <Row id="EmergingLeaderDevelopment">
                    <div className="mission-section py-5 text-center mt-3">
                        <h1 className='mission-heading'>Emerging Leader Development</h1>
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
                                            This program aims to equip participants with the essential skills and knowledge necessary to transition from individual contributors to effective leaders. Through a combination of theoretical insights, practical exercises, and peer collaboration, attendees will cultivate the foundational competencies needed to excel in leadership roles and drive positive organizational change.
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
                                            <li>First time managers</li>
                                            <li>Individuals transitioning to leadership roles</li>
                                            <li>High-potential employees</li>
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
                                            <li>Understand leadership theories, styles, and best practices</li>
                                            <li>Develop problem-solving, decision-making, and conflict resolution abilities</li>
                                            <li>Enhance self-awareness and emotional intelligence</li>
                                            <li>Learn goal-setting, time management, and prioritization techniques</li>
                                            <li>Foster a culture of learning, innovation, and adaptability.</li>
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

                <Row id="DevelopmentCenters">
                    <div className="mission-section py-5 text-center mt-3">
                        <h1 className='mission-heading'>Developmental Centers</h1>
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
                                            This program aims to provide participants with a comprehensive developmental experience focused on enhancing their leadership capabilities and personal effectiveness. Through a series of assessments, feedback sessions, and targeted developmental activities, attendees will gain valuable insights into their strengths and areas for growth, enabling them to create actionable plans for continuous improvement.
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
                                            <li>High potential talents</li>
                                            <li>Individuals seeking leadership opportunities</li>
                                            <li>Junior to mid-level managers</li>
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
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Gain insights into strengths and areas for development</li>
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Enhance self-awareness and emotional intelligence to build more effective relationships and lead teams successfully.</li>
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Develop leadership competencies such as communication and decision-making</li>
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Create personalized development plans</li>
                                            <li style={{ marginLeft: "15px", textIndent: '-25px' }}>Acquire strategies for continuous growth</li>
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

                <Row id="ExecutiveCoaching">
                    <div className="mission-section py-5 text-center mt-3">
                        <h1 className='mission-heading'>Executive Coaching</h1>
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
                                            This program aims to provide personalized guidance and support to senior leaders in enhancing their leadership effectiveness, achieving professional goals, and driving organizational success. Through one-on-one coaching sessions, participants will receive tailored guidance, actionable insights, and accountability to unlock their full potential as strategic leaders.

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
                                            <li>Senior executives and C-suite leaders</li>
                                            <li>High-potential individuals </li>
                                            <li>Leaders navigating organizational changes or transitions</li>
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
                                            <li>Gain clarity on personal and professional goals</li>
                                            <li>Enhance leadership skills and capabilities</li>
                                            <li>Develop strategies for overcoming challenges and maximizing opportunities</li>
                                            <li>Improve decision-making and problem-solving abilities</li>
                                            <li>Enhance communication and interpersonal effectiveness</li>
                                            <li>Foster a culture of continuous improvement and learning</li>
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

            </Container>
            <FooterSection />

        </>
    );
};

export default UnlockingAuthenticLeadership;
