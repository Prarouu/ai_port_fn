import { motion } from "framer-motion";

import {
  UploadCloud,
  BrainCircuit,
  BriefcaseBusiness,
  Rocket,
} from "lucide-react";
import { ShieldCheck, Zap, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-blue-600 mb-4" />,
    title: "Secure & Reliable",
    description:
      "Your data and portfolio are kept safe and never shared without permission.",
  },
  {
    icon: <Zap className="h-10 w-10 text-blue-600 mb-4" />,
    title: "Fast AI Analysis",
    description:
      "Our smart AI evaluates your portfolio instantly and with precision.",
  },
  {
    icon: <LayoutDashboard className="h-10 w-10 text-blue-600 mb-4" />,
    title: "User-Friendly Dashboard",
    description:
      "Simple and elegant UI that's easy to navigate, even for beginners.",
  },
];

const steps = [
  {
    icon: <UploadCloud className="h-8 w-8 text-white" />,
    title: "Upload Portfolio",
    description: "Add your AI projects or resume to begin analysis.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-white" />,
    title: "Get Smart Insights",
    description: "Let our AI evaluate your skills and identify gaps.",
  },
  {
    icon: <BriefcaseBusiness className="h-8 w-8 text-white" />,
    title: "Match with Jobs",
    description: "Explore opportunities tailored to your AI strengths.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-white" />,
    title: "Launch Your Career",
    description: "Apply confidently and grow in your AI journey.",
  },
];

function InfoAbout() {
  return (
    <>
      <section className="w-11/12 max-w-6xl mx-auto py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800"
        >
          How It Works
        </motion.h2>

        <div className="relative border-l-2 border-blue-200 pl-8 space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -left-10 top-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full h-14 w-14 flex items-center justify-center shadow-lg">
                {step.icon}
              </div>

              <div className="ml-4 sm:ml-8 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-8 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800"
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-blue-50 p-4 rounded-xl inline-block mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-800">
                {feature.title}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default InfoAbout;
