'use client';

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        position: 'relative',   
        width: '100vw',
        height: '80vh',
        backgroundImage: "url('images/hospital.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',         
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,               
          backgroundColor: 'rgba(0, 0, 0, 0.6)', 
          zIndex: 1,
        }}
      />

      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 2,              
          paddingTop: '40vh',
          textAlign: 'center',
        }}
      >
        <h1>Caring for You, Every Step of the Way
        </h1>
        <p>our health and well-being are our top priorities. At Floria Hospital, we provide compassionate care, advanced treatments, and personalized support to help you live your best life.</p>
      </div>
    </section>
  );
}
