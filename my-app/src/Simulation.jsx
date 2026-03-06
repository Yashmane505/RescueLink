import React, { useState } from "react";

const Simulation = () => {
  const [isActive, setIsActive] = useState(false);
  const [distance, setDistance] = useState(500);

  const startSimulation = () => {
    setIsActive(true);
    let dist = 500;
    const interval = setInterval(() => {
      dist -= 10;
      setDistance(dist);
      if (dist <= 0) {
        clearInterval(interval);
        setTimeout(() => {
          setIsActive(false);
          setDistance(500);
        }, 3000);
      }
    }, 100);
  };

  return (
    <div className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Live simulation</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-8">
              See the Alert in <span className="text-primary italic">Action</span>
            </h3>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              Don't wait for an emergency to see how it works. Trigger our simulation to experience how the mobile alert system communicates with the hardware clip.
            </p>
            
            <button 
              onClick={startSimulation}
              disabled={isActive}
              className={`px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl ${
                isActive 
                ? "bg-slate-100 text-slate-400 cursor-not-allowed" 
                : "bg-primary text-white hover:bg-primary-dark shadow-primary/30 hover:-translate-y-1 active:translate-y-0"
              }`}
            >
              {isActive ? "Simulation Running..." : "Start Simulation"}
            </button>
          </div>

          <div className="relative flex justify-center">
            {/* Phone Mockup */}
            <div className="w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
              
              {/* Screen Content */}
              <div className="absolute inset-0 bg-slate-100 flex flex-col p-6 pt-12">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-xs font-bold text-slate-400">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-slate-300 rounded-sm"></div>
                    <div className="w-4 h-2 bg-slate-300 rounded-sm"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-slate-200 rounded-full"></div>
                  <div className="h-4 w-1/2 bg-slate-200 rounded-full"></div>
                </div>

                {/* Notification Alert */}
                {isActive && (
                  <div className="mt-10 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="bg-white p-4 rounded-2xl shadow-xl border-l-4 border-primary">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-primary/10 p-1.5 rounded-lg text-lg">🚑</div>
                        <span className="text-[10px] font-black uppercase text-primary tracking-widest">RescueLink Alert</span>
                        <span className="text-[10px] text-slate-400 ml-auto font-bold underline">Now</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Ambulance Approaching!</h4>
                      <p className="text-[11px] text-slate-500 mb-3">Please clear the left lane. Vehicle is {distance}m away.</p>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-primary h-full transition-all duration-100" 
                          style={{ width: `${((500 - distance) / 500) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Floating Hardware Clip Mockup */}
            <div className="absolute -bottom-10 -right-10 glass p-6 rounded-[2rem] shadow-2xl w-48 border border-slate-200 animate-float">
               <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white text-xs font-bold italic">
                    RL
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Pro Clip v2</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-primary animate-pulse' : 'bg-green-500'}`}></div>
                 <span className="text-[10px] font-bold text-slate-800">{isActive ? 'Detecting Siren...' : 'Monitoring Active'}</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulation;
