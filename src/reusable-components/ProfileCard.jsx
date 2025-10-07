import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

function ProfileCard({ isOpen, onClose, member }) {
  if (!isOpen || !member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
            >
              <X size={24} />
            </button>

            {/* Profile Image */}
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-2 border-cyan-500/40"
            />

            {/* Info */}
            <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
            <p className="text-cyan-400 mb-4">{member.role}</p>
            <p className="text-gray-300">{member.description}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProfileCard;
