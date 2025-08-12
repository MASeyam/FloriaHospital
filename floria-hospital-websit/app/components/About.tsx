'use client';
import styles from '../page.module.css';

export default function About() {
  return (
    <section id="about" className={styles['about-section']} style={{ marginTop: '0px' }}>
     <div className={`${styles.container} ${styles['about-container']}`}>
     <div className={styles['about-text']}>
  <h2 className={styles["blue-text"]}>Welcome to Floria Hospital</h2>
  <p>
    Floria Hospital is dedicated to providing exceptional healthcare services with compassion and expertise.<br />
    We are proud to be your trusted partner in maintaining your health and well-being.
  </p>

  <div className={styles['title-with-icon']}>
    <img src="/images/hospital (1).png" alt="About Icon" className={styles.icon} />
    <h3 className={styles["blue-text"]}>Comprehensive Care Close to You</h3>
  </div>
  <p>
    We offer a wide range of medical services tailored to meet the needs of our community,<br /> ensuring reliable and accessible care.
  </p>

  <div className={styles['title-with-icon']}>
    <img src="/images/hospital (2).png" alt="About Icon" className={styles.icon} />
    <h3 className={styles["blue-text"]}>Experienced Medical Team</h3>
  </div>
  <p>
    Our team of skilled doctors and healthcare professionals use the latest technology to deliver personalized and effective treatments.
  </p>
</div>


        <div className="about-image">
          <img src="/images/img1.jpg" alt="Floria Hospital" />
        </div>
      </div>
    </section>
  );
}
