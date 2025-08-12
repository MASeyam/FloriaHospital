'use client';
import Image from "next/image";
import { FaClinicMedical, FaMedkit, FaMapMarkerAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutSection() {
  return (
    <section id="about" className="container my-5">
      <div className="row align-items-center">
        
        {/* Left Column */}
        <div className="col-md-6">
          <h2>Welcome to Floria Hospital</h2>
          <p>
            At Floria Hospital, we are committed to providing exceptional medical care 
            with compassion and professionalism. Our team of highly qualified doctors, 
            nurses, and healthcare professionals is dedicated to ensuring your health, 
            safety, and comfort at every step of your journey with us.
          </p>

          <div className="d-flex align-items-start mb-3">
            <FaClinicMedical className="me-3 text-primary" size={32} />
            <div>
              <h5>Comprehensive Medical Services</h5>
              <p>
                We offer a full range of healthcare services, from emergency care to 
                specialized treatments, all under one roof.
              </p>
            </div>
          </div>

          <div className="d-flex align-items-start mb-3">
            <FaMedkit className="me-3 text-success" size={32} />
            <div>
              <h5>Experienced Medical Staff</h5>
              <p>
                Our experienced doctors and nurses are here to provide the highest quality 
                medical care tailored to your needs.
              </p>
            </div>
          </div>

          <a href="#" className="btn btn-primary">
            <FaMapMarkerAlt className="me-2" /> View on Google Map
          </a>
        </div>

        {/* Right Column */}
        <div className="col-md-6 text-center">
          <Image
            src="https://websitedemos.net/dental-02/wp-content/uploads/sites/40/2017/07/image04-free-img.jpg"
            alt="Dentist clinic equipment"
            width={300}
            height={300}
            className="img-fluid rounded"
          />
        </div>
      </div>
    </section>
  );
}
