import { Button } from "../ui/button";
import { Upload, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

function Hero() {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative w-full min-h-screen bg-[#080808] grid-bg overflow-hidden flex flex-col items-center justify-center pt-16">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[#00ff88]/5 blur-[120px]" />
      </div>

      {/* Top label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center gap-2 border border-[#222] rounded-full px-4 py-1.5 mb-8"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#00ff88]" />
        <span className="text-xs text-[#888] tracking-widest uppercase font-medium">
          AI-Powered Career Intelligence
        </span>
      </motion.div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center text-white leading-[1.05] tracking-tight max-w-5xl px-4"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        Analyze your portfolio.
        <br />
        <span className="text-[#00ff88]">Land the right job.</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 mt-6 text-base sm:text-lg text-[#888] text-center max-w-xl px-4 leading-relaxed"
      >
        Upload your portfolio and let our AI surface deep insights, skill gaps,
        and job matches tailored to your career trajectory.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 mt-10 flex flex-col sm:flex-row items-center gap-4"
      >
        <button
          onClick={() => fileRef.current?.click()}
          className="btn-primary flex items-center gap-2 px-7 py-3.5 rounded-sm text-sm font-semibold"
        >
          <Upload className="w-4 h-4" />
          Upload Portfolio
        </button>
        <button className="btn-outline flex items-center gap-2 px-7 py-3.5 rounded-sm text-sm font-semibold">
          See How It Works
          <ArrowRight className="w-4 h-4" />
        </button>
        <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden" />
      </motion.div>

      {/* Upload zone */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="relative z-10 mt-16 w-full max-w-2xl px-4"
      >
        <button
          onClick={() => fileRef.current?.click()}
          className="w-full group border border-dashed border-[#333] hover:border-[#00ff88] bg-[#0f0f0f] hover:bg-[#00ff88]/5 rounded-lg p-10 flex flex-col items-center gap-3 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-sm bg-[#1a1a1a] group-hover:bg-[#00ff88]/10 flex items-center justify-center transition-colors">
            <Upload className="w-5 h-5 text-[#555] group-hover:text-[#00ff88] transition-colors" />
          </div>
          <p className="text-[#555] group-hover:text-[#888] text-sm transition-colors">
            Drop your <span className="text-[#888] group-hover:text-white">PDF or DOC</span> file here
          </p>
          <p className="text-[#333] text-xs">Max file size: 10MB</p>
        </button>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 mt-16 w-full max-w-3xl px-4 pb-16"
      >
        <div className="border-t border-[#1a1a1a] pt-8 grid grid-cols-3 gap-6 text-center">
          {[
            { value: "10K+", label: "Portfolios Analyzed" },
            { value: "94%", label: "Job Match Rate" },
            { value: "3x", label: "Faster Hiring" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {stat.value}
              </p>
              <p className="text-xs text-[#555] mt-1 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
