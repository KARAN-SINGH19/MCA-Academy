import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { motion } from 'framer-motion';

function BasicExample() {
    const location = useLocation();

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const linkVariants = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.9 } },
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <RouterLink to="/" className="navbar-brand">
                    <img
                        src="/images/Picture1.png"
                        alt="MCA UAE"
                        style={{ maxWidth: '230px', maxHeight: '100px' }}
                    />
                </RouterLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav_ul align-items-center">
                        <motion.div variants={linkVariants} initial="hidden" animate="show">
                            <RouterLink className="nav-link" to="/">Home</RouterLink>
                        </motion.div>

                        {location.pathname === '/' && (
                            <>
                                <motion.div variants={linkVariants} initial="hidden" animate="show">
                                    <RouterLink onClick={() => scrollToSection('missions')} className="nav-link" >Missions</RouterLink>
                                </motion.div>
                                <motion.div variants={linkVariants} initial="hidden" animate="show">
                                    <RouterLink onClick={() => scrollToSection('pillars')} className="nav-link" >Our Offerings</RouterLink>
                                </motion.div>
                                <motion.div variants={linkVariants} initial="hidden" animate="show">
                                    <RouterLink className="nav-link" to="/about">Our Faculty</RouterLink>
                                </motion.div>
                                <motion.div variants={linkVariants} initial="hidden" animate="show">
                                    <RouterLink
                                        className="nav-link"
                                        onClick={() => scrollToSection('partners')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Our Partners
                                    </RouterLink >
                                </motion.div>
                            </>
                        )}
                        <motion.div variants={linkVariants} initial="hidden" animate="show">
                            <RouterLink className="nav-link" to="/ContactUs">Contact Us</RouterLink>
                        </motion.div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
