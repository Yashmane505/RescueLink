import React from "react";
import HowItWorks from "../../components/home/HowItWorks";
import Features from "../../components/home/Features";

const Technology = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="relative bg-slate-900 py-32 invisible lg:visible overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-[10px] font-black uppercase tracking-widest mb-6">
              System Architecture v4.0
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
              Acoustic <br />
              <span className="text-primary italic">Intelligence</span>.
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
              Our proprietary detection engine utilizes sub-millisecond signal processing to identify emergency sirens long before they enter the human audible range.
            </p>
          </div>
          <div className="hidden lg:block">
             <div className="bg-slate-800 border border-slate-700 p-8 rounded-[2rem] font-mono text-[10px] text-green-400 shadow-2xl">
                <div className="flex gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <p>// Initializing Siren Detection Engine...</p>
                <p>const frequency_range = [500, 2000];</p>
                <p>const threshold = 0.85;</p>
                <p className="mt-2 text-white">analysing_audio_stream().then(signal =&gt; &#123;</p>
                <p className="ml-4">if (signal.pattern === 'YELP' || signal.pattern === 'WAIL') &#123;</p>
                <p className="ml-8 text-primary">broadcast_alert(&#123; type: 'AMBULANCE', dist: signal.est_dist &#125;);</p>
                <p className="ml-4">&#125;</p>
                <p className="text-white">&#125;);</p>
             </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden bg-slate-50 py-20 px-6 text-center">
          <h2 className="text-primary font-black text-sm uppercase tracking-widest mb-4">The Tech</h2>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-tight mb-6">Precision Engineering.</h1>
          <p className="text-slate-600">Advanced acoustic AI for zero-latency detection.</p>
      </div>

      <Features />
      <HowItWorks />

      <div className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="relative aspect-video bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
               <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-50" alt="circuit" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Internal CPU</p>
                    <h4 className="text-white text-2xl font-bold">ResLink-1 AI Chip</h4>
                  </div>
               </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-4xl font-black text-slate-900 mb-6">Real-time Acoustic Fingerprinting</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our devices don't just listen for loud noises. They identify the "fingerprint" of emergency sirens by analyzing pitch, oscillation, and Doppler shifts in real-time. This ensures that a passing car stereo never triggers a false alert.
            </p>
            <ul className="space-y-4">
              {["99.9% Specificity", "0.5s Processing Latency", "Encrypted Cloud Broadcast"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-slate-800">
                  <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
