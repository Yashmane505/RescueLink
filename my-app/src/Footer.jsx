import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Footer = () => {
  const { user } = useAuth();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-xl text-xl">🚑</div>
              <h1 className="text-xl font-bold tracking-tight text-white">
                Rescue<span className="text-primary">Link</span>
              </h1>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Innovative AI-powered siren detection system. Helping emergency vehicles reach faster and save lives across the globe.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/technology" className="hover:text-primary transition-colors">Technology</Link></li>
              <li><Link to="/device" className="hover:text-primary transition-colors">The Clip Device</Link></li>
              <li><Link to="/demo" className="hover:text-primary transition-colors">Watch Demo</Link></li>
              {!user && <li><Link to="/register" className="hover:text-primary transition-colors">Join Now</Link></li>}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/statistics" className="hover:text-primary transition-colors">Impact & Stats</Link></li>
              <li><Link to="/case-studies" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              {!user && <li><Link to="/register" className="hover:text-primary transition-colors">Register</Link></li>}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/safety" className="hover:text-primary transition-colors">Safety Guides</Link></li>
              <li><Link to="/device" className="hover:text-primary transition-colors">Device Setup</Link></li>
              {!user ? (
                <li><Link to="/login" className="hover:text-primary transition-colors">User Login</Link></li>
              ) : (
                <li><Link to="/dashboard" className="hover:text-primary transition-colors">My Dashboard</Link></li>
              )}
              <li className="text-primary font-bold">
                <a href="tel:102" className="hover:underline">102</a> | <a href="tel:108" className="hover:underline">108</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} RescueLink Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500 text-xs">
            <Link to="/legal/privacy" className="hover:text-white cursor-pointer transition-colors">Privacy Policy</Link>
            <Link to="/legal/terms" className="hover:text-white cursor-pointer transition-colors">Terms of Service</Link>
            <Link to="/legal/cookies" className="hover:text-white cursor-pointer transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;