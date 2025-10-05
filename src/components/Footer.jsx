// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10 border-t border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Left Section: Shop Name */}
        <div className="text-center md:text-left mb-3 md:mb-0">
          <h2 className="text-lg font-bold text-yellow-400">CyberGear</h2>
          <p className="text-sm">Level up your tech, power up your game ⚡</p>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="flex gap-6 text-sm mb-3 md:mb-0">
          <a href="/" className="hover:text-yellow-400 transition-colors">Home</a>
          <a href="/products" className="hover:text-yellow-400 transition-colors">Products</a>
          <a href="/about" className="hover:text-yellow-400 transition-colors">About</a>
          <a href="/cart" className="hover:text-yellow-400 transition-colors">Cart</a>
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
