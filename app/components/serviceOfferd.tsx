'use client';
import Image from "next/image";

export default function Services() {
    const services = [
        { number: "01.", title: "Emergency Care", desc: "Immediate and professional care for urgent medical situations.", img: "/images/Emergency.jpeg" },
        { number: "02.", title: "General Surgery", desc: "Comprehensive surgical services with modern facilities.", img: "/images/General.jpeg" },
        { number: "03.", title: "Pediatrics", desc: "Specialized care for infants, children, and adolescents.", img: "/images/Pediatrics.jpeg" },
        { number: "04.", title: "Cardiology", desc: "Advanced heart care and diagnostic services.", img: "/images/Cardiology.jpeg" },
        { number: "05.", title: "Orthopedics", desc: "Treatment for bone, joint, and muscle conditions.", img: "/images/Orthopedics.jpeg" },
        { number: "06.", title: "Radiology", desc: "High-quality imaging services for accurate diagnosis.", img: "/images/Radiology.jpeg" },
        { number: "07.", title: "Maternity Care", desc: "Comprehensive care for mothers before, during, and after childbirth.", img: "/images/Maternity Care.jpeg" },
        { number: "08.", title: "Laboratory Services", desc: "Accurate and fast medical testing services.", img: "/images/Laboratory Services.jpeg" },
    ];

    return (
        <section id="services" className="services-section py-5">
            <div className="container">
                {/* Section Header */}
                <div className="mb-5 text-center">
                    <h2 className="fw-bold mb-2">Healthcare for Every Stage of Life</h2>
                    <p className="text-muted">We Have All Your Medical Needs Covered</p>
                </div>

                {/* Grid */}
                <div className="row g-4">
                    {services.map((service, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="service-card position-relative text-white">
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    fill
                                    className="object-fit-cover"
                                />
                                <div className="overlay"></div>
                                <div className="content p-3">
                                    <h5 className="fw-bold">{service.number} {service.title}</h5>
                                    <p className="small">{service.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Insurance Box */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="insurance-box text-center p-4 h-100">
                            <p className="text-uppercase small mb-1">For Insurance</p>
                            <p className="fw-bold fs-5 mb-0">(007) 567-8976</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
