import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import localImage from "./assets/a.jpeg";

const Hero = () => {
  const navigate = useNavigate();
  const images = [
    "https://images.unsplash.com/photo-1587740896339-96a76170508d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
    localImage
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        <div className="order-2 lg:order-1 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-100 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Real-time Detection Active
          </div>

          <h2 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Clearing Paths, <br />
            <span className="text-primary italic">Saving Lives</span>.
          </h2>

          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Our intelligent AI-powered clip detects emergency sirens from <strong>500 meters away</strong>, instantly alerting drivers via mobile notification to give way. Every second counts.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/device")}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-primary/30 transition-all hover:-translate-y-1 active:translate-y-0"
              >
                Get the Device
              </button>
              <button
                onClick={() => navigate("/demo")}
                className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl text-lg font-bold transition-all hover:border-slate-300"
              >
                Watch Demo
              </button>
            </div>

            <div className="p-1 px-1 bg-slate-100/50 rounded-[2rem] w-fit flex gap-2">
              <button
                onClick={() => navigate("/register", { state: { type: "car" } })}
                className="bg-white text-slate-900 px-6 py-3 rounded-[1.5rem] text-sm font-bold shadow-sm hover:shadow-md transition-all border border-slate-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                🚗 Register Car
              </button>
              <button
                onClick={() => navigate("/register", { state: { type: "ambulance" } })}
                className="bg-white text-primary px-6 py-3 rounded-[1.5rem] text-sm font-bold shadow-sm hover:shadow-md transition-all border border-red-100 hover:-translate-y-0.5 active:translate-y-0"
              >
                🚑 Register Ambulance
              </button>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 font-medium">
              Join <span className="text-slate-900 font-bold">10,000+</span> proactive drivers saving lives daily.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative animate-in fade-in zoom-in duration-1000">
          <div className="relative aspect-square w-full max-w-[500px] mx-auto">
            {/* Main Image */}
            <div className="absolute inset-0 bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl animate-float">
              <img
                src={images[current]}
                className="w-full h-full object-cover transition-opacity duration-1000"
                alt="ambulance"
              />
            </div>

            {/* Floating UI Elements */}
            <div className="absolute -top-4 -right-4 glass p-4 rounded-2xl shadow-xl animate-float [animation-delay:1s]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  🔔
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">New Alert</p>
                  <p className="text-sm font-bold text-slate-800">Clear path - 300m</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-3xl shadow-xl animate-float [animation-delay:2s]">
              <div className="text-3xl font-bold text-primary mb-1">98%</div>
              <p className="text-xs font-bold text-slate-500">Detection Accuracy</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;