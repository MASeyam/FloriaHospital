'use client';
import styles from '../page.module.css';

export default function Navbar() {
  return (
    <nav className={`navbar fixed-top navbar-expand-lg navbar-dark ${styles.navbarCustom}`}>
      <div className="container-fluid">
        <h1 className="navbar-brand">
          <b className={styles["blue-text"]}>Floria</b> Hospital
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Reviews</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact US</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
