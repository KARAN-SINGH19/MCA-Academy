import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const MissionCard = ({ data }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        {data.map((values, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={4} className="mb-4">
            <Card className="h-100 allCards" style={{ cursor: "default", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: 'none', borderRadius: '10px', margin: '10px' }}>
              <div className="card-image">
                <Card.Img variant="top" src={values.image} className='missionCardImg' />
              </div>
              <Card.Body style={{ backgroundColor: 'white' }}>
                <Card.Title style={{ color: "#CE0932", fontWeight: "700" }} className="text-center">{values.title}</Card.Title>
                <Card.Text style={{ color: "#212529", fontWeight: "645" }} className="text-center">
                  {values.content}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MissionCard;
