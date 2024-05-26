import React, { useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Carousal from '../Components/Carousal';
import Cards from '../Components/Cards';
import Cards2 from '../Components/Cards2';
import Footer from '../Components/Footer';
import missions from '../Api/Missions';
import pillars from '../Api/Pillars';

const Home = () => {
  const counterRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const countElement = target.querySelector('.count');
          const speed = 200;
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

  return (
    <div>
      <Navbar />
      <Carousal />

      <div className="mission-section py-5 text-center bg-light">
        <h2 className="mission-heading">Our Mission</h2>
        <p className="mx-auto" style={{ maxWidth: '600px' }}>
          We aim to provide innovative and effective solutions that empower teams and businesses through skill enhancement, knowledge transfer, and re-skilling interventions.
        </p>
        <Cards data={missions} />
      </div>

      <div className="counter-wrapper">
        <div ref={el => counterRefs.current[0] = el} className="counter mission-heading2">
          <h1 className="count" data-target="2000">0</h1>
          <p>Project Completed</p>
        </div>
        <div ref={el => counterRefs.current[1] = el} className="counter mission-heading2">
          <h1 className="count" data-target="6000">0</h1>
          <p>Happy Clients</p>
        </div>
        <div ref={el => counterRefs.current[2] = el} className="counter mission-heading2">
          <h1 className="count" data-target="5000">0</h1>
          <p>Real Professionals</p>
        </div>
        <div ref={el => counterRefs.current[3] = el} className="counter mission-heading2">
          <h1 className="count" data-target="3000">0</h1>
          <p>Cup of Coffee</p>
        </div>
      </div>
      <Cards2 data={pillars} />
      <Footer />
    </div>
  );
};

export default Home;
