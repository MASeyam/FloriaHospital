import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone } from 'react-icons/fa';

export default function Appointment() {
    return (
        <div className="appointment-container container-fluid bg-primary text-white" id="appointment">
            <div className="row align-items-center section-alignment">
                {/* Left Text Section */}
                <div className="col-12 col-lg-6 text-white mb-4 mb-lg-0">
                    <h2 className="appointment-heading fw-bold">New Patient</h2>
                    <p className="appointment-description" >
                        A descriptive paragraph that tells clients how good you are and proves
                        that you are the best choice that they’ve made. This paragraph is also
                        for those who are looking out for a reliable dental clinic.
                    </p>
                    <p className="mt-4 fw-semibold">
                        <FaPhone size={12} /> NEED ASSISTANCE? <br />
                    </p>
                    <h3 className="appointment-phone fs-4 fw-bold">+(888) 695-9859</h3>
                </div>

                {/* Right Form Section */}
                <div className="col-12 col-lg-5 offset-lg-1">
                    <div className="appointment-form-box p-6 rounded shadow bg-white">
                        <form>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Your Name"
                            />
                            <input
                                type="email"
                                className="form-control mb-3"
                                placeholder="Your Email"
                            />
                            <input
                                type="tel"
                                className="form-control mb-3"
                                placeholder="Your Phone Number"
                            />
                            <button type="submit" className="btn btn-primary ">
                                Send Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

