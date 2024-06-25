import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import reveal from '../Animations/Variants';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [msg, setMsg] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);

    const data = {
        name: name,
        email: email,
        phone: phone,
        service: service,
        msg: msg,
    };

    async function handleSubmission(event) {
        event.preventDefault();
        try {
            const request = await axios.post('https://mca-academy-backend.vercel.app/sendEmail', data);
            if (request.data.message === 'mail sent') {
                setSuccessMessage(true);
                setName('');
                setEmail('');
                setPhone('');
                setService('');
                setMsg('');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <div>
            <Navbar />
            <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Row>
                    <Col style={{ position: "relative" }}>
                        <div className="image-container">
                            <motion.img
                                src="/images/l3.jpg"
                                alt="Leadership Banner"
                                className="banner-image"
                                style={{ width: "100%", height: "40vh", objectFit: "cover" }}
                                initial={{ x: -1000 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 1 }}
                            />
                            <div className="overlay">
                                <h1 style={{ color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    Contact Us
                                </h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <br /> <br />

            <Container>
                {successMessage && (
                    <Alert variant="success" onClose={() => setSuccessMessage(false)} dismissible>
                        <span>Your message has been successfully sent. Thank you! ✔️</span>
                    </Alert>
                )}
                <Row>
                    <Col>
                        <motion.div
                            variants={reveal("up", 0.2)}
                            initial="hidden"
                            animate={"show"}
                        >
                            <div className="subscription-box">
                                <div className="left">
                                    <h1>Contact Us Now !!!</h1>
                                    <br />
                                    <h5>Never miss an insight. We will mail you when new articles are published.</h5>
                                </div>
                                <div className="right">
                                    <Form onSubmit={handleSubmission}>
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Control
                                                type="text"
                                                placeholder="Name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="input-field"
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control
                                                type="email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="input-field"
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicNumber">
                                            <PhoneInput
                                                country={'ae'}
                                                value={phone}
                                                onChange={(phone) => setPhone(phone)}
                                                containerClass="phone-input-container"
                                                inputClass="phone-input"
                                                inputStyle={{
                                                    width: '100%',
                                                    height: '45px',
                                                    fontSize: '1em',
                                                    borderRadius: '5px',
                                                    padding: '10px',
                                                    border: 'none'
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicDropdown">
                                            <Form.Select
                                                value={service}
                                                onChange={(e) => setService(e.target.value)}
                                                className="input-field"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="HR Program">HR Program</option>
                                                <option value="Finance Program">Finance Program</option>
                                                <option value="Supply Chain Program">Supply Chain Program</option>
                                                <option value="Coaching and Mentoring Program">Coaching and Mentoring Program</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicMessage">
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                placeholder="Message"
                                                value={msg}
                                                onChange={(e) => setMsg(e.target.value)}
                                                className="input-field"
                                            />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="submit-button">
                                            Connect Now
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>

            <motion.div
                ref={ref}
                variants={reveal("left", 0.2)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
            >
                <Footer />
            </motion.div>
        </div>
    );
}

export default ContactUs;
