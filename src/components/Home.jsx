import { Link } from "react-router-dom";
import Control from "../reusable-components/Control";
import { motion } from "framer-motion";

const categories = [
  { name: "Computers", image: "/images/Image2.jpg" },
  { name: "Accessories", image: "/images/Image1.jpg" },
  { name: "Audio Gear", image: "/images/Image3.jpg" },
  { name: "Storage", image: "/images/Image7.jpg" },
  { name: "Mobile Devices", image: "/images/Image5.jpg" },
  { name: "Home Console", image: "/images/Image8.jpg"},
  { name: "Handheld Console", image: "/images/Image4.jpg"},
  { name: "Console Games", image: "/images/Image6.jpg"},
];

const Home = () => {
  return (
    <div>
      {/* === Hero Section === */}
        <div className="relative h-[500px] flex items-center justify-center bg-gradient-to-b from-gray-900 to-black overflow-hidden text-center px-6 rounded-3xl pt-20">
            {/* === Animated Background Glow === */}
            <div className="absolute inset-0">
            <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-500/30 blur-[100px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-cyan-500/30 blur-[100px] rounded-full animate-pulse delay-1000"></div>
            </div>

            {/* === Main Content === */}
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 bg-gray-900/70 border border-gray-700 backdrop-blur-lg shadow-2xl rounded-2xl p-10 max-w-3xl"
            >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
                Welcome to CyberGear
            </h1>
            <p className="text-gray-400 mb-8 text-lg">
                Power up your setup with next-gen gaming and developer gear ⚡
            </p>

            <Link to="/products">
                <Control
                label="Enter the Shop"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-black font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-purple-500/40"
                />
            </Link>
            </motion.div>

            {/* === Floating Binary/Code Effect === */}
            <div className="absolute text-green-400/10 font-mono text-sm space-y-1 select-none pointer-events-none">
            <p className="absolute top-10 left-10 animate-pulse">
                01100101 01101110 01100111 01101001 01101110 01100101
            </p>
            <p className="absolute bottom-10 right-10 animate-pulse">
                00110001 00110010 00110011 01000011 01001111 01000100 01000101
            </p>
            </div>
        </div>

      {/* === Category Section === */}
      <section className="relative z-10 py-10 px-8">
        <h2 className="text-center text-4xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Browse by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-700 group"
            >
              <Link to={`/products?cat=${encodeURIComponent(cat.name)}`}>
                <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-lg font-semibold bg-gradient-to-r text-transparent bg-clip-text from-cyan-400 to-purple-400">
                    {cat.name}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
