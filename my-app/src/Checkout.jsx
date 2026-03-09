import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const devices = {
    "go": { name: "RescueLink Go", price: 29 },
    "moto": { name: "RescueLink Moto", price: 39 },
    "pro": { name: "Fleet Hub Pro", price: 199 },
    "personal": { name: "Personal Plan (Annual)", price: 9 },
    "fleet": { name: "Fleet Pro Plan (Monthly)", price: 99 },
    "emergency": { name: "Emergency Response (Annual)", price: 999 }
};

const Checkout = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const device = devices[id] || devices["go"];

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        address: "",
        city: "",
        pincode: "",
        paymentMethod: "Credit Card"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        setError("");

        if (!user) {
            setError("You must be logged in to place an order.");
            return;
        }

        // Basic frontend validations
        if (formData.pincode.length < 5 || formData.pincode.length > 6) {
            setError("Please enter a valid zip code/pincode (5-6 characters).");
            return;
        }
        if (formData.address.trim().length < 5) {
            setError("Please enter a complete address.");
            return;
        }

        setLoading(true);
        try {
            const tokenResponse = localStorage.getItem("user");
            const token = tokenResponse ? JSON.parse(tokenResponse).token : null;

            const response = await fetch("/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    item: device.name,
                    amount: device.price,
                    address: formData.address,
                    city: formData.city,
                    pincode: formData.pincode,
                    paymentMethod: formData.paymentMethod
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to process order.");
            }

            setLoading(false);
            navigate("/my-orders");
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
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
                    <h2 className="text-2xl font-black text-slate-900 mb-2">Secure Checkout</h2>
                    {error && <p className="text-red-500 font-bold text-sm mb-4">{error}</p>}

                    <form onSubmit={handlePayment} className="space-y-6 mt-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Shipping Address</label>
                            <input required name="address" value={formData.address} onChange={handleChange} type="text" placeholder="123 Rescue Way" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">City</label>
                                <input required name="city" value={formData.city} onChange={handleChange} type="text" placeholder="New York" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Zip Code / Pincode</label>
                                <input required name="pincode" value={formData.pincode} onChange={handleChange} type="text" placeholder="10001" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-100">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Payment Method</label>
                            <div className="space-y-4">
                                <select
                                    name="paymentMethod"
                                    value={formData.paymentMethod}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors cursor-pointer"
                                >
                                    <option value="Credit Card">Credit Card</option>
                                    <option value="Debit Card">Debit Card</option>
                                    <option value="PayPal">PayPal</option>
                                    <option value="UPI">UPI</option>
                                    <option value="Net Banking">Net Banking</option>
                                </select>

                                {formData.paymentMethod.includes("Card") && (
                                    <div className="space-y-4 mt-4 animate-in fade-in duration-300">
                                        <input required type="text" maxLength="16" placeholder="Card Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                                        <div className="grid grid-cols-2 gap-4">
                                            <input required type="text" maxLength="5" placeholder="MM/YY" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                                            <input required type="text" maxLength="4" placeholder="CVC" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                                        </div>
                                    </div>
                                )}
                                {(formData.paymentMethod === "PayPal" || formData.paymentMethod === "UPI") && (
                                    <div className="mt-4 p-4 rounded-xl bg-blue-50 border border-blue-100 text-sm text-blue-700 font-medium">
                                        You will be redirected securely to complete your {formData.paymentMethod} payment after clicking below.
                                    </div>
                                )}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading || !user}
                            className="w-full bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-primary/30 hover:-translate-y-1 transition-all disabled:opacity-50 disabled:transform-none mt-4 disabled:cursor-not-allowed"
                        >
                            {loading ? "Processing..." : `Complete Purchase — $${device.price}`}
                        </button>
                        {!user && <p className="text-xs font-bold text-center text-red-500 uppercase tracking-widest">Login required to complete purchase</p>}
                    </form>

                    <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest flex-wrap">
                        <span>🔒 SSL Encrypted</span>
                        <span>•</span>
                        <span>💳 All major methods accepted</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Checkout;
