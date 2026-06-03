import { useState } from "react";
import axios from "axios";
import { Zap, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:1337/api/auth/local", {
        identifier,
        password,
      });
      localStorage.setItem("jwt", response.data.jwt);
      window.location.href = "/";
    } catch {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#080808] grid-bg px-4">
      {/* Radial glow */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] rounded-full bg-[#00ff88]/4 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-[#00ff88] rounded-sm flex items-center justify-center">
              <Zap className="w-4 h-4 text-[#080808]" strokeWidth={2.5} />
            </div>
            <span className="text-white font-bold text-xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Alyzer
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-white text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Welcome back
          </h1>
          <p className="text-[#555] text-sm mt-2 text-center">
            Sign in to your account to continue
          </p>
        </div>

        {/* Form card */}
        <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-sm p-8">
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs text-[#555] uppercase tracking-widest font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full bg-[#080808] border border-[#222] focus:border-[#00ff88] text-white placeholder-[#333] text-sm py-3 px-4 rounded-sm outline-none transition-colors"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#555] uppercase tracking-widest font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#080808] border border-[#222] focus:border-[#00ff88] text-white placeholder-[#333] text-sm py-3 px-4 pr-10 rounded-sm outline-none transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#444] hover:text-[#888] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-xs text-[#555] hover:text-[#00ff88] transition-colors">
                Forgot password?
              </a>
            </div>

            {error && (
              <p className="text-red-400 text-xs border border-red-400/20 bg-red-400/5 rounded-sm px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 rounded-sm text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        <p className="text-center text-[#444] text-sm mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#00ff88] hover:underline font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
