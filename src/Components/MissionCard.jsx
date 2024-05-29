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
          <Col key={index} sm={12} md={6} lg={4} xl={4}>
            <Card className="h-100 allCards" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: 'none', borderRadius: '10px' }}>
              <div className="image-container">
                <Card.Img variant="top" src={values.image} style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                <div className="overlay"></div> {/* Overlay div */}
              </div>
              <Card.Body style={{ backgroundColor: 'white' }}>
                <Card.Title style={{ color: "#ff5c4a", fontWeight: "700" }} className="text-center">{values.title}</Card.Title>
                <Card.Text style={{ color: "#013252", fontWeight: "645" }} className="text-center">
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
