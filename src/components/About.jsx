import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ProfileCard from "../reusable-components/ProfileCard";
import Control from "../reusable-components/Control";
import logo from "../assets/logo.png"
 


function About() {

  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  // Fetch JSON when component mounts
  useEffect(() => {
    fetch("/data/team.json")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data))
      .catch((err) => console.error("Failed to load team data:", err));
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 text-gray-100 overflow-hidden">
      {/* === Global Glowing Background === */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* === Cyberpunk Hero Section === */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden text-center px-6 rounded-b-3xl pt-20">
        {/* Floating Binary Code */}
        <div className="absolute text-green-400/10 font-mono text-sm select-none pointer-events-none">
          <p className="absolute top-10 left-10 animate-pulse">
            01100101 01101110 01100111 01101001 01101110 01100101
          </p>
          <p className="absolute bottom-10 right-10 animate-pulse">
            00110001 00110010 00110011 01000011 01001111 01000100 01000101
          </p>
        </div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 bg-gray-900/70 border border-gray-700 backdrop-blur-lg shadow-2xl rounded-2xl p-10 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
            About CyberGear
          </h1>
          <p className="text-gray-300 mb-8 text-lg">
            Powering gamers, developers, and tech enthusiasts with next-generation gear ⚡
          </p>
        
        </motion.div>
      </section>

      {/* === Our Story Section === */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center py-16 px-8 bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-2xl mt-12">
        <img
          src={logo}
          alt="CyberGear store"
          className="w-full md:w-1/2 rounded-2xl shadow-lg"
        />
        <div className="md:ml-10 mt-8 md:mt-0 text-gray-300">
          <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
          <p className="mb-4">
            <span className="font-semibold text-yellow-400">CyberGear</span> started with one mission:
            to make high-performance technology accessible, stylish, and enjoyable for everyone.
          </p>
          <p className="mb-4">
            From humble beginnings selling gaming accessories, we’ve expanded into a full-scale
            tech hub offering premium gadgets, smart home devices, and pro-level hardware.
          </p>
          <p>
            We’re not just a store — we’re a community for tech lovers who believe in
            innovation, reliability, and performance.
          </p>
        </div>
      </section>

      {/* === Mission & Values Section === */}
      <section className="py-16 bg-gray-900/40 backdrop-blur-md border-y border-gray-800 mt-16">
        <h2 className="text-3xl font-bold text-center text-white mb-10">Our Core Values</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Innovation", desc: "We stay ahead of the curve by bringing you the latest and best tech solutions." },
            { title: "Integrity", desc: "We value transparency, honesty, and trust in every transaction." },
            { title: "Customer Focus", desc: "Our customers are the heart of everything we do — satisfaction guaranteed." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-800/50 border border-gray-700 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === Timeline Section === */}
      <section className="max-w-4xl mx-auto py-16 px-6 bg-gray-800/30 backdrop-blur-md rounded-2xl border border-gray-700 mt-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Journey</h2>
        <div className="relative border-l-4 border-yellow-400 ml-6">
          {[
            { year: "2019", text: "Founded CyberGear as a small online tech store." },
            { year: "2021", text: "Expanded our catalog to include gaming peripherals and smart devices." },
            { year: "2023", text: "Launched CyberGear Pro — our own line of custom hardware accessories." },
            { year: "2025", text: "Empowering thousands of users worldwide with top-notch tech solutions." },
          ].map((item, idx) => (
            <div key={idx} className="mb-8 ml-6">
              <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2 top-1.5"></div>
              <h3 className="text-xl font-semibold text-white">{item.year}</h3>
              <p className="text-gray-300 mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === Team Section === */}
      <section className="py-16 bg-gray-900/40 backdrop-blur-md border-y border-gray-800 text-center mt-16">
        <h2 className="text-3xl font-bold text-white mb-10">Meet the Team</h2>

        {teamMembers.length > 0 ? (
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedMember(member)}
                className="cursor-pointer bg-gray-800/50 p-6 rounded-2xl border border-gray-700 shadow-md hover:shadow-cyan-500/20 hover:scale-105 transition-transform"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-2 border-cyan-500/40"
                />
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">Loading team members...</p>
        )}

        {/* Profile Card Modal */}
        <ProfileCard
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
          member={selectedMember}
        />
      </section>


      {/* === Call to Action Section === */}
      <section className="text-center py-16 bg-gray-800/40 backdrop-blur-md border-t border-gray-700 mt-16">
        <h2 className="text-3xl font-bold mb-4 text-white">Ready to Level Up Your Gear?</h2>
        <p className="text-gray-300 mb-8">
          Explore our catalog of next-gen products and experience the future of tech.
        </p>
        <Link to="/products">
          <Control
            label="Shop Now"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-black font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-purple-500/40"
          />
        </Link>
      </section>
    </div>
  );
}

export default About;
