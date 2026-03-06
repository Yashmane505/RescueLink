import React from "react";

const Features = () => {
  const features = [
    {
      title: "Audio Recognition",
      description: "Advanced AI algorithms process siren frequencies in real-time to filter out background noise.",
      icon: "🔊",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Distance Estimation",
      description: "Calculates the distance of the approaching ambulance based on sound intensity and trend.",
      icon: "📏",
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Cloud Sync",
      description: "Instantly broadcasts location-based alerts to all nearby registered mobile devices.",
      icon: "☁️",
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Long Life Battery",
      description: "Solar-powered or long-life rechargeable battery ensuring 24/7 active monitoring.",
      icon: "🔋",
      color: "bg-amber-50 text-amber-600"
    }
  ];

  return (
    <div className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4">Core Technology</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Small Device, <br />
              <span className="text-slate-400">Massive Capabilities.</span>
            </h3>
          </div>
          <p className="max-w-md text-slate-500 text-lg">
            Our hardware is built using state-of-the-art sensors and processors to ensure zero-latency detection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, idx) => (
            <div key={idx} className="group cursor-default">
              <div className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:rotate-6 transition-transform duration-300 shadow-sm`}>
                {f.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{f.title}</h4>
              <p className="text-slate-500 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
