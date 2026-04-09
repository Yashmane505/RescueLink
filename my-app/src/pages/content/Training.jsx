import React from "react";

const Training = () => {
    return (
        <div className="min-h-screen pt-20">
            <div className="relative py-32 px-6 bg-slate-50 overflow-hidden border-b border-slate-100">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full translate-x-12 -translate-y-12"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="w-20 h-20 bg-primary/10 rounded-[2.5rem] flex items-center justify-center text-4xl mx-auto mb-10 shadow-inner">🏅</div>
                    <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-10">
                        Certified <br />
                        <span className="text-primary italic">Precision</span>.
                    </h1>
                    <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                        Standardization is key to safety. Our training protocols ensure every civic driver knows exactly how to respond when an alert triggers.
                    </p>
                </div>
            </div>

            <div className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-video bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl group transition-transform hover:-rotate-1">
                            <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-60" alt="bus driver" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent p-12">
                                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Driver Skill Evaluation</p>
                                <h4 className="text-white text-3xl font-black">Civic Protocol Beta</h4>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-4xl font-black text-slate-900 mb-8 leading-tight">The RescueLink <br />Certification Level 1</h3>
                            <p className="text-slate-500 mb-10 leading-relaxed text-lg">
                                Our digital certification program covers detection distance estimation, lane maneuvers, and emergency trajectory avoidance. Complete this 15-minute course to earn your "RescueLink Pro Civics" badge.
                            </p>
                            <div className="space-y-6 mb-12">
                                {[
                                    "Siren Frequency Basics",
                                    "Doppler Shift & Distance Estimation",
                                    "Aural-Visual Confirmation Checks",
                                    "Safe-Pull Maneuvers"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xs font-black shrink-0 group-hover:bg-primary group-hover:text-white transition-all">0{i + 1}</div>
                                        <p className="text-slate-700 font-bold group-hover:text-primary transition-colors">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <button className="bg-slate-900 text-white px-10 py-5 rounded-[2.5rem] font-black text-lg shadow-2xl shadow-slate-900/20 hover:-translate-y-1 transition-all">
                                Start Training Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-24 px-6 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-3xl font-black text-slate-900 mb-12 text-center">Program Modules</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: "🏎️", title: "Active Maneuvering", desc: "Interactive simulations for rapid road-clearing maneuvers." },
                            { icon: "📡", title: "Beacon Usage", desc: "Optimal placement for your Gen-2 Clip for fastest detection." },
                            { icon: "📜", title: "Protocols", desc: "Understanding the different alert types and urgency levels." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm relative group hover:shadow-xl transition-all">
                                <div className="text-4xl mb-6">{item.icon}</div>
                                <h4 className="text-2xl font-black mb-4 text-slate-900">{item.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;
