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

    const row1 = services.slice(0, 2);
    const row2 = services.slice(2, 6);
    const row3 = services.slice(6, 8);

    return (
        <section id="services" className="services-section py-5">
            <div className="container">

                {/* Row 1: 6 cols heading + 2 cards in the remaining 6 cols */}
                <div className="row g-0 align-items-stretch mb-0">
                    <div className="col-12 col-lg-6 p-4 heading-block position-relative">
                        <h2 className="display-5 fw-bold mb-3">Healthcare for Every Stage of Life</h2>
                        <p className="text-muted mb-0">We Have All Your Medical Needs Covered</p>
                        {/* dotted background handled in CSS via ::after */}
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="row g-0">
                            {row1.map((s, i) => (
                                <div key={i} className="col-12 col-sm-6 col-lg-6 service-col">
                                    <div className="service-card">
                                        <Image src={s.img} alt={s.title} fill className="service-img" priority />
                                        <div className="overlay" />
                                        <div className="content p-3">
                                            <h6 className="fw-bold mb-1">{s.number} {s.title}</h6>
                                            <p className="small mb-0">{s.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Row 2: 4 cards across (3 cols each) */}
                <div className="row g-0">
                    {row2.map((s, i) => (
                        <div key={i} className="col-12 col-sm-6 col-lg-3 service-col">
                            <div className="service-card">
                                <Image src={s.img} alt={s.title} fill className="service-img" />
                                <div className="overlay" />
                                <div className="content p-3">
                                    <h6 className="fw-bold mb-1">{s.number} {s.title}</h6>
                                    <p className="small mb-0">{s.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Row 3: 2 cards (6 cols total) + insurance box (6 cols) */}
                <div className="row g-0">
                    {row3.map((s, i) => (
                        <div key={i} className="col-12 col-sm-6 col-lg-3 service-col">
                            <div className="service-card">
                                <Image src={s.img} alt={s.title} fill className="service-img" />
                                <div className="overlay" />
                                <div className="content p-3">
                                    <h6 className="fw-bold mb-1">{s.number} {s.title}</h6>
                                    <p className="small mb-0">{s.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="col-12 col-sm-12 col-lg-6 service-col">
                        <div className="insurance-box d-flex flex-column justify-content-center align-items-start text-white p-4 h-100">
                            <p className="text-uppercase small mb-1 opacity-75">For Insurance</p>
                            <p className="fw-bold fs-4 mb-0">(007) 567-8976</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
