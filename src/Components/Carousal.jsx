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
        show: { y: 0, opacity: 1, transition: { duration: 1 } },
    };

    return (
        <Carousel fade  activeIndex={activeIndex} onSelect={handleSelect}>
            <Carousel.Item style={{ height: '550px' }} interval={2000}>
                <img
                    className="d-block w-100"
                    src="/images/bulb.jpg"
                    alt="Placeholder slide"
                    style={{ objectFit: 'cover', height: '100%' }}
                />
                <Carousel.Caption style={{ marginBottom: '110px', color: 'white', textShadow: '3px 3px 4px rgba(0, 0, 0, 0.9)', marginRight: "80px" }}>
                    <motion.h4 style={{ marginTop: '20px', color: "white", textAlign: "left", fontSize: "40px", marginLeft: "-50px" }} variants={linkVariants} initial="hidden" animate={activeIndex === 0 ? "show" : "hidden"} >Enable individuals to thrive <br/>amidst today's challenges and <br/>seize tomorrow's opportunities <br/>in a dynamic, diverse economy.</motion.h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '550px' }} interval={2000}>
                <img
                    className="d-block w-100"
                    src="/images/bulb2.jpg"
                    alt="Placeholder slide"
                    style={{ objectFit: 'cover', height: '100%' }}
                />
                <Carousel.Caption style={{ marginBottom: '190px', color: 'white', textShadow: '3px 3px 4px rgba(0, 0, 0, 0.9)', marginRight: "20px" }}>
                    <motion.h4 style={{ color: "white", textAlign: "left", fontSize: "40px", marginLeft: "-50px" }} variants={linkVariants} initial="hidden" animate={activeIndex === 1 ? "show" : "hidden"} >Empower and nurture local talent <br/> in the GCC Region.</motion.h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '550px' }} interval={2000}>
                <img
                    className="d-block w-100"
                    src="/images/bulb3.jpg"
                    alt="Placeholder slide"
                    style={{ objectFit: 'cover', height: '100%' }}
                />
                <Carousel.Caption style={{ marginBottom: '150px', color: 'white', textShadow: '3px 3px 4px rgba(0, 0, 0, 0.9)' }}>
                    <motion.h4 style={{ color: "white", textAlign: "left", fontSize: "40px", marginRight: "20px", marginLeft: "-50px" }} variants={linkVariants} initial="hidden" animate={activeIndex === 2 ? "show" : "hidden"} >Elevate expertise and insights <br/> within  functional domains to <br/> drive business ambitions.</motion.h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default Carousal;