import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContianer}>
        <div className={styles.footerText}>© 2025 Cosmic</div>
        <div className={styles.footerLinks}>
          <a href="#" className={styles.footerLink}>
            Home
          </a>
          <a href="#" className={styles.footerLink}>
            About
          </a>
          <a href="#" className={styles.footerLink}>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
