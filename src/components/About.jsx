// src/components/About.jsx
function About() {
  return (
    <div className="max-w-3xl mx-auto text-center mt-12 bg-white shadow-lg rounded-2xl p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About CyberGear</h1>
      <p className="text-gray-600 text-lg mb-6">
        Welcome to <span className="font-semibold text-yellow-500">CyberGear</span> — 
        your ultimate destination for high-performance gaming gear, tech tools, and developer essentials.
      </p>

      <p className="text-gray-600 mb-4">
        We aim to empower both gamers and developers with quality products, 
        from mechanical keyboards and RGB setups to dev gadgets and PC components.
      </p>

      <p className="text-gray-600">
        Built by tech enthusiasts, for tech enthusiasts ⚙️🔥.  
        Whether you’re coding your next project or leveling up your rig, 
        CyberGear has got your back.
      </p>

      <div className="mt-8">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg transition duration-200">
          Explore Products
        </button>
      </div>
    </div>
  );
}

export default About;
