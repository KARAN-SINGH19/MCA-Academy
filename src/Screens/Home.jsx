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
import '@fortawesome/fontawesome-free/css/all.min.css';
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


  const RedBarSection = () => {
    const values = [
      { icon1: '/images/logo1.jpg', icon: 'fas fa-chart-line', text: 'Unlocking Authentic Leadership' },
      { icon: 'fas fa-balance-scale', text: 'Entrepreneurial Excellence -  Skills and mindset' },
      { icon: 'fas fa-award', text: 'Empowering Women Leaders For Success' },
      { icon: 'fas fa-handshake', text: 'Fostering Functional Expertise' },
      { icon: 'fas fa-users', text: 'Coaching for Professionals' },
    ];

    const angleStep = Math.PI / (values.length - 1);
    const radius = 300;

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };


    return (
      <Container fluid style={{
        paddingLeft: 0, paddingRight: 0, overflow: 'hidden',
      }}>
        <Row>
          <Col>
            <div style={{
              textAlign: 'center',
              padding: '50px',
              position: 'relative',
              height: "100vh",
              backgroundImage: 'url(/images/bst.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(102, 3, 3, 0.75)',
                zIndex: 0
              }}></div>

              <div style={{
                position: 'relative',
                zIndex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                marginBottom: '40px'
              }}>
                <h1 style={{ color: 'white', marginBottom: '20px' }}>Academy Verticals</h1>
                <p style={{ color: "white", fontSize: "20px", textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus officia corporis tenetur. Earum harum repellendus praesentium eius iste enim, cupiditate doloribus hic culpa placeat? Ab quaerat aut nemo.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus officia corporis tenetur. Earum harum repellendus praesentium eius iste enim, cupiditate doloribus hic culpa placeat? Ab quaerat aut nemo et animi!
                </p>
              </div>

              {values.map((value, index) => {
                const angle = index * angleStep - Math.PI;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                return (
                  <div
                    key={index}
                    style={{
                      position: 'absolute',
                      left: `calc(50% + ${x}px)`,
                      top: `calc(90% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      zIndex: 1,
                    }}
                  >
                    <div
                      style={{
                        background: '#FF6D00',
                        borderRadius: '50%',
                        width: '120px',
                        height: '120px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                      }}
                    >
                      <i className={value.icon} style={{ fontSize: '50px', color: 'white' }}></i>
                      {/* <img src={value.icon} style={{ width:"80px",height:"80px" }} alt="" /> */}
                    </div>
                    <p style={{ color: 'white', maxWidth: '190px' }}>{value.text}</p>
                  </div>
                );
              })}

              <div style={{ position: 'absolute', display: 'inline-block', zIndex: 2 }}>
                <div
                  style={{
                    background: '#FF6D00',
                    borderRadius: '50%',
                    width: '460px',
                    height: '450px',
                    position: 'absolute',
                    bottom: '-75px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1,
                    top: 'calc(100% - -300px)',
                  }}
                >
                  <div>
                    <h1 onClick={() => { scrollToSection('pillars2') }} style={{ color: "white", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "70px", cursor: "pointer", animation: "bounce 1s infinite" }}>CLICK MORE</h1>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };


  const PillarSection = () => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0,
    });


    return (
      <Container fluid style={{ width: "100%" }}>
        <Row>
          <Col>
            <div className="" ref={ref}>
              <RedBarSection />
            </div>
          </Col>
        </Row>

      </Container>
    );
  }


  const PillarSection2 = () => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0,
    });


    return (
      <Container fluid style={{ width: "100%" }}>
        <Row>
          <Col>
            <div className="" ref={ref}>
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

      <section id="pillars">
        <Container fluid>
          <Row>
            <Col>
              <PillarSection />
            </Col>
          </Row>
        </Container>
      </section>
      <br /> <br /> <br /> <br /> <br /> <br />
      <section id="pillars2">
        <Container fluid>
          <Row>
            <Col>
              <PillarSection2 />
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
