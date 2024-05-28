import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function PillarCard({ data }) {
    const removeSpaces = (str) => {
        return str.replace(/\s+/g, '');
    };

    return (
        <Container className="my-5">
            <Row className="justify-content-center g-5">
                {data.map((value, index) => (
                    <Col key={index} sm={12} md={6} lg={4} xl={4}>
                        <Link to={`/${removeSpaces(value.title)}`} className="pillar-link" style={{ textDecoration: 'none' }}>
                            <Card className='card allCards' style={{ textDecoration: "none", width: '20rem', height: "100vh", borderRadius: '35px' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15rem' }}>
                                    <Card.Img
                                        style={{ height: "auto", width: "auto", maxHeight: '100%', maxWidth: '100%' }}
                                        variant="top"
                                        src={value.image}
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title style={{ textAlign: 'center', color: "#ff5c4a" }}>{value.title}</Card.Title>
                                    <Card.Text>
                                        <ul style={{ color: '#013252' }} className="card-list">
                                            {value.content1 && <li>{value.content1}</li>}
                                            {value.content2 && <li>{value.content2}</li>}
                                            {value.content3 && <li>{value.content3}</li>}
                                            {value.content4 && <li>{value.content4}</li>}
                                            {value.content5 && <li>{value.content5}</li>}
                                        </ul>
                                    </Card.Text>
                                    <div
                                        className="card-color-area"
                                        style={{ backgroundColor: value.color }}
                                    ></div>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default PillarCard;
