'use client';

import styles from '../page.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Caring for You,<br></br> Every Step of the Way</h1>
      </div>

      <svg
    viewBox="0 0 1440 150"
    style={{ display: 'block', position: 'absolute', bottom: 0, left: 0, width: '120%', height: '210px', zIndex: 2 }}
  >
    <path
      fill="#ffffff" 
      d="M0,0 C240,220 860,220 1540,-100 L1440,150 L0,150 Z"
    />
  </svg>
    </section>
  );
}
