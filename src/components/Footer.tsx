import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full p-4 pb-16 text-black bg-white ">
      <div className="footer-container">
        <div className="footer-text">© 2025 Cosmic</div>
        <div className="footer-links">
          <a href="#" className="footer-link">
            Home
          </a>
          <a href="#" className="footer-link">
            About
          </a>
          <a href="#" className="footer-link">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
