import React from "react";
import Safety from "./Safety";

const SafetyPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="relative py-32 px-6 flex items-center justify-center overflow-hidden border-b border-slate-100">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e11d48_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-20 h-20 bg-primary/10 rounded-[2.5rem] flex items-center justify-center text-4xl mx-auto mb-10 shadow-inner">🛡️</div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-8">
            The Safety <br />
            <span className="text-primary italic">Standard</span>.
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Standardizing the response protocol across urban infrastructure. Whether you're driving or walking, our guides ensure everyone stays safe.
          </p>
        </div>
      </div>

      <Safety />

      <div className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-black text-slate-900 mb-12 text-center">Safety Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "For Private Drivers", guide: "Maintain awareness of your surroundings. When an alert triggers, check your mirrors immediately and signal your intention to pull over." },
              { title: "For Public Transport", guide: "Bus drivers should coordinate clear lane changes. Do not block bus stops if they are located at narrow passages." },
              { title: "For Pedestrians", guide: "Do not cross the street when you hear or see an emergency vehicle approaching, even if you have a green light." },
              { title: "For Heavy Vehicles", guide: "Large trucks should move to the slow lane (leftmost) and maintain a steady speed while emergency vehicles overtake." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.guide}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyPage;
