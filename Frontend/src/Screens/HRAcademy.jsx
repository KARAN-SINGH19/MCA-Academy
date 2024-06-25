import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';
import reveal from '../Animations/Variants';
import { useInView, InView } from 'react-intersection-observer';
import HR from '../Api/HRAcademy';

const HRAcademy = () => {

    const scrollToSection = (sectionId) => {
        console.log("Scrolling to section:", sectionId);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
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

    const slideInFromLeft = {
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const slideInFromRight = {
        hidden: { opacity: 0, x: 100 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const circles = HR.map((_, i) => {
        let x, y;
        if (i === 0) {
            x = 50;
            y = -45;
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

                    <Col xs={6} md={6} className="d-flex justify-content-center">
                        <AnimatedColumn delay={0.3} direction="right">
                            <div className="py-5 text-center position-relative circle-container">
                                <div
                                    className="central-circle"
                                    style={{
                                        position: 'absolute',
                                        top: '55%',
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
                                        <div
                                            key={index}
                                            className='surrounding-circle'
                                            style={{
                                                top: `${circles[index].y}%`,
                                                left: `${circles[index].x}%`,
                                                transform: 'translate(-50%, -50%)',
                                                textAlign: 'center',
                                                padding: '5px',
                                                fontSize: '0.85rem',
                                                textDecoration: 'none',
                                                cursor: "pointer"
                                            }}
                                            onClick={() => {
                                                console.log("Circle clicked:", program);
                                                scrollToSection(program.toLowerCase().replace(/\s+/g, '-'));
                                            }}
                                        >
                                            {program}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedColumn>
                    </Col>

                    <Col xs={12} md={6}>
                        <motion.div initial="hidden" animate="show" variants={reveal("right", 0.3)}>
                            <div className="py-5">
                                <h2 className="text-left mb-4 mission-heading" style={{ color: "#CE0932", fontWeight: 700 }}>HR Program</h2>
                                <p style={{ color: "#212529", fontWeight: 600, textAlign: "justify" }} className="text-justify">
                                    HR Program offers a range of programs designed to enhance HR professionals' skills and drive organizational success. Our programs focus on strategic partnership development, data-driven decision-making, and grooming future HR leaders.
                                </p>
                            </div>
                        </motion.div>
                    </Col>
                </Row>


                <Row id='hr-business-partnering-development-program' className='mt-5'>
                    <div className="mission-section py-5 text-center">
                        <h1 className='mission-heading'>HR Business Partnering Development Program</h1>
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
                                            This program aims to equip HR professionals with the skills and knowledge necessary to become strategic business partners within their organizations. The program focuses on developing strategic thinking, enhancing business acumen, and fostering strong partnerships between HR and other business units to drive organizational success.
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
                                            <li>HR professionals moving to strategic roles</li>
                                            <li>HR professionals moving to strategic roles</li>
                                            <li>Business leaders enhancing HR functions</li>
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
                                        <h4 className='mission-heading2'>Learning Outcome</h4>
                                        <ul className='card-list'>
                                            <li>Develop strategic thinking skills to align HR initiatives with business goals</li>
                                            <li>Enhance business acumen to better understand and contribute to organizational strategy</li>
                                            <li>Build strong partnerships with business leaders to drive performance and growth</li>
                                            <li>Gain expertise in data-driven decision-making and HR analytics</li>
                                            <li>Implement best practices in change management and organizational development</li>
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

                <Row id='hr-analytics-for-data-driven-decision-making' className='mt-4'>
                    <div className="mission-section py-5 text-center">
                        <h1 className='mission-heading'>HR Analytics for Data-driven Decision Making</h1>
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
                                            This program aims to equip HR professionals with the skills and knowledge to leverage data analytics for informed decision-making. Through this program, participants will learn how to analyze HR data, interpret key metrics, and apply insights to optimize HR strategies and drive organizational success.
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
                                            <li>HR Professionals seeking to enhance their analytical skills</li>
                                            <li>Mid to senior HR managers</li>
                                            <li>Business leaders seeking to leverage HR analytics</li>
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
                                        <h4 className='mission-heading2'>Learning Outcome</h4>
                                        <ul className='card-list'>
                                            <li>Understand the fundamentals of HR analytics and its importance in decision-making.</li>
                                            <li>Develop skills in data collection, analysis, and interpretation</li>
                                            <li>Gain proficiency in using HR analytics tools and software</li>
                                            <li>Apply data-driven insights to improve HR practices and processes</li>
                                            <li>Create actionable HR reports and dashboards to support strategic decision-making</li>
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


                <Row id='young-hr-professional-excellence-program' className='mt-4'>
                    <div className="mission-section py-5 text-center">
                        <h1 className='mission-heading'>Young HR Professional Excellence Program</h1>
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
                                            This program aims to equip emerging HR professionals with foundational skills and knowledge to excel in their careers. The program focuses on developing core HR competencies, understanding HR best practices, and building effective communication and interpersonal skills to drive organizational success.
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
                                            <li>Entry-level HR professionals</li>
                                            <li>Recent graduates seeking a strong foundation in HR</li>
                                            <li>Individuals transitioning into HR roles from other fields</li>
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
                                        <h4 className='mission-heading2'>Learning Outcome</h4>
                                        <ul className='card-list'>
                                            <li>Understand core HR functions and best practices</li>
                                            <li>Develop effective communication and interpersonal skills</li>
                                            <li>Gain knowledge of recruitment, onboarding, and talent management</li>
                                            <li>Learn the basics of employee relations and performance management</li>
                                            <li>Apply foundational HR principles to real-world scenarios</li>
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
    );
};

export default HRAcademy;
