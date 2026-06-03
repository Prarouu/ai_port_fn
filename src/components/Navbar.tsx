import { useState, useEffect } from "react";
import { Zap, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [{ label: "About", path: "/about" }];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#222]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#00ff88] rounded-sm flex items-center justify-center">
            <Zap className="w-4 h-4 text-[#080808]" strokeWidth={2.5} />
          </div>
          <span className="text-white font-bold text-xl tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Alyzer
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? "text-[#00ff88]"
                  : "text-[#888] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm font-medium text-[#888] hover:text-white transition-colors px-4 py-2"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="btn-primary text-sm px-5 py-2 rounded-sm"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-[#888] hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-72 h-full bg-[#0f0f0f] border-l border-[#222] z-50 flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-[#222]">
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Menu</span>
                <button onClick={() => setMenuOpen(false)} className="text-[#888] hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-base font-medium py-3 border-b border-[#1a1a1a] transition-colors ${
                      isActive(link.path) ? "text-[#00ff88]" : "text-[#888] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-6 flex flex-col gap-3">
                  <Link to="/login" className="btn-outline text-sm text-center px-5 py-3 rounded-sm">
                    Log in
                  </Link>
                  <Link to="/signup" className="btn-primary text-sm text-center px-5 py-3 rounded-sm">
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
