import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Detection",
      description: "The hardware clip detects the specific frequency of sirens within a 500-meter radius.",
      icon: "🛰️"
    },
    {
      step: "02",
      title: "Processing",
      description: "On-board AI filters out street noise to confirm an actual emergency vehicle is approaching.",
      icon: "🧠"
    },
    {
      step: "03",
      title: "Alerting",
      description: "A high-priority notification is broadcasted to all nearby registered mobile devices.",
      icon: "📲"
    },
    {
      step: "04",
      title: "Clearing",
      description: "Drivers receive a clear visual/audio signal to move aside, saving critical seconds.",
      icon: "🛣️"
    }
  ];

  return (
    <div id="technology" className="py-24 px-6 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">The Workflow</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Four Steps to <span className="text-primary italic">Saving Lives</span>
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our system operates with zero latency, ensuring that every driver is alerted long before the siren is audible to the human ear.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((s, idx) => (
              <div key={idx} className="group">
                <div className="bg-slate-800 border border-slate-700 p-8 rounded-[2.5rem] hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
                  {/* Step Number Background */}
                  <div className="absolute -top-4 -right-4 text-8xl font-black text-white/5 group-hover:text-primary/10 transition-colors">
                    {s.step}
                  </div>
                  
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 border border-slate-700">
                    {s.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {s.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
