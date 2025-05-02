export default function Footer() {
    return (
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo / Brand */}
          <div>
            <h2 className="text-xl font-semibold mb-2">AI Portfolio Analyzer</h2>
            <p className="text-sm text-gray-400">Empowering your AI journey with insights and job matches.</p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/login" className="hover:text-white">Login</a></li>
              <li><a href="/signup" className="hover:text-white">Sign Up</a></li>
            </ul>
          </div>
  
          {/* Contact / Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li><a href="mailto:support@aianalyzer.com" className="hover:text-white">support@aianalyzer.com</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Note */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} AI Portfolio Analyzer. All rights reserved.
        </div>
      </footer>
    );
  }