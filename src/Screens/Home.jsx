import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Components/Navbar';
import Carousal from '../Components/Carousal';
import MissionCard from '../Components/MissionCard';
import PillarCard from '../Components/PillarCard';
import Footer from '../Components/Footer';
import missions from '../Api/Missions';
import pillars from '../Api/Pillars';
import { motion } from 'framer-motion';
import reveal from '../Animations/Variants';
import { useInView } from 'react-intersection-observer';
import Slider from '../Components/Slider';
import academy from '../Api/Academy';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  const counterRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const countElement = target.querySelector('.count');
          const speed = 300;
          const targetVal = parseInt(countElement.dataset.target);
          let initialVal = 0;
          const increment = Math.trunc(targetVal / speed);

          const updateCount = () => {
            if (initialVal < targetVal) {
              initialVal += increment;
              countElement.innerText = `${initialVal}+`;
              setTimeout(updateCount, 10);
            } else {
              countElement.innerText = `${targetVal}+`;
            }
          };
          updateCount();
          observer.unobserve(target);
        }
      });
    });

    counterRefs.current.forEach(ref => {
      observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);


  function MissionSection({ children }) {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0,
    });

    return (
      <motion.div
        ref={ref}
        variants={reveal("left", 0.2)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mission-section py-5 text-center"
      >
        <h2 className="mission-heading">Our Mission</h2>
        <p className="mx-auto" style={{ maxWidth: '600px', fontSize: "23PX" }}>
          We develop leadership and functional skills across the GCC, empowering individuals and organizations with high-quality training to drive regional growth.
        </p>
        <MissionCard data={missions} />
      </motion.div>
    );
  }

  function SliderSection({ children }) {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0,
    });

    return (
      <motion.div
        ref={ref}
        variants={reveal("up", 0.2)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mission-section py-5 text-center bg-light"
      >
        <h2 className="mission-heading">Functional Academies</h2>
        <Slider data={academy} />
      </motion.div>
    );
  }

  const circles = [...Array(5)].map((_, i) => {
    const angle = (i / 5) * 2 * Math.PI;
    const radius = 120;
    const x = 50 + (radius * Math.cos(angle)) / 70 * 50;
    const y = 50 + (radius * Math.sin(angle)) / 70 * 50;
    return { x, y };
  });



  const RedBarSection = () => {
    const handleClickMore = () => {
      console.log("Clicked on Click More");
      // Add your logic here
    };

    return (
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginInlineStart: 0, width: '100%' }}>
        <Row>
          <Col>
            <div className="image-container2">
           
              
                <div className="box2" style={{ marginTop: "50px" }}>
                  <h2 style={{ color: 'white', marginTop: '25px' }}>Our Objective</h2>
                  <p style={{ color: 'white', padding: '20px', fontSize: '20px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ratione, dolores necessitatibus atque eum consequuntur voluptate quia architecto et, beatae dolorum sed dolor voluptas laborum quasi repellendus accusantium nobis praesentium?
                  </p>
                </div>
                <div className="py-5 text-center position-relative circle-container" style={{ marginTop: "180px" }}>

                <div className="central-circle2" onClick={handleClickMore} style={{ zIndex: 1 }}>
                    Click More <br />
                  </div>
                  <div className="arrow-container">
                    <div className="arrow-bounce">
                      <div role="img" aria-label="down-arrow" style={{ animation: 'bounce 1s infinite' }}>👇</div>
                    </div>
                  </div>
                  <div className="surrounding-circles">
                    {/* Assume circles and pillars are defined elsewhere */}
                    {circles.map((circle, i) => (
                      <div
                        key={i}
                        className='surrounding-circle'
                        style={{
                          top: `${circle.y}%`,
                          left: `${circle.x}%`,
                          transform: 'translate(-50%, -50%)',
                          textAlign: 'center',
                          padding: '5px',
                          fontSize: '0.85rem',
                          textDecoration: 'none',
                          transition: 'transform 0.3s ease',
                          cursor: "pointer"
                        }}
                      >
                        {pillars[i % pillars.length].title}
                      </div>
                    ))}
                  </div>
                </div>
            
            </div>
          </Col>
        </Row>
      </Container>
    );
  }


  const PillarSection = () => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0,
    });


    return (
      <Container fluid style={{ width: "100%" }}>
        <Row>
          <Col>
            <div className="mission-section py-5 text-center bg-light" ref={ref}>
              <h2 className="mission-heading">Academy Verticals</h2>
              <RedBarSection />
              <PillarCard data={pillars} />
            </div>
          </Col>
        </Row>

      </Container>
    );
  }

  function FooterSection({ children }) {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0,
    });

    return (
      <motion.div
        ref={ref}
        variants={reveal("left", 0.2)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <Footer />
      </motion.div>
    );
  }

  return (
    <div>
      <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <Navbar />
      </motion.div>

      <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <Carousal />
      </motion.div>

      <section id="missions">
        <MissionSection />
      </section>

      {/* <CounterSection /> */}

      <section id="pillars">
        <Container fluid>
          <Row>
            <Col>
              <PillarSection />
            </Col>
          </Row>
        </Container>
      </section>

      <SliderSection data={academy} />

      <section id="contact">
        <FooterSection />
      </section>
    </div>
  );
};

export default Home;
