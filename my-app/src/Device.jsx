import React from "react";
import { useNavigate } from "react-router-dom";

const Device = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">The Hardware</h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
              Meet the <span className="italic text-primary">RescueLink</span> Clip.
            </h3>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Engineered with high-precision acoustic sensors and a weather-resistant shell, our Gen-2 clip is designed to mount easily on any dashboard or exterior grill.
            </p>
            
            <div className="space-y-6 mb-12">
               {[
                 { title: "Military Grade Sensors", desc: "Detects frequencies between 500Hz - 2000Hz with zero lag." },
                 { title: "Long Life Power", desc: "Up to 3 years of battery life with built-in solar harvesting." },
                 { title: "Universal Fit", desc: "Compatible with all vehicles from bikes to heavy trucks." }
               ].map((item, idx) => (
                 <div key={idx} className="flex gap-4">
                   <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs shrink-0">✓</div>
                   <div>
                     <h4 className="font-bold text-slate-900">{item.title}</h4>
                     <p className="text-slate-500 text-sm">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-slate-900/30 hover:-translate-y-1 transition-all">
                Pre-order Package — $49
              </button>
              <button 
                onClick={() => navigate("/demo")}
                className="bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all"
              >
                See Performance
              </button>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000">
            <div className="aspect-square bg-white rounded-[4rem] shadow-2xl p-12 flex items-center justify-center border border-slate-100 relative group overflow-hidden">
               {/* Decorative Circle */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent scale-150 group-hover:scale-110 transition-transform duration-1000"></div>
               
               <div className="text-[12rem] animate-float relative z-10">📟</div>
               
               <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
                 Gen-2 Pro Series
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Device;
