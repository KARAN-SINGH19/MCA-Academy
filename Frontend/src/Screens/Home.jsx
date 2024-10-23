import React, { useEffect, useRef } from 'react';
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
        <p className="mx-auto" style={{ maxWidth: '600px', fontSize: "23px" }}>
          We develop leadership and functional skills across the GCC, empowering individuals and organizations with high-quality training to drive regional growth.
        </p>
        <MissionCard data={missions} />
      </motion.div>
    );
  }

  function SliderSection() { 
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
        <h2 className="mission-heading">Functional Training Programs</h2>
        <Slider data={academy} />
      </motion.div>
    );
  }

  // const RedBarSection = () => {
  //   const values = [
  //     { icon1: '/images/iconteam.png', text: 'Unlocking Authentic Leadership' },
  //     { icon1: '/images/iconskill.png', text: 'Entrepreneurial Excellence - Skills and mindset' },
  //     { icon1: '/images/Women.png', text: 'Empowering Women Leaders For Success' },
  //     { icon1: '/images/iconlight.png', text: 'Fostering Functional Expertise' },
  //     { icon1: '/images/iconcoach.png', text: 'Coaching for Professionals' },
  //   ];

  //   const angleStep = Math.PI / (values.length - 1);
  //   const radius = 30;
  //   const closerRadius = 25;

  //   const scrollToSection = (sectionId) => {
  //     const section = document.getElementById(sectionId);
  //     if (section) {
  //       section.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  //   return (
  //     <div className='mission-section2 text-center' style={{ overflow: "hidden", padding: "0px", margin: "0px" }}>
  //       <div style={{
  //         textAlign: 'center',
  //         padding: '50px',
  //         position: 'relative',
  //         height: "115vh",
  //         backgroundImage: 'url(/images/bst.jpg)',
  //         backgroundSize: 'cover',
  //         backgroundPosition: 'center',
  //         backgroundRepeat: 'no-repeat',
  //         width: '100%',
  //         margin: 0
  //       }}>
  //         <div style={{
  //           position: 'absolute',
  //           top: 0,
  //           left: 0,
  //           width: '100%',
  //           height: '100%',
  //           backgroundColor: 'rgba(102, 3, 3, 0.75)',
  //           zIndex: 0
  //         }}></div>

  //         <div style={{
  //           position: 'relative',
  //           zIndex: 1,
  //           backgroundColor: 'rgba(0, 0, 0, 0.3)',
  //           padding: '20px',
  //           borderRadius: '10px',
  //           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  //           marginBottom: '40px',
  //           width: "70%",
  //           margin: "auto"
  //         }}>
  //           <h1  style={{ color: 'white', marginBottom: '20px' }}>Academy Verticals</h1>
  //           <p style={{ color: "white", fontSize: "1.25rem", textAlign: "center" }}>
  //             <br />
  //             Explore our academy verticals tailored to empower growth and excellence in your career journey.
  //           </p>
  //         </div>

  //         {values.map((value, index) => {
  //           const angle = index * angleStep - Math.PI;
  //           const isCloser = value.text === 'Entrepreneurial Excellence - Skills and mindset' ||
  //             value.text === 'Empowering Women Leaders For Success' ||
  //             value.text === 'Fostering Functional Expertise';
  //           const currentRadius = isCloser ? closerRadius : radius;
  //           const x = currentRadius * Math.cos(angle);
  //           const y = currentRadius * Math.sin(angle);

  //           return (
  //             <div
  //               key={index}
  //               style={{
  //                 position: 'absolute',
  //                 left: `calc(50% + ${x}vw)`,
  //                 top: `calc(90% + ${y}vh)`,
  //                 transform: 'translate(-50%, -78%)',
  //                 textAlign: 'center',
  //                 zIndex: 1,
  //               }}
  //             >
  //               <div
  //                 style={{
  //                   background: '#CE0932',
  //                   borderRadius: '50%',
  //                   width: '8vw',
  //                   height: '8vw',
  //                   display: 'flex',
  //                   alignItems: 'center',
  //                   justifyContent: 'center',
  //                   margin: '0 auto',
  //                   overflow: 'hidden'
  //                 }}
  //               >
  //                 <a> {/* Add your link here */}
  //                   <img
  //                     src={value.icon1}
  //                     style={{
  //                       width: '60%',
  //                       height: '60%',
  //                       objectFit: 'contain'
  //                     }}
  //                     alt=""
  //                   />
  //                 </a>
  //               </div>
  //               <p style={{ color: 'white', maxWidth: '15vw', fontSize: '1rem' }}>{value.text}</p>
  //             </div>
  //           );
  //         })}

  //         <div style={{ position: 'relative', display: 'inline-block', zIndex: 2 }}>
  //           <div
  //             style={{
  //               background: '#CE0932',
  //               borderRadius: '50%',
  //               width: '30vw',
  //               height: '30vw',
  //               position: 'absolute',
  //               bottom: '-20%',
  //               left: '50%',
  //               transform: 'translateX(-50%)',
  //               zIndex: 1,
  //               top: 'calc(100% - -22vw)',
  //             }}
  //           >
  //             <div>
  //               <h3 onClick={() => { scrollToSection('pillars2') }} style={{ color: "white", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20%", cursor: "pointer" }}>Explore Now</h3>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };


  const RedBarSection = () => {
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
    return (
      <div className='mission-section2 text-center' style={{ width: '100%', overflow: "hidden", padding: "0px", margin: "0px" }}>
        <img src="/images/sun.png" alt="" style={{ width: '100%' }} onClick={() => scrollToSection('pillars2')} />
      </div>
    );
  };

  // const PillarSection = () => {
  //   const { ref, inView } = useInView({
  //     triggerOnce: true,
  //     threshold: 0,
  //   });

  //   return (
  //     <Container fluid style={{ paddingRight: 0, paddingLeft: 0 }}>
  //       <Row noGutters>
  //         <Col>
  //           <div ref={ref}>
  //             <RedBarSection />
  //           </div>
  //         </Col>
  //       </Row>
  //     </Container>
  //   );
  // };

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
  };

  function PartnersSection() {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0,
    });

    const partners = [
      { imgSrc: '/images/nworx.png', text: 'NWORX is a B2B SaaS platform used by enterprises to improve the performance of their leaders and teams.', link: 'https://nworx.ai/' },
      { imgSrc: '/images/pdu.png', text: 'The University offers programs to address the need for trained human resources in the domains of Science, Technology, Management and Humanities.', link: 'https://www.pdpu.ac.in/' },
    ];

    return (
      <motion.div
        ref={ref}
        variants={reveal("right", 0.2)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="partners-section py-5 text-center"
        style={{ padding: '0 15px' }}  // Added padding for responsive design
      >
        <h2 className="mission-heading" style={{ marginBottom: '40px' }}>Our Partners</h2>
        <Container fluid className='py-5 bg-light' style={{ width: "100%" }}>
          <Row className="justify-content-center">
            {partners.map((partner, index) => (
              <Col key={index} md={4} sm={6} className="mb-4 d-flex justify-content-center">
                <div className="partner-box text-center" style={{ maxWidth: '450px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <a href={partner.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                    <img src={partner.imgSrc} alt={partner.text} className="img-fluid mb-3" style={{ width: '100%', height: '200px', objectFit: 'contain' }} /> {/* Adjust size here */}
                  </a>
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
    <>
      <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <Navbar />
      </motion.div>

      <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <Carousal />
      </motion.div>

      <section id="missions">
        <MissionSection />
      </section>

      {/* <section id="pillars" style={{ width: '100%', padding: 0, margin: 0 }}>
        <Container fluid style={{ padding: 0, margin: 0 }}>
          <Row noGutters>
            <Col>
              <PillarSection />
            </Col>
          </Row>
        </Container>
      </section> */}

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

      <section id="partners">
        <PartnersSection />
      </section>

      <section id="offices">
        <FooterSection />
      </section>
    </>
  );
};

export default Home;
