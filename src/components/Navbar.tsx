import { useState } from "react";
import { Button } from "./ui/button";
import { Shrimp, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-gray-100 py-3 relative z-50"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <Shrimp className="text-black block sm:hidden" size={24} />{" "}
            <Shrimp
              className="text-black hidden sm:block md:hidden"
              size={36}
            />{" "}
            <Shrimp className="text-black hidden md:block" size={48} />{" "}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black">
              Alyzer
            </h1>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="sm:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
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
              className="text-slate-600 hover:text-gray-400 text-base"
            >
              About
            </Link>
          </li>
          <li className="flex space-x-2">
            <Button variant="ghost" className="rounded-full text-base">
              <Link to="/login">Login</Link>
            </Button>
            <Button className="bg-slate-800 text-white rounded-full text-base">
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
              className="fixed top-0 right-0 w-2/3 h-full bg-gray-100 shadow-lg z-50 sm:hidden"
            >
              <ul className="h-full flex flex-col space-y-4 py-8 px-6">
                <li>
                  <Link
                    to="/about"
                    onClick={() => setMenuOpen(false)}
                    className="text-center text-slate-700 hover:text-gray-500 text-base block"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full text-base rounded-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Link to="/login">Login</Link>
                  </Button>
                </li>
                <li>
                  <Button
                    className="w-full bg-slate-800 text-white text-base rounded-full"
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
