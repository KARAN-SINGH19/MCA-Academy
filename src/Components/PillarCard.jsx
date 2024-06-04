import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PillarCard = ({ data }) => {
    const handleLinkClick = (event) => {
        event.preventDefault();
        const clickedElement = event.target;
        const card = clickedElement.closest('.card'); 
        if (card) {
            const titleElement = card.querySelector('.cardTitle');
            if (titleElement) {
                const content = titleElement.innerText;
                const url = `/${content.replace(/\s+/g, '').replace(/[^\w\s]/gi, '')}`;
                window.location.href = url;
                window.scrollTo(0, 0);
            }
        }
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    {data.map((values, index) => (
                        <Col key={index} sm={12} md={6} lg={4} xl={4} className="mb-5 mt-3">
                            <motion.div
                                ref={ref}
                                className="box"
                                initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                                animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
                                transition={{ duration: 0.2, delay: index * 0.2 }}
                            >
                                <Link onClick={handleLinkClick} style={{ textDecoration: 'none' }}>
                                    <Card className="card pillarCard" style={{ width: '20rem', borderRadius: '15px', overflow: 'hidden', height: "80vh" }}>
                                        <Card.Img
                                            variant="top"
                                            style={{ width: "40%", height: "30%", margin: "auto", padding: "20px 0" }}
                                            src={values.image}
                                            className="custom-card-img"
                                        />
                                        <Card.Body>
                                            <Card.Title
                                                className="cardTitle"
                                                style={{ textAlign: "center", cursor: 'pointer' }}
                                            >
                                                {values.title}
                                            </Card.Title>
                                            <Card.Text>
                                                <ul className='card-list'>
                                                    {values.content1 && (
                                                        <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }}>{values.content1}</li>
                                                    )}
                                                    {values.content2 && (
                                                        <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }}>{values.content2}</li>
                                                    )}
                                                    {values.content3 && (
                                                        <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }}>{values.content3}</li>
                                                    )}
                                                    {values.content4 && (
                                                        <li style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-25px' }}>{values.content4}</li>
                                                    )}
                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer style={{ backgroundColor: values.color, color: '#fff', textAlign: 'center', height: '10vh' }}>
                                        </Card.Footer>
                                    </Card>
                                </Link>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default PillarCard;
