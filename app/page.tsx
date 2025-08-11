'use client';
import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


export default function Home() {
  
  return (
    <>
    <Navbar/>
    <Hero/>
    </>
  );
}
