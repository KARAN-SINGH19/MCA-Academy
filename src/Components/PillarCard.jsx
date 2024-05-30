import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PillarCardItem = ({ pillar, index, handleLinkClick }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Col md={4} className="mb-4 mt-4">
            <motion.div
                ref={ref}
                className="box"
                initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
                transition={{ duration: 0.2, delay: index * 0.2 }}
            >
                <div className="image-container">
                    <img alt="" src={pillar.image} className="img-fluid" />
                    <h4 className="image-title">{pillar.title}</h4>
                </div>
                <div className="overlay">
                    <ul className='card-list2'>
                        <li>{pillar.content1}</li>
                        {pillar.content2 && <li>{pillar.content2}</li>}
                        {pillar.content3 && <li>{pillar.content3}</li>}
                        {pillar.content4 && <li>{pillar.content4}</li>}
                        {pillar.content5 && <li>{pillar.content5}</li>}
                    </ul>
                    <Link to={`/${pillar.title.replace(/\s+/g, '')}`} onClick={handleLinkClick}>
                        <button className="learnMore2 mx-2">Learn More</button>
                    </Link>
                </div>
            </motion.div>
        </Col>

    );
};

const PillarCard = ({ data }) => {
    const handleLinkClick = (event) => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        window.location.href = href;
        window.scrollTo(0, 0);
    };

    return (
        <div id="card-area">
            <Container>
                <Row className="justify-content-center">
                    {data.map((pillar, index) => (
                        <PillarCardItem
                            key={index}
                            pillar={pillar}
                            index={index}
                            handleLinkClick={handleLinkClick}
                        />
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default PillarCard;
