import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from 'react-bootstrap/Button';

const PillarCard = ({ data }) => {

    const handleLinkClick2 = (event) => {
        event.preventDefault();
        const content = event.target.innerText;
        const url = `/${content.replace(/\s+/g, '').replace(/[^\w\s]/gi, '')}`;
        window.location.href = url;
        window.scrollTo(0, 0);
    };

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

    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    {data.map((values, index) => (
                        <Col key={index} sm={12} md={6} lg={4} xl={4} className="mb-5 mt-3 d-flex justify-content-center">
                            <motion.div
                                className="box"
                                initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                                transition={{ duration: 0.2, delay: index * 0.2 }}
                            >
                                <InViewWrapper>
                                    <Card className="card pillarCard center-card" style={{ width: '20rem', borderRadius: '15px', overflow: 'hidden', height: "80vh" }}>
                                        <Card.Img
                                            variant="top"
                                            style={{ width: "40%", height: "30%", margin: "auto", padding: "20px 0" }}
                                            src={values.image}
                                            className="custom-card-img"
                                        />
                                        <Card.Body className="d-flex flex-column justify-content-between">
                                            <div>
                                                <Card.Title
                                                    className="cardTitle"
                                                    style={{ textAlign: "center", cursor: 'pointer', color: "#CE0932" }}
                                                    onClick={handleLinkClick}
                                                >
                                                    {values.title}
                                                </Card.Title>
                                                <Card.Text>
                                                    <ul className='card-list'>
                                                        {values.content1 && (
                                                            <li onClick={handleLinkClick2} style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-26px' }}>{values.content1}</li>
                                                        )}
                                                        {values.content2 && (
                                                            <li onClick={handleLinkClick2} style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-26px' }}>{values.content2}</li>
                                                        )}
                                                        {values.content3 && (
                                                            <li onClick={handleLinkClick2} style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-26px' }}>{values.content3}</li>
                                                        )}
                                                        {values.content4 && (
                                                            <li onClick={handleLinkClick2} style={{ cursor: "pointer", marginLeft: "15px", textIndent: '-26px' }}>{values.content4}</li>
                                                        )}
                                                    </ul>
                                                </Card.Text>
                                            </div>
                                            <Button onClick={handleLinkClick} style={{ backgroundColor: values.color, border: "none" }} className="mt-auto align-self-center">Learn More</Button>
                                        </Card.Body>
                                        <Card.Footer style={{ backgroundColor: values.color, color: '#fff', textAlign: 'center', height: '7vh' }}>
                                        </Card.Footer>
                                    </Card>
                                </InViewWrapper>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

const InViewWrapper = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return <motion.div ref={ref}>{inView && children}</motion.div>;
};

export default PillarCard;
