import { Button } from "../ui/button";
import { UploadIcon } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="relative w-full min-h-[80vh] bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center min-h-[80vh]">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center text-slate-800 mb-8 leading-tight"
        >
          AI-Powered{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Portfolio Analysis
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 text-center max-w-3xl mb-12 leading-relaxed"
        >
          Upload your portfolio to receive detailed insights and tailored job
          matches.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
          className="w-full max-w-2xl"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Button
              variant="ghost"
              className="relative w-full h-20 flex items-center justify-between px-6 bg-white rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-500 transition-all duration-300"
            >
              <span className="text-base sm:text-lg text-gray-600">
                Upload 'PDF' or 'DOC' file
              </span>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <UploadIcon className="h-6 w-6 text-white" />
              </div>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
