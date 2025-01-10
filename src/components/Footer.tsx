/*const Footer = () => {
  return (
    <footer className="p-4 text-black bg-white">
      <div className="flex items-center justify-between mx-auto ">
        <div className="text-sm">© 2025 Cosmic</div>
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

export default Footer;*/

const Footer = () => {
  return (
    <footer className="bottom-0 w-full p-4 pb-16 text-black bg-white ">
      <div className="flex items-center justify-between mx-auto">
        <div className="text-xs text-gray-400">© 2025 Cosmic</div>
        <div className="flex space-x-4 text-xs">
          <a href="#" className="text-gray-400 hover:text-yellow-400">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-400">
            About
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
