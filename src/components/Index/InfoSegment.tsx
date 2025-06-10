import { BrainCircuit, BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";

function InfoSegment() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="w-11/12 max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Optimize your portfolio,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                find the right job
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Leverage the power of AI to enhance your career prospects
            </p>
          </motion.div>

          {/* Info Boxes */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1 */}
            <motion.div variants={itemVariants} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-xl p-8 h-full flex flex-col items-center text-center space-y-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl">
                  <BrainCircuit className="text-white w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-800">
                  AI Portfolio Insights
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Utilize AI to identify your strengths and weaknesses in your
                  portfolio, getting personalized recommendations for
                  improvement.
                </p>
              </div>
            </motion.div>

            {/* Box 2 */}
            <motion.div variants={itemVariants} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-xl p-8 h-full flex flex-col items-center text-center space-y-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl">
                  <BriefcaseBusiness className="text-white w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-800">
                  Job Matching
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Discover job opportunities that perfectly align with your
                  skills and experience, powered by advanced AI matching
                  algorithms.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default InfoSegment;
