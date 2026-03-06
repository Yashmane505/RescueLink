import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search)}`);
      setSearch("");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = {
    Technology: [
      { name: "Detection Engine", desc: "Acoustic AI & Siren Fingerprinting", icon: "🧠", path: "/technology" },
      { name: "Hardware Specs", desc: "Gen-2 Pro Clip Specifications", icon: "📟", path: "/device" },
      { name: "Cloud Network", desc: "Real-time Broadcast Infrastructure", icon: "☁️", path: "/technology/cloud" },
    ],
    Statistics: [
      { name: "Our Impact", desc: "Global Response Time Reduction", icon: "📉", path: "/statistics" },
      { name: "Case Studies", desc: "Real-world Pilot Program Results", icon: "📑", path: "/statistics" },
      { name: "Live Data", desc: "Active Device Network Status", icon: "📡", path: "/demo" },
    ],
    Safety: [
      { name: "Driver Protocol", desc: "Roadside Safety Guidelines", icon: "🚗", path: "/safety" },
      { name: "Emergency Fleet", desc: "Management for Hospitals", icon: "🚑", path: "/safety/fleet" },
      { name: "Training", desc: "Certification For Civic Drivers", icon: "🏅", path: "/safety/training" },
    ],
    Solutions: [
      { name: "Plans & Pricing", desc: "Choose the best protection package", icon: "💎", path: "/pricing" },
      { name: "Enterprise Sales", desc: "Custom municipal solutions", icon: "🤝", path: "/pricing" },
      { name: "Order Device", desc: "Direct purchase Gen-2 Pro Clip", icon: "📦", path: "/device" },
    ]
  };

  return (
    <nav
      onMouseLeave={() => setActiveMenu(null)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || activeMenu ? "glass shadow-xl py-2" : "bg-transparent py-4 text-slate-900"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer shrink-0">
            <div className="bg-primary p-2 rounded-2xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-primary/20">
              <span className="text-2xl">🚑</span>
            </div>
            <h1 className="text-xl font-black tracking-tighter">
              Rescue<span className="text-primary italic">Link</span>
            </h1>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden lg:flex items-center gap-2 font-bold text-sm">
            {Object.keys(menuItems).map((menu) => (
              <li
                key={menu}
                onMouseEnter={() => setActiveMenu(menu)}
                className={`px-4 py-2 rounded-xl cursor-default transition-all duration-300 ${activeMenu === menu ? "bg-slate-100 text-primary" : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                <div className="flex items-center gap-1">
                  {menu}
                  <span className={`transition-transform duration-300 ${activeMenu === menu ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <form onSubmit={handleSearch} className="hidden lg:flex items-center bg-slate-100/80 rounded-full px-4 py-1.5 border border-slate-200 focus-within:ring-2 ring-primary/20 transition-all">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tech..."
                className="bg-transparent text-sm border-none outline-none w-24 focus:w-40 transition-all duration-300 text-slate-700 font-bold"
              />
              <button type="submit" className="text-slate-400 hover:text-primary transition-colors cursor-pointer ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            {user ? (
              <div className="flex items-center gap-4">
                <Link to="/dashboard" className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-2xl border border-slate-200 shadow-sm hover:bg-slate-200 transition-colors group">
                  <div className="w-6 h-6 bg-primary text-white text-[10px] rounded-full flex items-center justify-center font-black group-hover:scale-110 transition-transform">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-xs font-bold text-slate-700 max-w-[80px] truncate">{user.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="text-xs font-bold text-red-500 hover:text-red-700 transition-colors uppercase tracking-widest px-2"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="hidden sm:block text-sm font-bold text-slate-700 hover:text-primary transition-colors px-2"
                >
                  Login
                </button>

                <button
                  onClick={() => navigate("/register")}
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-black shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5"
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <div className={`absolute top-full left-0 right-0 overflow-hidden transition-all duration-500 ease-in-out ${activeMenu ? "max-h-[400px] opacity-100 border-t border-slate-100 bg-white shadow-2xl" : "max-h-0 opacity-0 bg-transparent pointer-events-none"
          }`}>
          <div className="max-w-7xl mx-auto p-8 grid grid-cols-3 gap-8">
            {activeMenu && menuItems[activeMenu].map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                onClick={() => setActiveMenu(null)}
                className="group flex gap-4 p-4 rounded-3xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 mb-1">{item.name}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="bg-slate-50 p-4 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Safety Network Infrastructure</p>
              <Link to="/demo" className="text-xs font-bold text-primary hover:underline">Watch Live Demo →</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;