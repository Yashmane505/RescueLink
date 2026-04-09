import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const devices = {
    "go": {
        name: "RescueLink Go",
        icon: "📱",
        desc: "Portable siren detector for shared mobility and rental cars. No installation required.",
        price: "$29",
        tag: "Bestseller",
        specs: [
            { label: "Connectivity", value: "Bluetooth 5.2" },
            { label: "Battery", value: "Internal (Rechargeable)" },
            { label: "Waterproof", value: "IPX4 (Splash resistant)" },
            { label: "Installation", value: "Suction Mount / Clip" }
        ],
        features: [
            "Real-time audio processing",
            "Syncs with smartphone app",
            "Visual & Vibration alerts",
            "Automatic accident reporting"
        ]
    },
    "moto": {
        name: "RescueLink Moto",
        icon: "🏍️",
        desc: "Ultra-rugged, IP68 waterproof design specifically for motorcycles and first responders.",
        price: "$39",
        tag: "New Release",
        specs: [
            { label: "Connectivity", value: "Direct Wiring / BT" },
            { label: "Battery", value: "Vehicle Powered (Hardwired)" },
            { label: "Waterproof", value: "IP68 (Fully submersible)" },
            { label: "Installation", value: "Handlebar Mount" }
        ],
        features: [
            "In-helmet audio integration",
            "Emergency SOS button",
            "High-decibel vibration feedback",
            "Impact detection sensor"
        ]
    },
    "pro": {
        name: "Fleet Hub Pro",
        icon: "🛰️",
        desc: "Institutional gateway that syncs up to 50 vehicles via a single high-range antenna.",
        price: "$199",
        tag: "Enterprise",
        specs: [
            { label: "Connectivity", value: "4G LTE / Fleet Mesh" },
            { label: "Battery", value: "Vehicle Powered" },
            { label: "Waterproof", value: "Industrial Seal" },
            { label: "Installation", value: "Dashboard / Interior" }
        ],
        features: [
            "Centralized fleet monitoring",
            "Predictive traffic routing",
            "Remote diagnostics",
            "Multi-user dashboard access"
        ]
    }
};

const DeviceDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const device = devices[id] || devices["go"];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50">
            <div className="max-w-5xl mx-auto">
                <button
                    onClick={() => navigate("/device")}
                    className="mb-8 text-slate-500 hover:text-primary font-bold flex items-center gap-2 transition-colors"
                >
                    ← Back to Devices
                </button>

                <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
                    {/* Visual Section */}
                    <div className="md:w-2/5 p-12 bg-slate-50 flex items-center justify-center border-r border-slate-100 relative group">
                        <div className="text-[10rem] animate-float relative z-10 group-hover:scale-110 transition-transform duration-500">
                            {device.icon}
                        </div>
                        <div className="absolute top-8 left-8">
                            <span className="bg-slate-900 text-[10px] text-white px-3 py-1 rounded-full font-black uppercase tracking-tighter">
                                {device.tag}
                            </span>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="md:w-3/5 p-12 lg:p-16">
                        <h1 className="text-4xl font-black text-slate-900 mb-4">{device.name}</h1>
                        <p className="text-slate-500 text-lg leading-relaxed mb-8">{device.desc}</p>

                        <div className="grid grid-cols-2 gap-8 mb-10">
                            {device.specs.map((spec, idx) => (
                                <div key={idx}>
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{spec.label}</h4>
                                    <p className="font-bold text-slate-900">{spec.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mb-10">
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Key Features</h4>
                            <ul className="space-y-3">
                                {device.features.map((feature, idx) => (
                                    <li key={idx} className="flex gap-3 text-sm text-slate-600 font-medium">
                                        <span className="text-primary font-bold">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">MSRP</p>
                                <p className="text-4xl font-black text-slate-900">{device.price}</p>
                            </div>
                            <button
                                onClick={() => navigate(`/buy/${id}`)}
                                className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-primary/30 hover:-translate-y-1 transition-all"
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeviceDetails;
