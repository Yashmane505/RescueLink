import React from "react";

const Safety = () => {
  const tips = [
    { title: "Give Way Early", text: "Pull over to the nearest curb as soon as you receive an alert.", icon: "🚑" },
    { title: "Don't Panic", text: "Avoid sudden stops or sharp turns. Stay predictable for other drivers.", icon: "🧘" },
    { title: "Focus Everywhere", text: "Keep an eye on mirrors. Emergency vehicles might come from behind.", icon: "👀" },
    { title: "Clear Intersection", text: "Never block intersections. Move forward or sideways to clear the path.", icon: "🛑" },
  ];

  return (
    <div id="safety" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-extrabold text-sm uppercase tracking-widest mb-4">Safety First</h2>
          <h3 className="text-4xl font-black text-slate-900 tracking-tight">
            How to React to <span className="text-primary italic">Emergency Alerts</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-6">{tip.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{tip.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                {tip.text}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-primary/5 rounded-[3rem] p-12 flex flex-col items-center text-center border border-primary/10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 text-glow">Ready to make the roads safer?</h3>
          <p className="text-slate-600 mb-8 max-w-xl">
            Join thousands of active users helping clear the way for life-saving vehicles. Download the RescueLink app today.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.apple.com/app-store/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-slate-900/20 flex items-center gap-2 hover:-translate-y-1 transition-transform"
            >
              <span>App Store</span>
            </a>
            <a 
              href="https://play.google.com/store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-slate-900/20 flex items-center gap-2 hover:-translate-y-1 transition-transform"
            >
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;
