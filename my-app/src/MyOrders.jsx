import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const MyOrders = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchOrders = async () => {
        try {
            const tokenResponse = localStorage.getItem("user");
            const token = tokenResponse ? JSON.parse(tokenResponse).token : null;

            if (!token) throw new Error("Authentication error.");

            const response = await fetch("/api/orders", {
                headers: { "Authorization": `Bearer ${token}` }
            });
            const data = await response.json();

            if (!response.ok) throw new Error(data.message || "Failed to fetch orders.");
            setOrders(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            fetchOrders();
        }
    }, [user]);

    const handleRemoveOrder = async (orderId) => {
        if (!window.confirm("Are you sure you want to cancel and remove this order?")) return;

        try {
            const tokenResponse = localStorage.getItem("user");
            const token = tokenResponse ? JSON.parse(tokenResponse).token : null;

            const response = await fetch(`/api/orders/${orderId}`, {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || "Failed to remove order.");
            }

            // Remove locally
            setOrders(orders.filter(o => o._id !== orderId));
        } catch (err) {
            alert(err.message);
        }
    };

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

                {loading ? (
                    <div className="flex justify-center p-12">
                        <div className="w-8 h-8 rounded-full border-4 border-slate-200 border-t-primary animate-spin"></div>
                    </div>
                ) : error ? (
                    <div className="p-12 text-center">
                        <p className="text-red-500 font-bold">{error}</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.length === 0 ? (
                            <div className="mt-12 p-12 border-2 border-dashed border-slate-200 rounded-[3rem] text-center">
                                <p className="text-slate-400 font-bold text-sm mb-4">You have no active orders</p>
                                <button
                                    onClick={() => navigate("/device")}
                                    className="bg-primary text-white px-6 py-2 rounded-xl font-bold text-xs"
                                >
                                    Browse Shop
                                </button>
                            </div>
                        ) : (
                            orders.map((order) => (
                                <div key={order._id} className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col sm:flex-row items-center gap-6 group hover:shadow-2xl transition-all relative">
                                    <button
                                        onClick={() => handleRemoveOrder(order._id)}
                                        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 bg-red-50 text-red-500 rounded-full flex items-center justify-center font-bold text-lg opacity-80 hover:opacity-100 hover:bg-red-100 transition-colors"
                                        title="Cancel Order"
                                    >
                                        ×
                                    </button>

                                    <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform border border-slate-100 shrink-0">
                                        {order.item.includes("Moto") ? "🏍️" : order.item.includes("Pro") ? "🏢" : "📱"}
                                    </div>

                                    <div className="flex-1 text-center sm:text-left">
                                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mb-2">
                                            <h3 className="text-xl font-black text-slate-900">{order.item}</h3>
                                            <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-600' : 'bg-primary/10 text-primary'}`}>
                                                {order.status}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-center sm:justify-start gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest flex-wrap">
                                            <span>ID: {order._id.substring(0, 8)}...</span>
                                            <span className="hidden sm:inline">•</span>
                                            <span>Date: {new Date(order.createdAt).toLocaleDateString()}</span>
                                            <span className="hidden sm:inline">•</span>
                                            <span>Via {order.paymentMethod}</span>
                                        </div>
                                    </div>

                                    <div className="text-center sm:text-right shrink-0">
                                        <p className="text-2xl font-black text-slate-900 mb-2">${order.amount}</p>
                                        <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline px-4">Track Order →</button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;
