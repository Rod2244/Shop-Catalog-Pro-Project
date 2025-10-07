// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10 border-t border-gray-700 z-40">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Left Section: Shop Name */}
        <div className="text-center md:text-left mb-3 md:mb-0">
          <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">CyberGear</h2>
          <p className="text-sm">Level up your tech, power up your game ⚡</p>
        </div>
        
        {/* Right Section: Copyright */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} CyberGear. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
