import React from "react";
import { useNavigate } from "react-router-dom";

const FleetManagement = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-20">
            <div className="relative bg-white py-32 overflow-hidden border-b border-slate-100">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 flex items-center justify-center -translate-x-12 translate-y-12 shadow-inner">
                    <div className="text-[20rem] opacity-[0.03] font-black italic select-none">FLEET</div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <div className="inline-block px-4 py-1 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8 rounded-full">
                                Institutional Fleet Support
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-10">
                                Manage the <br />
                                <span className="text-primary italic">Emergency</span> Response.
                            </h1>
                            <p className="text-slate-500 text-lg leading-relaxed max-w-xl mb-12">
                                Empowering hospitals and municipal fleets with a centralized dashboard to track, deploy, and monitor their emergency vehicle statuses in real-time.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => navigate("/register", { state: { type: "ambulance" } })}
                                    className="bg-primary text-white px-10 py-5 rounded-3xl font-black text-lg shadow-2xl shadow-primary/20 hover:-translate-y-1 transition-all"
                                >
                                    Register Fleet — Get Started
                                </button>
                                <button className="bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-3xl font-black text-lg hover:bg-slate-50 transition-all">
                                    Watch Demo Video
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 w-full lg:max-w-md">
                            <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-100 relative group transition-transform hover:-rotate-1">
                                <div className="absolute -top-6 -right-6 bg-primary text-white w-20 h-20 rounded-[2rem] flex items-center justify-center text-3xl shadow-xl shadow-primary/30">📊</div>
                                <h4 className="text-2xl font-black mb-6">Centralized Dashboard</h4>
                                <div className="space-y-6 mb-8">
                                    {[
                                        { l: "Speed Efficiency", v: "+22%" },
                                        { l: "Path Clearance", v: "High" },
                                        { l: "Response Time", v: "Optimum" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex justify-between items-center bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.l}</span>
                                            <span className="text-sm font-black text-slate-900">{item.v}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-slate-500 text-sm italic">Live telemetry from RescueLink Core-Pro.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {[
                            { title: "Fleet-wide Alerts", desc: "Broadcast emergency path clearance for entire convoys or single units with one tap." },
                            { title: "Institutional API", desc: "Seamlessly integrate our data into your existing hospital management and dispatch systems." },
                            { title: "Telematics Link", desc: "Real-time engine health and location tracking paired with siren detection range metrics." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-100 group hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                                <div className="text-3xl mb-6">🚑</div>
                                <h4 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-24 px-6 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-black mb-8 text-slate-900">Enterprise Solutions</h3>
                    <p className="text-slate-500 mb-12 leading-relaxed">
                        Serving over 14 partner hospitals and 4 municipal transport authorities across the globe. Join the network that prioritizes human life through connectivity.
                    </p>
                    <div className="h-64 bg-slate-900 rounded-[4rem] flex items-center justify-center shadow-2xl relative overflow-hidden text-center p-8 transition-transform group hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"></div>
                        <div className="relative z-10 px-8">
                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">Enterprise Access</p>
                            <h4 className="text-white text-3xl font-black mb-2">Partner with RescueLink Pro</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FleetManagement;
