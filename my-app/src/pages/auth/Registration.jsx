import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { register } = useAuth();
  const [userType, setUserType] = useState(location.state?.type || "car"); // 'car' or 'ambulance'
  const [error, setError] = useState("");

  useEffect(() => {
    if (location.state?.type) {
      setUserType(location.state.type);
    }
  }, [location.state]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    vehicleNumber: "",
    phone: "",
    hospitalName: "", // for ambulance
    licenseNumber: "", // for ambulance
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validations
    if (formData.name.trim().length < 3) {
      setError("Name must be at least 3 characters long");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (formData.vehicleNumber.trim().length < 5) {
      setError("Please enter a valid vehicle number (at least 5 characters)");
      return;
    }

    try {
      await register({ userType, ...formData });
      alert(`Registration successful for ${userType}!`);
      navigate("/");
    } catch (err) {
      setError(err.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">

        {/* Left Side - Info */}
        <div className="md:w-1/3 bg-primary p-12 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-black mb-6 leading-tight">Join the Network</h2>
          <p className="text-red-100 text-sm leading-relaxed mb-8">
            Register your vehicle to start receiving real-time alerts or to manage your emergency response fleet.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg text-xl">🛡️</div>
              <p className="text-xs font-bold">Secure Data</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg text-xl">⚡</div>
              <p className="text-xs font-bold">Instant Alerts</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-2/3 p-12">
          <div className="flex gap-4 mb-10">
            <button
              onClick={() => setUserType("car")}
              className={`flex-1 py-3 px-4 rounded-2xl font-bold transition-all ${userType === "car"
                ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
            >
              🚗 Private Car
            </button>
            <button
              onClick={() => setUserType("ambulance")}
              className={`flex-1 py-3 px-4 rounded-2xl font-bold transition-all ${userType === "ambulance"
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
            >
              🚑 Ambulance
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone</label>
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="+91 98XXX XXX00"
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-500 p-4 rounded-xl text-xs font-bold border border-red-100 mb-6 animate-pulse">
                ⚠️ {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
              <input
                required
                name="email"
                type="email"
                placeholder="john@example.com"
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Password</label>
              <input
                required
                name="password"
                type="password"
                placeholder="••••••••"
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Vehicle Number</label>
              <input
                required
                name="vehicleNumber"
                type="text"
                placeholder="ABC-1234"
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm"
              />
            </div>

            {userType === "ambulance" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Hospital/Organization</label>
                  <input
                    required
                    name="hospitalName"
                    type="text"
                    placeholder="City General Hospital"
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Driver License / ID</label>
                  <input
                    required
                    name="licenseNumber"
                    type="text"
                    placeholder="DL-XXXXXX"
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className={`w-full py-4 rounded-2xl font-bold text-white shadow-xl transition-all hover:-translate-y-1 active:translate-y-0 mt-6 ${userType === "ambulance" ? "bg-primary shadow-primary/30" : "bg-slate-900 shadow-slate-900/30"
                }`}
            >
              Complete Registration
            </button>
          </form>

          <p className="text-center text-xs text-slate-400 mt-6">
            By clicking register, you agree to our <span className="underline cursor-pointer">Terms</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
