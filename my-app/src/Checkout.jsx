import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const devices = {
    "go": { name: "RescueLink Go", price: 29 },
    "moto": { name: "RescueLink Moto", price: 39 },
    "pro": { name: "Fleet Hub Pro", price: 199 }
};

const Checkout = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const device = devices[id] || devices["go"];
    const [loading, setLoading] = useState(false);

    const handlePayment = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate payment processing
        setTimeout(() => {
            setLoading(false);
            alert("Order placed successfully! Thank you for choosing RescueLink.");
            navigate("/");
        }, 2000);
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50 flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">

                {/* Order Summary */}
                <div className="md:w-2/5 bg-slate-900 p-12 text-white">
                    <h2 className="text-2xl font-black mb-10">Order Summary</h2>
                    <div className="space-y-6">
                        <div className="flex justify-between items-center text-slate-400">
                            <span className="text-sm font-bold">Product</span>
                            <span className="text-sm font-bold text-white">{device.name}</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-400 border-b border-slate-800 pb-6">
                            <span className="text-sm font-bold">Standard Shipping</span>
                            <span className="text-sm font-bold text-white">Free</span>
                        </div>
                        <div className="flex justify-between items-center pt-4">
                            <span className="text-xl font-bold">Total</span>
                            <span className="text-3xl font-black">${device.price}</span>
                        </div>
                    </div>

                    <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-xs text-slate-400 leading-relaxed italic">
                            "Every RescueLink device is covered by our 2-year worry-free warranty and priority emergency support."
                        </p>
                    </div>
                </div>

                {/* Checkout Form */}
                <div className="md:w-3/5 p-12">
                    <h2 className="text-2xl font-black text-slate-900 mb-8">Secure Checkout</h2>

                    <form onSubmit={handlePayment} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Shipping Address</label>
                            <input required type="text" placeholder="123 Rescue Way" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">City</label>
                                <input required type="text" placeholder="New York" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Zip Code</label>
                                <input required type="text" placeholder="10001" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-100">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Payment Details</label>
                            <div className="space-y-4">
                                <input required type="text" placeholder="Card Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                                <div className="grid grid-cols-2 gap-4">
                                    <input required type="text" placeholder="MM/YY" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                                    <input required type="text" placeholder="CVC" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-primary/30 hover:-translate-y-1 transition-all disabled:opacity-50 disabled:transform-none mt-4"
                        >
                            {loading ? "Processing..." : `Complete Purchase — $${device.price}`}
                        </button>
                    </form>

                    <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                        <span>🔒 SSL Encrypted</span>
                        <span>•</span>
                        <span>💳 All major cards accepted</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Checkout;
