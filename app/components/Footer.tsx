// this will be a footer and contact page

import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer-section">
            <Container>
                <Row className="py-5">
                    {/* Column 1 - info */}
                    <Col md={6}>
                        <h4 className="footer-title">Floria Hospital</h4>
                        <p className="footer-text">
                            Providing advanced medical care with modern facilities, skilled doctors, and compassionate service for every patient.
                        </p>
                    </Col>

                    {/* Column 2 - Contact info */}
                    <Col md={4}>
                        <h5 className="footer-subtitle">Contact Us</h5>
                        <p className="footer-text">
                            <FaMapMarkerAlt className="footer-icon" /> 123 Health Avenue, Cairo
                        </p>
                        <p className="footer-text">
                            <FaPhone className="footer-icon" /> +20 123 456 789
                        </p>
                        <p className="footer-text">
                            <FaEnvelope className="footer-icon" /> contact@floriahospital.com
                        </p>
                    </Col>

                    {/* Column 3 - Social Links */}
                    <Col md={2}>
                        <h5 className="footer-subtitle">Follow Us</h5>
                        <div className="social-icons">
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram /></a>
                        </div>
                    </Col>
                </Row>

                {/* copy rights */}
                <Row>
                    <Col className="text-center py-3 border-top border-secondary">
                        <small>© {new Date().getFullYear()} Floria Hospital. All Rights Reserved.</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
