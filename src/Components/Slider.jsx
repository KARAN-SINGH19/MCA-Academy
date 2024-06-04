import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Slider = ({ deviceType, data }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const handleLinkClick = (event) => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        window.location.href = href;
        window.scrollTo(0, 0);
    };

    return (
        <div className="slider-container">
            <Carousel
                swipeable
                draggable
                showDots
                responsive={responsive}
                ssr
                infinite
                keyBoardControl
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {data.map((academyItem, index) => (
                    <div key={index} className="carousel-item-wrapper">
                        <Card className="academy-card flex-row">
                            <div className="image-overlay"></div>
                            <Card.Img variant="left" src={academyItem.image} style={{ width: "40%" }} className="card-image-horizontal" />
                            <Card.Body className="card-body-horizontal">
                                <Card.Title style={{ textAlign: "center", color: "#CE0932",fontSize:"29px" }} className="card-title">{academyItem.name}</Card.Title>
                                <Card.Text style={{ textAlign: "center", color: '#666666', fontSize: "22px" }} className="card-text">
                                    Learn more about {academyItem.name} and enhance your skills with our specialized programs.
                                </Card.Text>
                                <Link to={`/${academyItem.name.replace(/\s+/g, '')}`} onClick={handleLinkClick}>
                                    <button type="button" className="learnMore mx-2">Learn More</button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
