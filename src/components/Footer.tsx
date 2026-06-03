import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        {/* Top section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#1a1a1a]">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2 w-fit">
              <div className="w-7 h-7 bg-[#00ff88] rounded-sm flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-[#080808]" strokeWidth={2.5} />
              </div>
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Alyzer
              </span>
            </Link>
            <p className="text-[#555] text-sm leading-relaxed max-w-xs">
              AI-powered portfolio analysis and job matching for the next
              generation of AI professionals.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {[
                { href: "https://github.com", icon: <Github className="w-4 h-4" /> },
                { href: "https://twitter.com", icon: <Twitter className="w-4 h-4" /> },
                { href: "https://linkedin.com", icon: <Linkedin className="w-4 h-4" /> },
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#444] hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest">
              Product
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Log In", to: "/login" },
                { label: "Sign Up", to: "/signup" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[#555] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest">
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", to: "/privacy" },
                { label: "Terms of Service", to: "/terms" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[#555] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:support@alyzer.ai"
                  className="text-[#555] hover:text-white text-sm transition-colors flex items-center gap-1"
                >
                  support@alyzer.ai
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#333] text-xs">
            © {currentYear} Alyzer. All rights reserved.
          </p>
          <p className="text-[#333] text-xs">
            Built for AI professionals.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
