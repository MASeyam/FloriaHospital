'use client';
import Image from "next/image";

export default function Services() {
    const services = [
        { number: "01.", title: "Dental X-Rays", desc: "This is a short description elaborating the service you have mentioned above.", img: "/images/service-1.jpg" },
        { number: "02.", title: "Exams & Cleanings", desc: "This is a short description elaborating the service you have mentioned above.", img: "/images/service-2.jpg" },
        { number: "03.", title: "Cosmetic Dentistry", desc: "This is a short description elaborating the service you have mentioned above.", img: "/images/service-3.jpg" },
        { number: "04.", title: "Periodontal Disease", desc: "This is a short description elaborating the service you have mentioned above.", img: "/images/service-4.jpg" },
        { number: "05.", title: "Root Canals", desc: "This is a short description elaborating the service you have mentioned above.", img: "/images/service-5.jpg" },
        { number: "06.", title: "Extractions", desc: "This is a short description elaborating the service you have mentioned above.", img: "/images/service-6.jpg" },
        { number: "07.", title: "Teeth Whitening", desc: "This is a short description elaborating the service you have mentioned above.", img: "/images/service-7.jpg" },
        { number: "08.", title: "Braces & Implants", desc: "This is a short description elaborating the service you have mentioned above.", img: "/images/service-8.jpg" },
    ];

    return (
        <section className="services-section py-5">
            <div className="container">
                {/* Section Header */}
                <div className="mb-5 text-center">
                    <h2 className="fw-bold mb-2">Dentistry for Today's Lifestyle</h2>
                    <p className="text-muted">We Have All Your Dental Needs Covered</p>
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
