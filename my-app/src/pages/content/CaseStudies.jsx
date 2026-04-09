import React from "react";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
    const navigate = useNavigate();

    const studies = [
        {
            city: "New Delhi",
            country: "India",
            stat: "4.2m",
            label: "Time Saved",
            title: "Peak Hour Congestion Management",
            desc: "In the world's most congested traffic, RescueLink helped clear pathways for ambulances 42% faster than traditional siren-only methods.",
            tags: ["High Density", "Urban", "Gen-2"],
            icon: "🏙️"
        },
        {
            city: "London",
            country: "UK",
            stat: "38%",
            label: "Accident Reduction",
            title: "Cross-Junction Safety Protocol",
            desc: "By alerting drivers at intersections before sirens were audible, RescueLink reduced emergency-vehicle related collisions by nearly 40%.",
            tags: ["Safety", "Intersection", "Cloud Sync"],
            icon: "🇬🇧"
        },
        {
            city: "Singapore",
            country: "Singapore",
            stat: "1.2km",
            label: "Detection Range",
            title: "Smart City Integration Beta",
            desc: "Integrated with municipal traffic sensors, our hardware provided drivers with early-warning alerts on highway systems long before visual contact.",
            tags: ["Smart City", "API", "IOT"],
            icon: "🇸🇬"
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 animate-in fade-in slide-in-from-top-4 duration-1000">
                    <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Case Studies</h2>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-none mb-8">
                        Real Impact. <br />
                        <span className="italic text-primary">Real Data</span>.
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
                        Explore how RescueLink is transforming emergency response times and road safety in major cities across the globe.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-20">
                    {studies.slice(0, 2).map((study, idx) => (
                        <div key={idx} className="bg-white rounded-[4rem] p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500">
                            <div>
                                <div className="flex justify-between items-start mb-10">
                                    <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center text-4xl shadow-inner border border-slate-100 group-hover:scale-110 transition-transform">
                                        {study.icon}
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[4rem] font-black text-primary leading-none tracking-tighter">{study.stat}</p>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">{study.label}</p>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-10">
                                    <div className="flex gap-2">
                                        {study.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-slate-100 text-[10px] font-bold text-slate-500 rounded-full uppercase tracking-tighter">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 leading-tight">{study.title}</h3>
                                    <p className="text-slate-500 leading-relaxed font-medium">
                                        {study.desc}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                                <span className="font-black text-slate-900">{study.city}, <span className="text-slate-400 font-bold">{study.country}</span></span>
                                <button className="p-4 rounded-2xl bg-slate-900 text-white hover:bg-primary transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Third Study - Full Width */}
                <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full">
                                Enterprise Partner Spotlight
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                                {studies[2].title}
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-lg">
                                {studies[2].desc}
                            </p>
                            <div className="flex gap-8">
                                <div>
                                    <p className="text-primary text-4xl font-black italic">{studies[2].stat}</p>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Range Coverage</p>
                                </div>
                                <div className="border-l border-white/10 pl-8">
                                    <p className="text-white text-4xl font-black italic">Active</p>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Beta Status</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 flex items-center justify-center p-12 shadow-2xl">
                                <div className="text-center">
                                    <div className="text-6xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">{studies[2].icon}</div>
                                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Singapore Municipal Transit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <button
                        onClick={() => navigate("/pricing")}
                        className="bg-white border border-slate-200 text-slate-900 px-12 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-xl shadow-slate-200/50"
                    >
                        Request Institutional Report
                    </button>
                    <p className="mt-6 text-slate-400 text-xs font-bold uppercase tracking-widest">Confidential Data — Partner Access Only</p>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
