import { Container, Button } from "react-bootstrap";

export default function Hero() {
  return (
    <section
      className="hero-section d-flex align-items-center text-center text-white"
      style={{
        backgroundImage: "url('images/dental-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
        overflow: "hidden", // hides SVG overflow
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <Container style={{ zIndex: 2 }}>
        <h1 className="fw-bold display-4">
          Your Health, Our Top Priority
        </h1>
        <p className="mt-3 fs-5">
          Providing advanced medical care with compassion, dedication, and expertise for every patient.
        </p>

        <Button variant="primary" size="lg" className="mt-4 px-4 py-2" href="#appointment">
          Book An Appointment
        </Button>
      </Container>

      {/* SVG curve at the bottom */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100px",
          zIndex: 3,
        }}
      >
        <path
          fill="#fff" // matches next section background
          d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
        />
      </svg>
    </section>
  );
}
