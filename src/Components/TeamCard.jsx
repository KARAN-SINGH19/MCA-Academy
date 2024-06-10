import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TeamCard = ({ data }) => {
    return (
        <Container>
            <Row className="justify-content-center mt-3">
                {
                    data.map((values, index) => (
                        <Col key={index} sm={12} md={6} lg={4} xl={4} className="mb-4 d-flex">
                            <Card className="h-100 w-100 team-card allCards" style={{ borderRadius: "10px" }}>
                                <Card.Img variant="top" src={values.image} className="team-card-img" />
                                <Card.Body className="team-card-body d-flex flex-column" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Card.Title style={{ color: "#ff5c4a", textAlign: 'center' }}>{values.name}</Card.Title>
                                    <Card.Text>
                                        <ul style={{ marginLeft: "15px", textIndent: '-25px' }} className="card-list3">
                                            {values.desc && <li>{values.desc}</li>}
                                            {values.desc2 && <li>{values.desc2}</li>}
                                        </ul>
                                    </Card.Text>
                                    <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                                        <a href={values.link} target='_blank' className='me-4 text-reset' style={{ fontSize: "30px" }}>
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default TeamCard;
