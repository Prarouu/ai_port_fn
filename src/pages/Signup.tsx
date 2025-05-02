import { useState } from "react";
import axios from "axios";
import bg_img from "../assets/3D Abstract Black White Background.jpg";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await axios.post(
        "http://localhost:1337/api/auth/local/register",
        {
          username,
          email,
          password,
        }
      );
      console.log("Registration successful:", res.data);
      localStorage.setItem("jwt", res.data.jwt);
      // Redirect to login or dashboard page
      window.location.href = "/login"; // Adjust the redirect as needed
    } catch (error) {
      console.error("Registration failed:", error);
      console.log("Error registering");
    }
  };

  return (
    <div className="flex h-screen w-full font-sans">
      {/* Left visual section */}
      <div className="hidden md:block w-1/2 h-full relative">
        <img src={bg_img} alt="Visual" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-700/20 flex items-center justify-center text-white text-8xl font-semibold md:text-7xl lg:text-8xl xl:text-9xl">
          Join the AI Revolution
        </div>
      </div>

      {/* Right form section */}
      <div className="w-full md:w-1/2 bg-zinc-900 flex items-center justify-center px-6">
        <div className="w-full max-w-md text-white">
          <h2 className="text-3xl font-bold mb-2">
            Create your ALYZER account
          </h2>
          <p className="text-gray-400 mb-8 text-sm">
            Fill in the details to get started.
          </p>

          <form className="space-y-8">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                placeholder="Full Name"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-transparent border-b border-zinc-700 focus:outline-none focus:border-gray-500 transition-all text-sm py-2 placeholder-gray-400"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-zinc-700 focus:outline-none focus:border-gray-500 transition-all text-sm py-2 placeholder-gray-400"
              />
            </div>

            {/* Password */}
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
              onClick={handleRegister}
              className="w-full bg-white text-black hover:bg-gray-600 hover:text-white transition-colors py-2 rounded-md font-semibold text-sm"
            >
              Signup
            </button>
          </form>

          <div className="mt-8 text-sm text-gray-400 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-white hover:underline">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
