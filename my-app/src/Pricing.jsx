import React from "react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
    const navigate = useNavigate();

    const plans = [
        {
            name: "Personal",
            price: "$9",
            period: "per device",
            description: "Perfect for daily commuters and private car owners.",
            features: [
                "Real-time Siren Detection",
                "Mobile App Integration",
                "1 Year Battery Life",
                "Standard GPS Alerts",
                "24/7 Cloud Support"
            ],
            button: "Buy Now",
            popular: false
        },
        {
            name: "Fleet Pro",
            price: "$99",
            period: "per device / month",
            description: "Optimized for taxi services and small logistics fleets.",
            features: [
                "Centralized Fleet Dashboard",
                "Priority Pathway Alerts",
                "3 Year Battery + Solar",
                "Telematics API Access",
                "Detailed Analytics Reports"
            ],
            button: "Contact Sales",
            popular: true
        },
        {
            name: "Emergency",
            price: "$999",
            period: "institutional rate",
            description: "Specialized for hospitals and municipal responders.",
            features: [
                "Full Trajectory Broadcast",
                "Traffic Light Preemption",
                "Unlimited API Calls",
                "On-site Installation",
                "Dedicated Account Manager"
            ],
            button: "Request Quote",
            popular: false
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Pricing Plans</h2>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-none mb-8">
                        The Cost of <span className="italic text-primary">Safety</span>.
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
                        Choose the plan that fits your needs. From individual drivers to entire municipal fleets, we have you covered.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`relative bg-white p-12 rounded-[4rem] border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${plan.popular
                                    ? "border-primary shadow-2xl shadow-primary/10 ring-4 ring-primary/5"
                                    : "border-slate-100 shadow-xl"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-10 text-center lg:text-left">
                                <h3 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{plan.description}</p>
                            </div>

                            <div className="mb-10 text-center lg:text-left">
                                <span className="text-5xl font-black text-slate-900">{plan.price}</span>
                                <span className="text-slate-400 font-bold ml-2 text-xs uppercase tracking-widest">{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-12">
                                {plan.features.map((feature, fidx) => (
                                    <li key={fidx} className="flex items-center gap-3">
                                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary text-[10px] font-black shrink-0">✓</div>
                                        <span className="text-slate-600 font-bold text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => navigate("/register")}
                                className={`w-full py-5 rounded-[2.5rem] font-black text-lg transition-all ${plan.popular
                                        ? "bg-primary text-white shadow-xl shadow-primary/30 hover:bg-primary-dark"
                                        : "bg-slate-900 text-white shadow-xl shadow-slate-900/20 hover:bg-slate-800"
                                    }`}
                            >
                                {plan.button}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-slate-900 rounded-[4rem] p-16 relative overflow-hidden text-center lg:text-left">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div>
                            <h4 className="text-3xl font-black text-white mb-4">Have questions about Enterprise?</h4>
                            <p className="text-slate-400 font-medium">Our sales team can customize a solution for your specific municipal or hospital requirements.</p>
                        </div>
                        <button className="bg-white text-slate-900 px-10 py-5 rounded-[2rem] font-black text-lg shrink-0 hover:bg-primary hover:text-white transition-all">
                            Talk to Our Experts
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
