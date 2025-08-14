'use client';
import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/serviceOfferd";
import OurDoctors from "./components/OurDoctors";
import DentalReviews from "./components/Testimonials";
import Appointment from "./components/appointment";



export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Appointment />
      <Services />
      <OurDoctors />
      <DentalReviews />
      <Footer />
    </>
  );
}
