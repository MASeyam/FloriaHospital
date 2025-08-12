import Link from "next/link";
import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export default function MyNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      bg="transparent"
      variant="light"
      expanded={expanded}
      className="p-3 position-absolute w-100"
      style={{ zIndex: 10 }}
    >
      <Container>
        <Link href="/" className="navbar-brand fw-bold fs-5 text-white">
          Dental Clinic
        </Link>

        {/* Custom Animated Toggle Button */}
        <button
          aria-controls="basic-navbar-nav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          className={`custom-toggler d-lg-none ${expanded ? "open" : ""}`}
          onClick={() => setExpanded(!expanded)}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end flex-lg-row flex-column"
        >
          <Nav className="me-3 text-center ">
            <Link href="/" className="nav-link text-white" onClick={() => setExpanded(false)}>Home</Link>
            <Link href="/about" className="nav-link text-white" onClick={() => setExpanded(false)}>About</Link>
            <Link href="/services" className="nav-link text-white" onClick={() => setExpanded(false)}>Services</Link>
            <Link href="/reviews" className="nav-link text-white" onClick={() => setExpanded(false)}>Reviews</Link>
            <Link href="/contact" className="nav-link text-white" onClick={() => setExpanded(false)}>Contact Us</Link>
          </Nav>

          <Button
            href="tel:+8886959859"
            className="px-3 mt-3 mt-lg-0 d-none d-lg-block"
            style={{ backgroundColor: "#2563eb", border: "none", padding: "16px 24px" }}
          >
            Call: +(888) 695-9859
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
