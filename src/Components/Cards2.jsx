import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cards2({ data }) {
    return (
        <Container className="my-5">
            <Row className="justify-content-center g-5">

                {data.map((value, index) => (
                    <Col key={index} sm={12} md={6} lg={4} xl={4}>
                        <div className="group relative cursor-pointer">
                            <Card className="h-100 shadow-sm border-0">
                                <div className="h-96 w-full">
                                    <Card.Img 
                                        className='card-img object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' 
                                        variant="top" 
                                        src={value.image} 
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b"></div>
                                <Card.Body className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <Card.Text className="mb-3 text-lg italic">
                                        <ul className="card-list">
                                            {value.content1 && <li>{value.content1}</li>}
                                            {value.content2 && <li>{value.content2}</li>}
                                            {value.content3 && <li>{value.content3}</li>}
                                            {value.content4 && <li>{value.content4}</li>}
                                            {value.content5 && <li>{value.content5}</li>}
                                        </ul>
                                    </Card.Text>
                                    <Card.Title className="font-dmserif text-3xl font-bold text-white">{value.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Cards2;
