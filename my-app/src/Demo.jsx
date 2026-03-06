import React from "react";

const Demo = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-black text-sm uppercase tracking-widest mb-4">Product Demo</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8">
            Experience the <span className="italic text-primary italic">RescueLink</span> Impact
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Watch how our intelligent detection system transforms chaos into clear paths, reducing response times by up to 30% in high-traffic urban centers.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="relative aspect-video bg-slate-800 rounded-[3rem] shadow-2xl overflow-hidden border border-slate-700 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
          
          {/* Main Image Overlay */}
          <img 
            src="https://images.unsplash.com/photo-1516550130565-5d4367fc8562?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            alt="Demo thumbnail" 
          />

          {/* Central Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-4xl shadow-2xl shadow-primary/50 group-hover:scale-110 transition-transform duration-300">
              ▶
            </div>
          </div>

          <div className="absolute bottom-10 left-10 z-20">
            <h4 className="text-white text-xl font-bold mb-2 tracking-tight">System Performance Overview</h4>
            <div className="flex gap-4">
               <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">4:20 Duration</span>
               <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Live Testing</span>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
           {[
             { title: "Siren Detection", stat: "0.2s", desc: "Average response time from detection to mobile alert." },
             { title: "Range radius", stat: "500m", desc: "Maximum effective distance for acoustic sensors." },
             { title: "Accuracy", stat: "99.4%", desc: "Filtering success rate against non-emergency sirens." }
           ].map((item, idx) => (
             <div key={idx} className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">{item.title}</p>
                <h4 className="text-white text-4xl font-black mb-2">{item.stat}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Demo;
