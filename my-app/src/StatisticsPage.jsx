import React from "react";
import Stats from "./Stats";
import LiveMap from "./LiveMap";

const StatisticsPage = () => {
  return (
    <div className="min-h-screen pt-20 text-slate-900">
      <div className="relative bg-white py-32 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 flex items-center justify-center -skew-x-12 translate-x-16">
          <div className="skew-x-12 -translate-x-16 text-[20rem] opacity-[0.03] font-black italic select-none">DATA</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <div className="inline-block px-4 py-1 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                Analytical Report — Q1 2026
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-10">
                Seconds Save <br />
                <span className="text-primary italic">Lives</span>.
              </h1>
              <div className="flex gap-12 border-t border-slate-200 pt-10">
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase mb-2">Total Deployments</p>
                  <p className="text-3xl font-black italic">148,000+</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase mb-2">Avg. Time Saved</p>
                  <p className="text-3xl font-black italic text-primary">-4.2min</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full lg:max-w-md">
              <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-100 relative group transition-transform hover:-rotate-1">
                <div className="absolute -top-4 -right-4 bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center font-black text-xl shadow-xl shadow-primary/30 group-hover:scale-110 transition-transform">
                  99%
                </div>
                <h4 className="text-xl font-black mb-4">Precision Metric</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Our latest data reflects a significant increase in situational awareness among civic drivers during emergency periods.
                </p>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Stats />

      <div className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { title: "Urban centers", value: "32%", detail: "Faster response in high-density city traffic." },
              { title: "Highway systems", value: "1.2km", detail: "Early detection range on open roads." },
              { title: "False Positives", value: "< 0.1%", detail: "Industry-leading accuracy in noise filtering." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-4">{item.title}</p>
                <h4 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">{item.value}</h4>
                <p className="text-slate-500 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Real-world Case Studies</h3>
          <p className="text-slate-501 mb-12">
            In our pilot program in New Delhi, emergency response times dropped by an average of 4.2 minutes during peak rush hour periods.
          </p>
          <div className="relative">
            <LiveMap />
            <div className="absolute top-6 left-6 z-[1000] bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-xl border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-900">Live Pilot Map: New Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
