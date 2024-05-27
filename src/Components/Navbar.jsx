import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
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
                                <Link className="nav-link" to="/about">About</Link>
                            </motion.li>
                            <motion.li variants={linkVariants} initial="hidden" animate="show" className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </motion.li>
                            <motion.li variants={linkVariants} initial="hidden" animate="show" className="nav-item">
                                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                            </motion.li>
                            <motion.li variants={linkVariants} initial="hidden" animate="show" className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </motion.li>
                            <motion.li variants={linkVariants} initial="hidden" animate="show" className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </motion.li>
                            <motion.div variants={linkVariants} initial="hidden" animate="show" className="mx-3">
                                <button type="button" className="btn1 mx-2">Login</button>
                                <button type="button" className="btn2 mx-2">Sign Up</button>
                            </motion.div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
