import React from "react";

const CloudNetwork = () => {
    return (
        <div className="min-h-screen pt-20">
            <div className="relative bg-slate-900 py-32 overflow-hidden border-b border-slate-800">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <div className="inline-block px-4 py-1 bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8 rounded-full">
                                Cloud Network Infrastructure
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-10">
                                Connected <br />
                                <span className="text-primary italic">Intelligence</span>.
                            </h1>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Our ultra-low latency mesh network ensures that once a siren is detected, every device in the trajectory receives the alert in under 100ms.
                            </p>
                        </div>
                        <div className="flex-1 w-full lg:max-w-md">
                            <div className="bg-slate-800/50 backdrop-blur-xl p-12 rounded-[4rem] border border-slate-700 shadow-2xl relative group overflow-hidden">
                                <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
                                <div className="text-4xl mb-6">📡</div>
                                <h4 className="text-white text-2xl font-black mb-4">99.99% Uptime</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Decentralized nodes across the city ensure zero single-point-of-failure for our emergency communication mesh.
                                </p>
                                <div className="mt-8 flex gap-2">
                                    {[1, 1, 1, 1, 1].map((_, i) => (
                                        <div key={i} className="h-1 bg-primary w-full rounded-full animate-pulse" style={{ animationDelay: `${i * 150}ms` }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {[
                            { title: "Mesh Topology", value: "Node-to-Node", detail: "Devices communicate with each other to bypass congested cell towers." },
                            { title: "Detection Radius", value: "500m - 2km", detail: "Alerts are broadcast based on vehicle speed and emergency trajectory." },
                            { title: "Data Security", value: "AES-256", detail: "End-to-end encrypted signals prevent unauthorized access or spoofing." }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 group hover:bg-slate-900 transition-all duration-500">
                                <p className="text-slate-400 group-hover:text-primary font-bold text-xs uppercase tracking-widest mb-4 transition-colors">{item.title}</p>
                                <h4 className="text-4xl font-black text-slate-900 group-hover:text-white mb-4 tracking-tighter transition-colors">{item.value}</h4>
                                <p className="text-slate-500 group-hover:text-slate-400 text-sm transition-colors">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-24 px-6 bg-slate-900 overflow-hidden relative">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h3 className="text-4xl font-black text-white mb-8">Ultra-Low Latency Alerting</h3>
                    <p className="text-slate-400 text-lg mb-12">
                        Traditional mobile networks have variable latency. Our proprietary RescueLink Protocol uses high-frequency sub-bands to ensure instant delivery.
                    </p>
                    <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden max-w-lg mx-auto mb-4">
                        <div className="absolute inset-y-0 left-0 bg-primary w-1/3 animate-ping opacity-75"></div>
                        <div className="absolute inset-y-0 left-0 bg-primary w-1/3 rounded-full"></div>
                    </div>
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Latency: 42ms Test Result</p>
                </div>
                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>
            </div>
        </div>
    );
};

export default CloudNetwork;
