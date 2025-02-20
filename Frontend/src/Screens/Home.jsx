import React, { useEffect, useRef } from 'react'; 
import { Link } from 'react-router-dom';
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

  function MissionSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

    return (
      <motion.div
        ref={ref}
        variants={reveal("left", 0.2)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mission-section py-5 text-center"
      >
        <h2 className="mission-heading">Our Mission</h2>
        <p className="mx-auto" style={{ maxWidth: '600px', fontSize: "23px" }}>
          We develop leadership and functional skills across the GCC, empowering individuals and organizations with high-quality training to drive regional growth.
        </p>
        <MissionCard data={missions} />
      </motion.div>
    );
  }

  function SliderSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

    return (
      <motion.div
        ref={ref}
        variants={reveal("up", 0.2)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mission-section py-5 text-center bg-light"
      >
        <h2 className="mission-heading">Functional Training Programs</h2>
        <Slider data={academy} />
      </motion.div>
    );
  }

  const PillarSection = () => {
    const { ref } = useInView({ triggerOnce: true, threshold: 0 });

    return (
      <Container fluid style={{ paddingRight: 0, paddingLeft: 0 }}>
        <Row noGutters>
          <Col>
            <div ref={ref}>
              <div className='mission-section2 text-center' style={{ width: '100%', overflow: "hidden", padding: "0px", margin: "0px", cursor: 'pointer' }}>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };

  const PillarSection2 = () => {
    const { ref } = useInView({ triggerOnce: true, threshold: 0 });

    return (
      <Container fluid style={{ width: "100%" }}>
        <Row>
          <Col>
            <div className="mission-heading3-container" ref={ref}>
              <h2 className="mission-heading3">Our Verticals</h2>
            </div>
            <PillarCard data={pillars} />
          </Col>
        </Row>
      </Container>
    );
  };

  function PartnersSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
    const partners = [
      { imgSrc: "/images/nvox2.PNG", text: "Enhance leadership skills to meet business results by leveraging AI technology", link: "/nworx" },
      { imgSrc: "/images/pdeu.PNG", text: "To build intellectual capital and human resources in the fast-developing and competitive energy industry", link: null },
      { imgSrc: "/images/isblogo.jpg", text: "Transformational learning journeys designed to equip executives across business areas", link: "/isb" },
      { imgSrc: "/images/download.png", text: "Transforming Coaching & Mentoring by integrating our cutting-edge platform with organizational needs", link: "/weace" },
      { imgSrc: "/images/MYSOBlue.png", text: "Specialize in combining bespoke content with our micro-courses to meet the specific needs of your organization and employees.", link: "/myso" },
    ];
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        className="partners-section py-5 text-center"
      >
        <h2 className="mission-heading" style={{ marginBottom: "40px" }}>Our Partners</h2>
        <Container fluid className="py-5 bg-light" style={{ width: "100%" }}>
          <Row className="justify-content-center">
            {partners.map((partner, index) => (
              <Col key={index} md={4} sm={6} className="mb-4 d-flex justify-content-center">
                <div className="partner-box text-center" style={{ maxWidth: "450px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  {partner.link ? (
                    <Link to={partner.link} style={{ display: "block" }}>
                      <img src={partner.imgSrc} alt={partner.text} className="img-fluid mb-3" style={{ width: "90%", height: "100px", objectFit: "contain", cursor: "pointer" }} />
                    </Link>
                  ) : (
                    <img src={partner.imgSrc} alt={partner.text} className="img-fluid mb-3" style={{ width: "90%", height: "100px", objectFit: "contain" }} />
                  )}
                  <p className="mt-2" style={{ flexGrow: 1 }}>{partner.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.div>
    );
  }

  function FooterSection() {
    return (
      <motion.div variants={reveal("left", 0.2)} initial="hidden" animate="show">
        <Footer />
      </motion.div>
    );
  }

  return (
    <>
      <Navbar />
      <Carousal />
      <section id="missions"><MissionSection /></section>
      <section id="pillars"><PillarSection /></section>
      <section id="pillars2"><PillarSection2 /></section>
      <SliderSection />
      <section id="partners"><PartnersSection /></section>
      <section id="offices"><FooterSection /></section>
    </>
  );
};

export default Home;