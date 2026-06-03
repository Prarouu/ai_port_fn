import sarahimg from "../../assets/ProfileImages/sarah.png";
import guyimg from "../../assets/ProfileImages/guy.png";
import samimg from "../../assets/ProfileImages/sam.png";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "AI Engineer",
    company: "DeepMind",
    quote:
      "The portfolio analysis gave me a clear picture of exactly where I stood. Within two weeks, I had three interviews lined up at top AI companies.",
    avatar: sarahimg,
  },
  {
    name: "Jay R.",
    role: "ML Engineer",
    company: "OpenAI",
    quote:
      "Got matched to a role I didn't even know existed. The skill gap breakdown was shockingly accurate — it's like it read my mind.",
    avatar: guyimg,
  },
  {
    name: "Sam K.",
    role: "Data Scientist",
    company: "Anthropic",
    quote:
      "Clean, fast, and genuinely useful. The AI didn't give me generic advice — it told me specifically what to fix. I got the job.",
    avatar: samimg,
  },
];

function ReviewSegment() {
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
            Social Proof
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Trusted by AI professionals
            <br />
            <span className="text-[#555]">who got results.</span>
          </h2>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#1a1a1a]">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-8 bg-[#080808] hover:bg-[#0f0f0f] transition-colors duration-300
                ${index < testimonials.length - 1 ? "md:border-r border-b md:border-b-0 border-[#1a1a1a]" : "border-b md:border-b-0 border-[#1a1a1a]"}
              `}
            >
              {/* Quote icon */}
              <Quote className="w-6 h-6 text-[#00ff88] mb-6 opacity-60" />

              {/* Quote text */}
              <p className="text-[#888] text-sm leading-relaxed mb-8">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-[#1a1a1a] pt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-[#555] text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewSegment;
