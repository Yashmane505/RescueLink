import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const MyOrders = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    // Mock data for orders
    const orders = [
        {
            id: "ORD-9921",
            date: "Oct 24, 2026",
            item: "RescueLink Go",
            status: "Delivered",
            amount: "$29.00",
            icon: "📱"
        },
        {
            id: "ORD-8812",
            date: "Nov 12, 2026",
            item: "RescueLink Moto",
            status: "In Transit",
            amount: "$39.00",
            icon: "🏍️"
        }
    ];

    if (!user) {
        return (
            <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-slate-50">
                <h2 className="text-2xl font-black text-slate-900 mb-4">Please login to view your orders</h2>
                <button
                    onClick={() => navigate("/login")}
                    className="bg-primary text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-primary/20"
                >
                    Login Now
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-2">Account</h2>
                        <h1 className="text-4xl font-black text-slate-900">My Orders</h1>
                    </div>
                    <button
                        onClick={() => navigate("/device")}
                        className="hidden sm:block bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:-translate-y-1 transition-all"
                    >
                        Shop More
                    </button>
                </div>

                <div className="space-y-6">
                    {orders.map((order) => (
                        <div key={order.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col sm:flex-row items-center gap-8 group hover:shadow-2xl transition-all">
                            <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform border border-slate-100 shrink-0">
                                {order.icon}
                            </div>

                            <div className="flex-1 text-center sm:text-left">
                                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mb-2">
                                    <h3 className="text-xl font-black text-slate-900">{order.item}</h3>
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-600' : 'bg-primary/10 text-primary'}`}>
                                        {order.status}
                                    </span>
                                </div>
                                <div className="flex items-center justify-center sm:justify-start gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                    <span>Order ID: {order.id}</span>
                                    <span>•</span>
                                    <span>Placed: {order.date}</span>
                                </div>
                            </div>

                            <div className="text-center sm:text-right shrink-0">
                                <p className="text-2xl font-black text-slate-900 mb-2">{order.amount}</p>
                                <button className="text-xs font-black text-primary uppercase tracking-widest hover:underline px-4">Track Order →</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State Mockup */}
                <div className="mt-12 p-12 border-2 border-dashed border-slate-200 rounded-[3rem] text-center">
                    <p className="text-slate-400 font-bold text-sm">No other orders found</p>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
