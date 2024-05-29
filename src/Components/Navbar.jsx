import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation()

    const linkVariants = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.9 } },
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container py-2">
                    <span className="navbar-brand-inner">
                        <img className="logo-default" src="/images/Picture1.png" alt="MCA UAE" style={{ maxWidth: '230px', maxHeight: '100px' }} />
                    </span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse align-middle" id="navbarNav">
                        <ul className="navbar-nav ms-auto nav_ul align-items-center">
                            <motion.li variants={linkVariants} initial="hidden" animate="show" className="nav-item">
                                <RouterLink className="nav-link" to="/">Home</RouterLink>
                            </motion.li>
                            <motion.li variants={linkVariants} initial="hidden" animate="show" className="nav-item">
                                <RouterLink className="nav-link" to="/about">About</RouterLink>
                            </motion.li>
                            {
                                location.pathname == '/' && (
                                    <>
                                        <motion.li variants={linkVariants} initial="hidden" animate="show" className="nav-item">
                                            <ScrollLink style={{ cursor: "pointer" }} className="nav-link" to="missions" spy={true} smooth={true} offset={-100} duration={50}>Missions</ScrollLink>
                                        </motion.li>
                                        <motion.li variants={linkVariants} initial="hidden" animate="show" className="nav-item">
                                            <ScrollLink style={{ cursor: "pointer" }} className="nav-link" to="pillars" spy={true} smooth={true} offset={-100} duration={50}>Pillars</ScrollLink>
                                        </motion.li>
                                        <motion.li variants={linkVariants} initial="hidden" animate="show" className="nav-item">
                                            <ScrollLink style={{ cursor: "pointer" }} className="nav-link" to="contact" spy={true} smooth={true} offset={-100} duration={50}>Contact Us</ScrollLink>
                                        </motion.li>
                                    </>
                                )
                            }
                            {/* <motion.div variants={linkVariants} initial="hidden" animate="show" className="mx-3">
                                <button type="button" className="btn1 mx-2">Login</button>
                                <button type="button" className="btn2 mx-2">Sign Up</button>
                            </motion.div> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
