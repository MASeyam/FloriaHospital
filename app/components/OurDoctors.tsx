'use client';
import Image from "next/image";

export default function OurDoctors() {
    const doctors = [
        { name: "Dr. Ahmed Hassan", desc: "Over 15 years of experience providing exceptional heart care.", img: "/images/ahmed.jpeg" },
        { name: "Dr. Sara Mahmoud", desc: "Renowned for her gentle approach and excellent child care.", img: "/images/sara.jpeg" },
        { name: "Dr. Omar Ali", desc: "Highly skilled surgeon with a remarkable success rate.", img: "/images/omar.jpeg" },
        { name: "Dr. Mona Khaled", desc: "Expert in accurate diagnostics with advanced imaging skills.", img: "/images/Mona.jpeg" },
    ];

    return (
        <section id ="doctors" className="our-doctors-section py-5">
            <div className="container">
                {/* Section Header */}
                <div className="mb-5 text-center">
                    <h2 className="fw-bold mb-2">Meet Our Doctors</h2>
                    <p className="text-muted">Highly qualified specialists ready to care for you</p>
                </div>

                {/* Grid */}
                <div className="row g-4">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="doctor-card text-center">
                                <div className="doctor-img position-relative">
                                    <Image
                                        src={doctor.img}
                                        alt={doctor.name}
                                        width={300}
                                        height={400}
                                        className="rounded-circle object-fit-cover"
                                    />
                                </div>
                                <h5 className="fw-bold mt-3">{doctor.name}</h5>
                                <p className="text-muted small">{doctor.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
