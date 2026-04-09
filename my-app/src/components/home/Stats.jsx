import React from "react";

const Stats = () => {
  const stats = [
    { label: "Annual Lives Lost", value: "150,000+", icon: "📉", detail: "Due to emergency vehicle delays" },
    { label: "Congestion Delay", value: "30%", icon: "🚦", detail: "Average time lost in city traffic" },
    { label: "Potential Lives Saved", value: "40%", icon: "❤️", detail: "With faster emergency response" },
    { label: "Response Threshold", value: "500m", icon: "📡", detail: "Minimum detection distance" },
  ];

  return (
    <div id="statistics" className="bg-slate-900 py-24 px-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            The Impact of Every <span className="text-primary italic">Second</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Emergency response time is the difference between life and death. Our technology aims to bridge that gap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-slate-800/50 border border-slate-700 p-8 rounded-[2rem] hover:bg-slate-800 transition-all group hover:-translate-y-2"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black text-white mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
                {stat.label}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
