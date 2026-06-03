import { motion } from "framer-motion";
import {
  UploadCloud, BrainCircuit, BriefcaseBusiness, Rocket,
  ShieldCheck, Zap, LayoutDashboard,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <UploadCloud className="w-5 h-5 text-[#00ff88]" />,
    title: "Upload Your Portfolio",
    description: "Add your AI projects, resume, or GitHub profile to begin. Supports PDF, DOC, and URL formats.",
  },
  {
    number: "02",
    icon: <BrainCircuit className="w-5 h-5 text-[#00ff88]" />,
    title: "Get Smart Insights",
    description: "Our AI evaluates your skills, project depth, and market relevance — identifying exactly where you stand.",
  },
  {
    number: "03",
    icon: <BriefcaseBusiness className="w-5 h-5 text-[#00ff88]" />,
    title: "Match with Jobs",
    description: "Explore curated opportunities tailored to your specific AI strengths and career goals.",
  },
  {
    number: "04",
    icon: <Rocket className="w-5 h-5 text-[#00ff88]" />,
    title: "Launch Your Career",
    description: "Apply confidently with a clear understanding of your value. Track your progress over time.",
  },
];

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#00ff88]" />,
    title: "Secure & Private",
    description: "Your data is encrypted and never shared without explicit permission. You stay in control.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#00ff88]" />,
    title: "Instant Analysis",
    description: "Results in under 30 seconds. No waiting, no queues — just immediate, actionable intelligence.",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-[#00ff88]" />,
    title: "Clean Dashboard",
    description: "Every insight presented with clarity. No noise, no bloat — just what you need to act.",
  },
];

function InfoAbout() {
  return (
    <>
      {/* How It Works */}
      <section className="w-full bg-[#080808] border-t border-[#1a1a1a] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-xs text-[#00ff88] uppercase tracking-widest font-medium mb-4">
              The Process
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              How it works.
            </h2>
          </motion.div>

          <div className="border-t border-[#1a1a1a]">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-start gap-8 py-8 border-b border-[#1a1a1a] hover:bg-[#0f0f0f] px-4 -mx-4 transition-colors duration-200"
              >
                <span className="text-xs font-mono text-[#333] group-hover:text-[#00ff88] transition-colors mt-1 w-8 shrink-0">
                  {step.number}
                </span>
                <div className="w-9 h-9 rounded-sm bg-[#1a1a1a] group-hover:bg-[#00ff88]/10 flex items-center justify-center shrink-0 transition-colors">
                  {step.icon}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between w-full gap-3">
                  <h3
                    className="text-lg font-semibold text-white sm:w-56 shrink-0"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#555] leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full bg-[#080808] border-t border-[#1a1a1a] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-xs text-[#00ff88] uppercase tracking-widest font-medium mb-4">
              Why Alyzer
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Built differently.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#1a1a1a]">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-8 hover:bg-[#0f0f0f] transition-colors duration-300
                  ${index < features.length - 1 ? "md:border-r border-b md:border-b-0 border-[#1a1a1a]" : ""}
                `}
              >
                <div className="w-12 h-12 rounded-sm bg-[#1a1a1a] group-hover:bg-[#00ff88]/10 flex items-center justify-center mb-6 transition-colors">
                  {feature.icon}
                </div>
                <h3
                  className="text-lg font-semibold text-white mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default InfoAbout;
