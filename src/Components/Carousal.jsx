import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carousal = () => {
    return (
        <Carousel fade controls={false} indicators={false}>
            <Carousel.Item style={{ height: '550px' }} interval={2000}>
                <img
                    className="d-block w-100"
                    src="/images/job-5382501_1280.jpg"
                    alt="Placeholder slide"
                    style={{ objectFit: 'cover', height: '100%' }}
                />
                <Carousel.Caption style={{ marginBottom: '200px', color: 'white' }}>
                    <h1 style={{ color: 'white', textAlign: "left" }}>MCA's Academy ME</h1>
                    <h4 style={{ color: "white", textAlign: "left" }}>We create custom solutions to empower teams through <br />  skill enhancement, critical knowledge transfer <br />  and re-skilling interventions.</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '550px' }} interval={2000}>
                <img
                    className="d-block w-100"
                    src="/images/laptops-593296_1280.jpg"
                    alt="Placeholder slide"
                    style={{ objectFit: 'cover', height: '100%' }}
                />
                <Carousel.Caption style={{ marginBottom: '200px', color: 'white' }}>
                    <h1 style={{ color: 'white', textAlign: "left" }}>Unlock People Potential.</h1>
                    <h4 style={{ color: "white", textAlign: "left" }}>We create custom solutions to empower teams through <br />  skill enhancement, critical knowledge transfer <br />  and re-skilling interventions.</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '550px' }} interval={2000}>
                <img
                    className="d-block w-100"
                    src="/images/man-597178_1280.jpg"
                    alt="Placeholder slide"
                    style={{ objectFit: 'cover', height: '100%' }}
                />
                <Carousel.Caption style={{ marginBottom: '200px', color: 'white' }}>
                    <h1 style={{ color: 'white', textAlign: "left" }}>Take Your Business To The Next Level.</h1>
                    <h4 style={{ color: "white", textAlign: "left" }}>We create custom solutions to empower teams through <br />  skill enhancement, critical knowledge transfer <br />  and re-skilling interventions.</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousal;
