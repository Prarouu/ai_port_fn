import { useState } from "react";
import axios from "axios";
import bg_img from "../assets/3D Abstract Black White Background.jpg";

function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:1337/api/auth/local",
        {
          identifier,
          password,
        }
      );
      console.log("Login successful:", response.data);
      localStorage.setItem("jwt", response.data.jwt);
    } catch (err) {
      console.error("Login failed:", err);
      console.log("Error logging in");
    }
  };

  return (
    <div className="flex h-screen w-full font-sans">
      {/* Left visual section */}
      <div className="hidden md:block w-1/2 h-full relative">
        <img src={bg_img} alt="Visual" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-700/20 flex items-center justify-center text-white text-8xl font-semibold md:text-7xl lg:text-8xl xl:text-9xl">
          Transform your career with AI
        </div>
      </div>

      {/* Right form section */}
      <div className="w-full md:w-1/2 bg-zinc-900 flex items-center justify-center px-6">
        <div className="w-full max-w-md text-white">
          <h2 className="text-3xl font-bold mb-2">Sign in to ALYZER</h2>
          <p className="text-gray-400 mb-8 text-sm">
            Enter your account details below.
          </p>
          <form className="space-y-8">
            {/* Email input */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full bg-transparent border-b border-zinc-700 focus:outline-none focus:border-gray-500 transition-all text-sm py-2 placeholder-gray-400"
              />
            </div>

            {/* Password input */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-zinc-700 focus:outline-none focus:border-gray-500 transition-all text-sm py-2 placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-600 hover:text-white transition-colors py-2 rounded-md font-semibold text-sm"
              onClick={handleLogin}
            >
              Sign In
            </button>

            <div className="text-center text-gray-400 text-sm mt-4">
              <a href="#" className="text-sm hover:underline">
                Forgot your password?
              </a>
            </div>
          </form>
          <div className="mt-8 text-sm text-gray-400 text-center">
            Don’t have an account?{" "}
            <a href="/signup" className="text-white hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
