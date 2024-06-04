import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import team from '../Api/Team'
import TeamCard from '../Components/TeamCard'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import reveal from '../Animations/Variants';

const About = () => {


    function TeamSection({ children }) {
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
                className="mission-section py-5 text-center bg-light"
            >
                <h2 className="mission-heading">Meet Our Faculty</h2>
                <TeamCard data={team} />
            </motion.div>
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
        <>
            <Navbar />

            <TeamSection />

            <FooterSection />
        </>
    )
}

export default About
