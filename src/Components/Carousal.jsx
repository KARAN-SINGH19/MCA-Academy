import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { motion } from 'framer-motion';
const Carousal = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        console.log("Active Index Changed:", activeIndex);
    }, [activeIndex]);
    const handleSelect = (selectedIndex, e) => {
        console.log("Selected Index:", selectedIndex);
        setActiveIndex(selectedIndex);
    };
    const linkVariants = {
        hidden: { y: 100, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.9 } },
    };

    return (
        <Carousel fade controls={false} indicators={false} activeIndex={activeIndex} onSelect={handleSelect}>
            <Carousel.Item style={{ height: '550px' }} interval={2000}>
                <img
                    className="d-block w-100"
                    src="/images/job-5382501_1280.jpg"
                    alt="Placeholder slide"
                    style={{ objectFit: 'cover', height: '100%' }}
                />
                <Carousel.Caption style={{ marginBottom: '200px', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                    <motion.h1 style={{ color: 'white', textAlign: "left" }} variants={linkVariants} initial="hidden" animate={activeIndex === 0 ? "show" : "hidden"} >MCA's Academy ME</motion.h1>
                    <motion.h4 style={{ color: "white", textAlign: "left" }} variants={linkVariants} initial="hidden" animate={activeIndex === 0 ? "show" : "hidden"} >We create custom solutions to empower teams through <br />  skill enhancement, critical knowledge transfer <br />  and re-skilling interventions.</motion.h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '550px' }} interval={2000}>
                <img
                    className="d-block w-100"
                    src="/images/laptops-593296_1280.jpg"
                    alt="Placeholder slide"
                    style={{ objectFit: 'cover', height: '100%' }}
                />
                <Carousel.Caption style={{ marginBottom: '200px', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                    <motion.h1 style={{ color: 'white', textAlign: "left" }} variants={linkVariants} initial="hidden" animate={activeIndex === 1 ? "show" : "hidden"} >Unlock People Potential.</motion.h1>
                    <motion.h4 style={{ color: "white", textAlign: "left" }} variants={linkVariants} initial="hidden" animate={activeIndex === 1 ? "show" : "hidden"} >We create custom solutions to empower teams through <br />  skill enhancement, critical knowledge transfer <br />  and re-skilling interventions.</motion.h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '550px' }} interval={2000}>
                <img
                    className="d-block w-100"
                    src="/images/man-597178_1280.jpg"
                    alt="Placeholder slide"
                    style={{ objectFit: 'cover', height: '100%' }}
                />
                <Carousel.Caption style={{ marginBottom: '200px', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                    <motion.h1 style={{ color: 'white', textAlign: "left" }} variants={linkVariants} initial="hidden" animate={activeIndex === 2 ? "show" : "hidden"} >Take Your Business To The Next Level.</motion.h1>
                    <motion.h4 style={{ color: "white", textAlign: "left" }} variants={linkVariants} initial="hidden" animate={activeIndex === 2 ? "show" : "hidden"} >We create custom solutions to empower teams through <br />  skill enhancement, critical knowledge transfer <br />  and re-skilling interventions.</motion.h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default Carousal;