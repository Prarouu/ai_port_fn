import { useState } from "react";
import axios from "axios";
import { Shrimp } from "lucide-react";

function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
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
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      {/* Glassmorphism Card */}
      <div className="w-full max-w-md mx-auto bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-10 flex flex-col items-center border border-white/30">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full mb-2 shadow-lg">
            <Shrimp className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-1">
            Sign in to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              ALYZER
            </span>
          </h2>
          <p className="text-gray-500 text-sm">
            Enter your account details below.
          </p>
        </div>
        <form className="space-y-8 w-full" onSubmit={handleLogin}>
          {/* Email input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full bg-white/60 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-base py-3 px-4 rounded-xl placeholder-gray-400 shadow-sm focus:outline-none"
              required
            />
          </div>

          {/* Password input */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/60 border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all text-base py-3 px-4 rounded-xl placeholder-gray-400 shadow-sm focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Sign In
          </button>

          <div className="text-center text-blue-600 text-sm mt-2">
            <a href="#" className="hover:underline">
              Forgot your password?
            </a>
          </div>
        </form>
        <div className="mt-8 text-sm text-gray-500 text-center">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-blue-600 hover:underline font-semibold"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
