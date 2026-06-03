import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function HeroAbout() {
  return (
    <section className="relative w-full min-h-[60vh] bg-[#080808] grid-bg overflow-hidden flex flex-col items-center justify-center pt-24 pb-16 px-4">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-[#00ff88]/4 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs text-[#00ff88] uppercase tracking-widest font-medium mb-6"
        >
          About Alyzer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Empowering AI talent,
          <br />
          <span className="text-[#00ff88]">one portfolio at a time.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-[#555] max-w-2xl mx-auto leading-relaxed"
        >
          Alyzer was built for a simple reason — AI professionals deserve better
          tools to understand their value and find work that matches it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <button className="btn-primary flex items-center gap-2 px-7 py-3.5 rounded-sm text-sm font-semibold">
            Upload Your Portfolio
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroAbout;
