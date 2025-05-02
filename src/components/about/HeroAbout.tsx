import { motion } from "framer-motion";

function HeroAbout() {
  const buttonVariants = {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } },
    hover: { scale: 1.05, transition: { duration: 0.2, delay: 0 } },
    tap: { scale: 0.95 },
  };

  return (
    <section className="w-full bg-gray-100 py-20 px-4 text-center flex flex-col items-center justify-center">
      <div className="max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6"
        >
          Empowering AI talent, one portfolio at a time.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="text-sm sm:text-base md:text-lg text-gray-500 mb-8"
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
          className="bg-slate-800 text-white px-6 py-3 rounded-full text-sm sm:text-base"
        >
          Upload Your Portfolio
        </motion.button>
      </div>
    </section>
  );
}

export default HeroAbout;
