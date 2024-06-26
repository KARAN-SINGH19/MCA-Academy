import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { motion } from 'framer-motion';

function BasicExample() {
    const location = useLocation();

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
                        <motion.div variants={linkVariants} initial="hidden" animate="show">
                            <RouterLink className="nav-link" to="/about">Our Faculty</RouterLink>
                        </motion.div>
                        {location.pathname === '/' && (
                            <>
                                <motion.div variants={linkVariants} initial="hidden" animate="show">
                                    <ScrollLink className="nav-link" to="missions" spy={true} smooth={true} offset={-100} duration={500}>
                                        Mission
                                    </ScrollLink>
                                </motion.div>
                                <motion.div variants={linkVariants} initial="hidden" animate="show">
                                    <ScrollLink className="nav-link" to="pillars" spy={true} smooth={true} offset={-100} duration={500}>
                                        Our Offerings
                                    </ScrollLink>
                                </motion.div>
                                <motion.div variants={linkVariants} initial="hidden" animate="show">
                                    <ScrollLink className="nav-link" to="partners" spy={true} smooth={true} offset={-100} duration={500}>
                                        Our Partners
                                    </ScrollLink>
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
