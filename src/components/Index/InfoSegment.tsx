import { BrainCircuit, BriefcaseBusiness, BarChart3, Target } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    icon: <BrainCircuit className="w-6 h-6 text-[#00ff88]" />,
    title: "AI Portfolio Insights",
    description:
      "Deep analysis of your projects, skills, and experience. Get a clear picture of your strengths and the gaps holding you back.",
  },
  {
    number: "02",
    icon: <BriefcaseBusiness className="w-6 h-6 text-[#00ff88]" />,
    title: "Smart Job Matching",
    description:
      "Our algorithms cross-reference your portfolio against thousands of live job listings to surface the roles that fit you best.",
  },
  {
    number: "03",
    icon: <BarChart3 className="w-6 h-6 text-[#00ff88]" />,
    title: "Skill Gap Analysis",
    description:
      "Know exactly what skills to develop next. Prioritized, actionable recommendations based on market demand.",
  },
  {
    number: "04",
    icon: <Target className="w-6 h-6 text-[#00ff88]" />,
    title: "Career Trajectory",
    description:
      "Understand where you stand in your field and what it takes to move to the next level — backed by real data.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function InfoSegment() {
  return (
    <div className="w-full bg-[#080808] border-t border-[#1a1a1a] py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs text-[#00ff88] uppercase tracking-widest font-medium mb-4">
            What We Do
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-xl"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Everything you need to
              <br />
              <span className="text-[#00ff88]">accelerate your career.</span>
            </h2>
            <p className="text-[#555] text-sm max-w-sm leading-relaxed lg:text-right">
              Built for AI professionals who want clarity, not guesswork. Every
              feature is designed around one goal — getting you hired.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[#1a1a1a] mb-0" />

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 divide-y divide-[#1a1a1a] md:divide-y-0"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              variants={itemVariants}
              className={`group p-8 border-[#1a1a1a] hover:bg-[#0f0f0f] transition-colors duration-300 cursor-default
                ${index % 2 === 0 ? "md:border-r" : ""}
                ${index < 2 ? "md:border-b" : ""}
                border-b last:border-b-0 md:last:border-b-0
              `}
            >
              <div className="flex items-start gap-5">
                <span
                  className="text-xs font-mono text-[#333] group-hover:text-[#00ff88] transition-colors mt-1 shrink-0 w-6"
                  style={{ fontFamily: 'monospace' }}
                >
                  {feature.number}
                </span>
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#1a1a1a] group-hover:bg-[#00ff88]/10 flex items-center justify-center transition-colors">
                    {feature.icon}
                  </div>
                  <h3
                    className="text-lg font-semibold text-white"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#555] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="border-t border-[#1a1a1a]" />
      </div>
    </div>
  );
}

export default InfoSegment;
