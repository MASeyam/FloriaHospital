import { FC } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaHome, FaHospital, FaMapMarkerAlt } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="about-section position-relative">
      <Container>
        <Row className="align-items-center">
          {/* Left Side */}
          <Col md={5}>
            <h2 className="fw-bold">Welcome to Floria Hospital</h2>
            <p>
              At Floria Hospital, we are committed to providing exceptional medical care
              with modern facilities and a compassionate team of professionals.
              Whether for routine checkups or specialized treatments, you can count on us
              for excellence and trust.
            </p>

            <div className="service mb-4">
              <div className="icon-wrapper">
                <FaHome size={24} color="#2563eb" />
              </div>
              <div>
                <h5 className="fw-semibold">Convenient Location Near You</h5>
                <p className="mb-0">
                  Our hospital is easily accessible and designed to make your visit as smooth as possible.
                </p>
              </div>
            </div>

            <div className="service mb-4">
              <div className="icon-wrapper">
                <FaHospital size={24} color="#2563eb" />
              </div>
              <div>
                <h5 className="fw-semibold">Experienced Medical Team</h5>
                <p className="mb-0">
                  Our doctors and staff have years of experience providing high-quality healthcare.
                </p>
              </div>
            </div>

            <Button
              variant="outline-primary"
              className="d-flex align-items-center justify-content-around location-button"
            >
              <FaMapMarkerAlt className="location-icon" />
              View On Google Map
            </Button>
          </Col>

          {/* Right Side */}
          <Col md={7} className="text-end mt-4 mt-md-0">
            <div className="image-stack">
              <img
                src="/images/hospital.jpeg"
                alt="Hospital exterior"
                className="main-img"
              />
              <img
                src="/images/hospitaldown.jpeg"
                alt="Hospital interior"
                className="overlay-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

