import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

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
      { name: "Case Studies", desc: "Real-world Pilot Program Results", icon: "📑", path: "/case-studies" },
    ],
    Safety: [
      { name: "Driver Protocol", desc: "Roadside Safety Guidelines", icon: "🚗", path: "/safety" },
      { name: "Emergency Fleet", desc: "Management for Hospitals", icon: "🚑", path: "/safety/fleet" },
      { name: "Training", desc: "Certification For Civic Drivers", icon: "🏅", path: "/safety/training" },
    ],
    Solutions: [
      { name: "Hardware Lineup", desc: "Explore our full range of devices", icon: "📟", path: "/device" },
      { name: "Fleet Solutions", desc: "Enterprise-grade hardware bundles", icon: "🚚", path: "/safety/fleet" },
      { name: "Plans & Pricing", desc: "Choose the best protection package", icon: "💎", path: "/pricing" },
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
          <div className="flex items-center gap-2 lg:gap-4">
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

            <div className="hidden sm:flex items-center gap-2 lg:gap-4">
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
                    className="text-sm font-bold text-slate-700 hover:text-primary transition-colors px-2"
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

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-primary transition-all"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 glass border-t border-slate-100 overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "max-h-screen opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
          }`}>
          <div className="p-6 space-y-4 bg-white/50 backdrop-blur-xl">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex items-center bg-white rounded-2xl px-4 py-3 border border-slate-200">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="bg-transparent text-sm border-none outline-none flex-1 font-bold"
              />
              <button type="submit" className="text-primary cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            <div className="space-y-1">
              {Object.keys(menuItems).map((menu) => (
                <div key={menu} className="border-b border-slate-100 last:border-0 pb-2">
                  <button
                    onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === menu ? null : menu)}
                    className={`w-full flex items-center justify-between py-3 px-2 font-black text-sm uppercase tracking-wider transition-colors ${activeMobileSubmenu === menu ? "text-primary" : "text-slate-900"}`}
                  >
                    {menu}
                    <span className={`transition-transform duration-300 ${activeMobileSubmenu === menu ? "rotate-180" : ""}`}>▾</span>
                  </button>

                  <div className={`grid transition-all duration-300 ease-in-out ${activeMobileSubmenu === menu ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden space-y-3 px-2">
                      {menuItems[menu].map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-3 py-2 group"
                        >
                          <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                          <div>
                            <p className="text-sm font-bold text-slate-800">{item.name}</p>
                            <p className="text-[10px] text-slate-500 font-medium">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Auth Bottom */}
            <div className="pt-4 border-t border-slate-100 sm:hidden">
              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl">
                    <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-black">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{user.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{user.userType}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => { navigate("/dashboard"); setIsMobileMenuOpen(false); }}
                      className="py-3 px-4 rounded-xl bg-slate-900 text-white text-xs font-black uppercase tracking-widest"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                      className="py-3 px-4 rounded-xl bg-slate-100 text-red-500 text-xs font-black uppercase tracking-widest"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => { navigate("/login"); setIsMobileMenuOpen(false); }}
                    className="py-3 px-4 rounded-xl border border-slate-200 text-slate-700 text-xs font-black uppercase tracking-widest"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => { navigate("/register"); setIsMobileMenuOpen(false); }}
                    className="py-3 px-4 rounded-xl bg-primary text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/20"
                  >
                    Join
                  </button>
                </div>
              )}
            </div>
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
              <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Premium Partner Data</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;