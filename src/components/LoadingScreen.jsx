import { motion } from "framer-motion";
import logo from "../assets/images/logo2.png";

function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        className="text-center"
      >
        <motion.img
          src={logo}
          alt="PDG Logo"
          className="mx-auto h-24 w-24"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />

        <h2 className="mt-5 text-2xl font-bold text-white">
          Purpose Driven Generation
        </h2>

        <p className="mt-2 text-gray-400">Loading...</p>
      </motion.div>
    </div>
  );
}

export default LoadingScreen;
