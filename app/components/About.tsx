import { FC } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaHome, FaHospital, FaMapMarkerAlt } from "react-icons/fa";

const AboutSection: FC = () => {
  return (
    <section className="about-section position-relative">



      <Container>
        <Row className="align-items-center">

          {/* Left Side */}
          <Col md={5}>
            <h2 className="fw-bold">Welcome to Dental Clinic</h2>
            <p>
              A descriptive paragraph that tells clients how good you are and
              proves that you are the best choice they’ve made. This paragraph
              is also for those who are looking out for a reliable dental clinic.
            </p>

            <div className="service mb-4">
              <div className="icon-wrapper">
                <FaHome size={24} color="#2563eb" />
              </div>
              <div>
                <h5 className="fw-semibold">Friendly Clinic Near You</h5>
                <p className="mb-0">
                  This is a short description elaborating the service you have mentioned above.
                </p>
              </div>
            </div>

            <div className="service mb-4">
              <div className="icon-wrapper">
                <FaHospital size={24} color="#2563eb" />
              </div>
              <div>
                <h5 className="fw-semibold">Experienced Dentist</h5>
                <p className="mb-0">
                  This is a short description elaborating the service you have mentioned above.
                </p>
              </div>
            </div>

            <Button variant="outline-primary" className="d-flex align-items-center justify-content-around location-button">
              <FaMapMarkerAlt className="location-icon" />
              View On Google Map</Button>
          </Col>

          {/* Right Side */}
          <Col md={7} className="text-end mt-4 mt-md-0 ">
            <div className="image-stack">
              <img
                src="/images/about-section-1.jpg"
                alt="Happy patient"
                className="main-img"
              />
              <img
                src="/images/img1.jpg"
                alt="Clinic"
                className="overlay-img"
              />

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
