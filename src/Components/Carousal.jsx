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
        <Carousel fade activeIndex={activeIndex} onSelect={handleSelect}>
            <Carousel.Item style={{ height: '600px' }} interval={4000}>
                <img
                    className="d-block w-100"
                    src="/images/bulb.jpg"
                    alt="Placeholder slide"
                    style={{ objectFit: 'cover', height: '100%', filter: 'blur(8px)' }}
                />
                <Carousel.Caption style={{
                    marginBottom: '110px',
                    color: 'white',
                    textShadow: '3px 3px 4px rgba(0, 0, 0, 0.9)',
                    marginRight: "80px",
                    marginLeft: "-30px",
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    padding: '20px',
                    borderRadius: '10px'
                }}>
                    <motion.h4 style={{
                        marginTop: '20px',
                        color: "white",
                        textAlign: "left",
                        fontSize: "45px",
                        marginLeft: "0",
                        textShadow: '4px 3px 4px rgba(0, 0, 0, 0.9)'
                    }} variants={linkVariants} initial="hidden" animate={activeIndex === 0 ? "show" : "hidden"}>
                        ENABLE - individuals to thrive <br />amidst today's challenges and <br />seize tomorrow's opportunities <br />in a dynamic, diverse economy.
                    </motion.h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '600px' }} interval={4000}>
                <img
                    className="d-block w-100"
                    src="/images/bulb2.jpg"
                    alt="Placeholder slide"
                    style={{ objectFit: 'cover', height: '100%', filter: 'blur(8px)' }}
                />
                <Carousel.Caption style={{
                    marginBottom: '190px',
                    color: 'white',
                    textShadow: '3px 3px 4px rgba(0, 0, 0, 0.9)',
                    marginRight: "20px",
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    padding: '20px',
                    borderRadius: '10px'
                }}>
                    <motion.h4 style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: "45px",
                        marginLeft: "-50px",
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }} variants={linkVariants} initial="hidden" animate={activeIndex === 1 ? "show" : "hidden"}>
                        EMPOWER - and nurture local talent <br /> in the GCC Region.
                    </motion.h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '600px' }} interval={4000}>
                <img
                    className="d-block w-100"
                    src="/images/bulb3.jpg"
                    alt="Placeholder slide"
                    style={{ objectFit: 'cover', height: '100%', filter: 'blur(8px)' }}
                />
                <Carousel.Caption style={{
                    marginBottom: '150px',
                    color: 'white',
                    textShadow: '3px 3px 4px rgba(0, 0, 0, 0.9)',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    padding: '20px',
                    borderRadius: '10px'
                }}>
                    <motion.h4 style={{
                        color: "white",
                        textAlign: "right",
                        fontSize: "45px",
                        marginRight: "20px",
                        marginLeft: "-50px",
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }} variants={linkVariants} initial="hidden" animate={activeIndex === 2 ? "show" : "hidden"}>
                        ELEVATE - expertise and insights <br /> within  functional domains to <br /> drive business ambitions.
                    </motion.h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousal;
    