import React from "react";
import { useParams } from "react-router-dom";

const policies = {
    privacy: { title: "Privacy Policy", content: "Your privacy is our paramount concern. This document outlines the types of personal information we receive and collect when you use RescueLink services, as well as some of the steps we take to safeguard information." },
    terms: { title: "Terms of Service", content: "By using or accessing the RescueLink platform, you agree to these Terms of Service. Our hardware and software are provided 'as is' without warranty." },
    cookies: { title: "Cookie Policy", content: "We use cookies to improve your browsing experience and analyze our traffic. By clicking 'Accept', you consent to our use of cookies." }
};

const LegalPage = () => {
    const { doc } = useParams();
    const policy = policies[doc] || policies.privacy;

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50">
            <div className="max-w-3xl mx-auto bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100 mt-10">
                <h1 className="text-3xl font-black text-slate-900 mb-6">{policy.title}</h1>
                <p className="text-slate-600 leading-relaxed">
                    {policy.content}
                </p>
                <div className="mt-8 text-xs text-slate-400 font-bold uppercase tracking-widest border-t border-slate-100 pt-8">
                    Last Updated: {new Date().toLocaleDateString()}
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
