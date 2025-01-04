const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">© 2024 Cosmic App</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-yellow-400">
            Home
          </a>
          <a href="#" className="hover:text-yellow-400">
            About
          </a>
          <a href="#" className="hover:text-yellow-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
