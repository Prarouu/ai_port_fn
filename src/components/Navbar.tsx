import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Shrimp, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30"></div>
              <Shrimp
                className={`relative text-blue-700 block sm:hidden`}
                size={24}
              />
              <Shrimp
                className={`relative text-blue-700 hidden sm:block md:hidden`}
                size={36}
              />
              <Shrimp
                className={`relative text-blue-700 hidden md:block`}
                size={48}
              />
            </div>
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700`}
            >
              Alyzer
            </h1>
          </Link>
        </motion.div>

        {/* Hamburger Menu */}
        <div className="sm:hidden z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex items-center space-x-8">
          <li>
            <Link
              to="/about"
              className={`text-base font-medium transition-colors ${
                isActive("/about")
                  ? "text-blue-600"
                  : scrolled
                  ? "text-slate-600 hover:text-blue-600"
                  : "text-blue-700 hover:text-blue-400"
              }`}
            >
              About
            </Link>
          </li>
          <li className="flex space-x-4">
            <Button
              variant="ghost"
              className={`rounded-full text-base transition-colors text-blue-700 hover:bg-blue-50`}
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button
              className={`rounded-full text-base transition-all duration-300 ${
                scrolled
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                  : "bg-white text-slate-800 hover:bg-gray-100"
              }`}
            >
              <Link to="/signup">Sign Up</Link>
            </Button>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown with animation */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in menu */}
            <motion.div
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg z-50 sm:hidden"
            >
              <ul className="h-full flex flex-col space-y-6 py-12 px-8">
                <li>
                  <Link
                    to="/about"
                    onClick={() => setMenuOpen(false)}
                    className={`text-center text-lg font-medium block transition-colors ${
                      isActive("/about")
                        ? "text-blue-600"
                        : "text-slate-700 hover:text-blue-600"
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full text-base rounded-full hover:bg-gray-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Link to="/login">Login</Link>
                  </Button>
                </li>
                <li>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base rounded-full hover:shadow-lg transition-all duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
