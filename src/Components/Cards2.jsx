import React, { useRef, useEffect } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import Card from 'react-bootstrap/Card';

function Cards2({ data }) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const totalWidth = (data.length * 360) + ((data.length - 1) * 6);
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${totalWidth}px`]);

    const translateY0 = useTransform(scrollYProgress, [0, 1], ["60px", "90px"]);
    const translateY1 = useTransform(scrollYProgress, [0, 1], ["20px", "50px"]);
    const translateY2 = useTransform(scrollYProgress, [0, 1], ["70px", "90px"]);
    const translateY3 = useTransform(scrollYProgress, [0, 1], ["20px", "50px"]);
    const translateY4 = useTransform(scrollYProgress, [0, 1], ["60px", "90px"]);

    const translateYValues = [translateY0, translateY1, translateY2, translateY3, translateY4];

    useEffect(() => {
        translateYValues.forEach((translateY, index) =>
            translateY.onChange(value => console.log(`Card ${index} TranslateY:`, value))
        );
    }, [translateYValues]);

    return (
        <section ref={targetRef} className="scroll-section">
            <div className="scroll-container">
                <motion.div style={{ x }} className="scroll-content">
                    <div className="heading-container">
                        <h2 className="heading-text">
                            <span className="main-word">Pillars</span> <br />
                            <span className="sub-word">of MCA Academy</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-chevron-right"
                                style={{ marginTop: '5px', animation: 'bounce 1s infinite' }}
                            >
                                <polyline points="9 6 15 12 9 18"></polyline>
                            </svg>
                        </h2>
                    </div>
                    {data.map((value, index) => (
                        <motion.div key={index} className="scroll-card" style={{ y: translateYValues[index] }}>
                            <Card className="h-100 border-0 shadow" style={{ borderRadius: "40px" }} whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.9)' }}>
                                <div className="img-container">
                                    <Card.Img src={value.image} className="card-img" />
                                </div>
                                <Card.Body className="text-center">
                                    <Card.Title style={{ color: "#ff5c4a" }} className="card-title">{value.title}</Card.Title>
                                    <Card.Text>
                                        <ul className="card-list">
                                            {value.content1 && <li>{value.content1}</li>}
                                            {value.content2 && <li>{value.content2}</li>}
                                            {value.content3 && <li>{value.content3}</li>}
                                            {value.content4 && <li>{value.content4}</li>}
                                            {value.content5 && <li>{value.content5}</li>}
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Cards2;
