import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const phoneNumber = "237695748384"; // Sans espaces
const message = "Bonjour, je vous contacte depuis votre site web.";

export default function WhatsAppFloatingButton() {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative flex items-center justify-center">
        {/* Glow effect */}
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-500 opacity-30 blur-2xl" />

        {/* Button */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-xl shadow-green-500/40 transition-all duration-300">
          <MessageCircle className="h-7 w-7 text-white" />
        </div>
      </div>
    </motion.a>
  );
}
