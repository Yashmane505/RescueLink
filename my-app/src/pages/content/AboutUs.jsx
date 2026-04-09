import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4">About Us</h2>
                <h1 className="text-5xl font-black text-slate-900 mb-8 leading-tight">
                    Pioneering the Future of <span className="italic text-primary">Emergency Mobility</span>
                </h1>

                <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-100 text-left mb-12">
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        At RescueLink, we firmly believe that no life should be lost because an ambulance was stuck in traffic. Founded by a team of engineers and emergency dispatchers, our mission is to build digital pathways that override the physical congestion of modern cities.
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        By combining advanced acoustic AI fingerprinting with robust IoT hardware and real-time cloud data, we're giving civic infrastructure the intelligent upgrade it desperately needs so that emergency responders can reach their destination safely, securely, and instantly.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                        <div className="text-4xl font-black text-primary mb-2">98%</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Accuracy</div>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                        <div className="text-4xl font-black text-slate-900 mb-2">45s</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Time Saved</div>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                        <div className="text-4xl font-black text-primary mb-2">12M+</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Audio Samples</div>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                        <div className="text-4xl font-black text-slate-900 mb-2">10k+</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active Units</div>
                    </div>
                </div>

                <div className="mt-16">
                    <Link to="/register" className="bg-slate-900 text-white px-10 py-5 rounded-full font-black text-lg shadow-xl shadow-slate-900/20 hover:-translate-y-1 transition-transform inline-block">
                        Join the Movement
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
