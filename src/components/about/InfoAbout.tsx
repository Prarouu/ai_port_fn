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
    icon: <ShieldCheck className="h-8 w-8 text-slate-600 mb-4" />,
    title: "Secure & Reliable",
    description:
      "Your data and portfolio are kept safe and never shared without permission.",
  },
  {
    icon: <Zap className="h-8 w-8 text-slate-600 mb-4" />,
    title: "Fast AI Analysis",
    description:
      "Our smart AI evaluates your portfolio instantly and with precision.",
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-slate-600 mb-4" />,
    title: "User-Friendly Dashboard",
    description:
      "Simple and elegant UI that’s easy to navigate, even for beginners.",
  },
];

const steps = [
  {
    icon: <UploadCloud className="h-8 w-8 text-white " />,
    title: "Upload Portfolio",
    description: "Add your AI projects or resume to begin analysis.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-white " />,
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
      <section className="w-11/12 max-w-5xl mx-auto py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-slate-700"
        >
          How It Works
        </motion.h2>

        <div className="relative border-l-2 border-slate-200 pl-6 space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Icon inside circle */}
              <div className="text-white my-2 -left-5 p-2 sm:-left-5 top-0 bg-slate-800 rounded-full h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center">
                {step.icon}
              </div>

              {/* Content */}
              <div className="ml-2 sm:ml-0">
                <h3 className="text-base sm:text-xl font-semibold text-slate-700">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-500 mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-24 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
          Why Choose Us?
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center"
            >
              {feature.icon}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-700">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default InfoAbout;
