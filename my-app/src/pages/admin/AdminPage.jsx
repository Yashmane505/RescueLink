import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ADMIN_EMAIL = "yashmane6417@gmail.com";

const StatCard = ({ icon, label, value, color }) => (
    <div className={`bg-white rounded-3xl shadow-lg p-6 border border-slate-100 flex items-center gap-5 hover:shadow-xl transition-shadow`}>
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${color}`}>
            {icon}
        </div>
        <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{label}</p>
            <p className="text-3xl font-black text-slate-900 mt-0.5">{value}</p>
        </div>
    </div>
);

const AdminPage = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [data, setData] = useState({ users: [], orders: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState("users");
    const [userSearch, setUserSearch] = useState("");
    const [orderSearch, setOrderSearch] = useState("");

    useEffect(() => {
        if (!user) { navigate("/login"); return; }
        if (user.email !== ADMIN_EMAIL) { navigate("/"); return; }

        const fetchData = async () => {
            try {
                const res = await fetch("/api/admin/all-data", {
                    headers: { Authorization: `Bearer ${user.token}` },
                });
                if (!res.ok) throw new Error("Failed to fetch admin data");
                const result = await res.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [user, navigate]);

    const filteredUsers = data.users.filter((u) =>
        `${u.name} ${u.email} ${u.phone} ${u.vehicleNumber}`.toLowerCase().includes(userSearch.toLowerCase())
    );

    const filteredOrders = data.orders.filter((o) =>
        `${o.item} ${o.user?.name} ${o.status} ${o._id}`.toLowerCase().includes(orderSearch.toLowerCase())
    );

    const ambulanceCount = data.users.filter((u) => u.userType === "ambulance").length;
    const carCount = data.users.filter((u) => u.userType === "car").length;
    const totalRevenue = data.orders.reduce((sum, o) => sum + (o.amount || 0), 0);

    const formatDate = (iso) => {
        if (!iso) return "—";
        return new Date(iso).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center pt-24 gap-4">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="text-slate-500 font-bold">Loading Admin Dashboard…</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center pt-24 gap-4">
                <div className="text-5xl">⚠️</div>
                <p className="text-red-500 font-bold text-lg">{error}</p>
                <button onClick={() => window.location.reload()} className="bg-primary text-white px-6 py-3 rounded-2xl font-bold hover:bg-red-700 transition">
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 pt-28 pb-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto space-y-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-red-100 text-red-600 text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">🛡️ Admin Only</span>
                        </div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Admin Dashboard</h1>
                        <p className="text-slate-500 font-medium mt-1">Logged in as <span className="text-primary font-bold">{user?.name}</span> · {ADMIN_EMAIL}</p>
                    </div>
                    <button
                        onClick={() => { window.location.reload(); }}
                        className="self-start md:self-auto bg-white border border-slate-200 shadow px-5 py-2.5 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition flex items-center gap-2"
                    >
                        🔄 Refresh Data
                    </button>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard icon="👥" label="Total Users" value={data.users.length} color="bg-blue-100" />
                    <StatCard icon="🚑" label="Ambulances" value={ambulanceCount} color="bg-red-100" />
                    <StatCard icon="🚗" label="Cars" value={carCount} color="bg-green-100" />
                    <StatCard icon="💰" label="Revenue" value={`₹${totalRevenue.toLocaleString("en-IN")}`} color="bg-yellow-100" />
                </div>

                {/* Tab Bar */}
                <div className="flex gap-3">
                    {["users", "orders"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${activeTab === tab
                                    ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20"
                                    : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-50"
                                }`}
                        >
                            {tab === "users" ? `👥 Users (${data.users.length})` : `📦 Orders (${data.orders.length})`}
                        </button>
                    ))}
                </div>

                {/* USERS TABLE */}
                {activeTab === "users" && (
                    <section className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 border-b border-slate-100">
                            <h2 className="text-xl font-black text-slate-900">Registered Users</h2>
                            <input
                                type="text"
                                placeholder="🔍  Search users…"
                                value={userSearch}
                                onChange={(e) => setUserSearch(e.target.value)}
                                className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-sm font-medium outline-none focus:border-primary transition-colors w-full md:w-72"
                            />
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-100">
                                        <th className="py-4 px-6 text-xs font-black text-slate-400 uppercase tracking-widest">#</th>
                                        <th className="py-4 px-6 text-xs font-black text-slate-400 uppercase tracking-widest">Name</th>
                                        <th className="py-4 px-6 text-xs font-black text-slate-400 uppercase tracking-widest">Email</th>
                                        <th className="py-4 px-6 text-xs font-black text-slate-400 uppercase tracking-widest">Type</th>
                                        <th className="py-4 px-6 text-xs font-black text-slate-400 uppercase tracking-widest">Phone</th>
                                        <th className="py-4 px-6 text-xs font-black text-slate-400 uppercase tracking-widest">Vehicle No.</th>
                                        <th className="py-4 px-6 text-xs font-black text-slate-400 uppercase tracking-widest">Registered</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.length === 0 ? (
                                        <tr><td colSpan="7" className="py-16 text-center text-slate-400 font-medium">No users found.</td></tr>
                                    ) : (
                                        filteredUsers.map((u, i) => (
                                            <tr key={u._id} className="border-b border-slate-50 hover:bg-slate-50/70 transition-colors group">
                                                <td className="py-4 px-6 text-xs font-mono text-slate-300">{i + 1}</td>
                                                <td className="py-4 px-6">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black text-sm flex-shrink-0">
                                                            {u.name.charAt(0).toUpperCase()}
                                                        </div>
                                                        <span className="font-bold text-slate-900">{u.name}</span>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 text-slate-500 text-sm">{u.email}</td>
                                                <td className="py-4 px-6">
                                                    <span className={`px-3 py-1.5 rounded-xl text-xs font-black ${u.userType === "ambulance"
                                                            ? "bg-red-100 text-red-600"
                                                            : "bg-blue-100 text-blue-600"
                                                        }`}>
                                                        {u.userType === "ambulance" ? "🚑 Ambulance" : "🚗 Car"}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-slate-500 text-sm font-medium">{u.phone}</td>
                                                <td className="py-4 px-6">
                                                    <span className="font-mono text-sm bg-slate-100 px-3 py-1 rounded-lg text-slate-700">{u.vehicleNumber}</span>
                                                </td>
                                                <td className="py-4 px-6 text-slate-400 text-xs">{formatDate(u.createdAt)}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-8 py-4 border-t border-slate-50 bg-slate-50/50">
                            <p className="text-xs text-slate-400 font-medium">Showing {filteredUsers.length} of {data.users.length} users</p>
                        </div>
                    </section>
                )}

                {/* ORDERS TABLE */}
                {activeTab === "orders" && (
                    <section className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 border-b border-slate-100">
                            <h2 className="text-xl font-black text-slate-900">All Orders</h2>
                            <input
                                type="text"
                                placeholder="🔍  Search orders…"
                                value={orderSearch}
                                onChange={(e) => setOrderSearch(e.target.value)}
                                className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-sm font-medium outline-none focus:border-primary transition-colors w-full md:w-72"
                            />
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-100">
                                        <th className="py-4 px-6 text-xs font-black text-slate-400 uppercase tracking-widest">Order ID</th>
                                        <th className="py-4 px-6 text-xs font-black text-slate-400 uppercase tracking-widest">Customer</th>
                                        <th className="py-4 px-6 text-xs font-black text-slate-400 uppercase tracking-widest">Item</th>
                                        <th className="py-4 px-6 text-xs font-black text-slate-400 uppercase tracking-widest">Amount</th>
                                        <th className="py-4 px-6 text-xs font-black text-slate-400 uppercase tracking-widest">Payment</th>
                                        <th className="py-4 px-6 text-xs font-black text-slate-400 uppercase tracking-widest">Status</th>
                                        <th className="py-4 px-6 text-xs font-black text-slate-400 uppercase tracking-widest">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredOrders.length === 0 ? (
                                        <tr><td colSpan="7" className="py-16 text-center text-slate-400 font-medium">No orders found.</td></tr>
                                    ) : (
                                        filteredOrders.map((o) => (
                                            <tr key={o._id} className="border-b border-slate-50 hover:bg-slate-50/70 transition-colors">
                                                <td className="py-4 px-6 text-xs font-mono text-slate-300">{o._id.slice(-8).toUpperCase()}</td>
                                                <td className="py-4 px-6 font-bold text-slate-900">{o.user?.name || "Unknown"}</td>
                                                <td className="py-4 px-6 text-slate-600 text-sm">{o.item}</td>
                                                <td className="py-4 px-6 font-black text-slate-900">₹{o.amount?.toLocaleString("en-IN")}</td>
                                                <td className="py-4 px-6">
                                                    <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-xl text-xs font-bold">{o.paymentMethod || "—"}</span>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <span className={`px-3 py-1.5 rounded-xl text-xs font-black ${o.status === "Delivered"
                                                            ? "bg-green-100 text-green-600"
                                                            : o.status === "Cancelled"
                                                                ? "bg-red-100 text-red-600"
                                                                : "bg-yellow-100 text-yellow-600"
                                                        }`}>
                                                        {o.status}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-slate-400 text-xs">{formatDate(o.createdAt)}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                        {filteredOrders.length > 0 && (
                            <div className="px-8 py-4 border-t border-slate-50 bg-slate-50/50 flex justify-between items-center">
                                <p className="text-xs text-slate-400 font-medium">Showing {filteredOrders.length} of {data.orders.length} orders</p>
                                <p className="text-xs font-black text-slate-600">
                                    Total Revenue: <span className="text-green-600">₹{totalRevenue.toLocaleString("en-IN")}</span>
                                </p>
                            </div>
                        )}
                    </section>
                )}

            </div>
        </div>
    );
};

export default AdminPage;
