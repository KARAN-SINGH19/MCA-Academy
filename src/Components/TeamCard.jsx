import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TeamCard = ({ data }) => {
    return (
        <>
            <Container>
                <Row className="justify-content-center mt-3">
                    {
                        data.map((values, index) => (
                            <Col key={index} sm={12} md={6} lg={4} xl={4} className="mb-4 d-flex">
                                <Card className="h-100 w-100 team-card" style={{ borderRadius: "10px" }}>
                                    <Card.Img variant="top" src={values.image} className="team-card-img" />
                                    <Card.Body className="team-card-body">
                                        <Card.Title style={{ color: "#ff5c4a" }} className="text-center team-card-title">{values.name}</Card.Title>
                                        <Card.Text>
                                            <ul className="card-list">
                                                {values.desc && <li>{values.desc}</li>}
                                                {values.desc2 && <li>{values.desc2}</li>}
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default TeamCard;
