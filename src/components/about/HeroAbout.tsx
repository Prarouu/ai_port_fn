import { motion } from "framer-motion";

function HeroAbout() {
  const buttonVariants = {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } },
    hover: { scale: 1.05, transition: { duration: 0.2, delay: 0 } },
    tap: { scale: 0.95 },
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-24 px-4 text-center flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 mb-8 leading-tight"
        >
          Empowering AI talent,{" "}
          <span className="text-blue-600">one portfolio at a time.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Alyzer helps you evaluate your AI portfolio and connects you to career
          opportunities that match your skills.
        </motion.p>
        <motion.button
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Upload Your Portfolio
        </motion.button>
      </div>
    </section>
  );
}

export default HeroAbout;
