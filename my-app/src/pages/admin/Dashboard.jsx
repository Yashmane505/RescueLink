import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        navigate("/login");
        return null;
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Welcome Back</h2>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tight">
                        User <span className="italic text-primary">Dashboard</span>
                    </h1>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Profile Card */}
                    <div className="lg:col-span-2 bg-white rounded-[3rem] shadow-2xl p-10 border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="flex items-center gap-6 mb-10 relative z-10">
                            <div className="w-20 h-20 bg-slate-900 text-white rounded-[2rem] flex items-center justify-center text-3xl font-black shadow-xl shadow-slate-900/20">
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-slate-900">{user.name}</h3>
                                <p className="text-slate-500 font-medium capitalize">{user.userType} Account</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 relative z-10">
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</p>
                                <p className="font-bold text-slate-700">{user.email}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phone Number</p>
                                <p className="font-bold text-slate-700">{user.phone}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Vehicle ID</p>
                                <p className="font-bold text-slate-700">{user.vehicleNumber}</p>
                            </div>
                            {user.userType === "ambulance" && (
                                <>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hospital</p>
                                        <p className="font-bold text-slate-700">{user.hospitalName}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Stats Card */}
                    <div className="bg-slate-900 rounded-[3rem] shadow-2xl p-10 text-white flex flex-col justify-between">
                        <div>
                            <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">Device Status</p>
                            <h4 className="text-2xl font-black mb-6">Network <span className="text-primary italic">Active</span></h4>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-slate-400 text-xs font-bold uppercase">Siren Detection</span>
                                    <span className="text-xs font-black text-green-400">ONLINE</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-slate-400 text-xs font-bold uppercase">GPS Sync</span>
                                    <span className="text-xs font-black text-green-400">LOCKED</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-400 text-xs font-bold uppercase">Cloud Link</span>
                                    <span className="text-xs font-black text-primary">CONNECTED</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-white text-slate-900 py-4 rounded-2xl font-black text-sm mt-8 hover:bg-primary hover:text-white transition-all">
                            Manage RescueLink Pro
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
