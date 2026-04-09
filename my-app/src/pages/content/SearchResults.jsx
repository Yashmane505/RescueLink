import React from "react";
import { useSearchParams, Link } from "react-router-dom";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div className="min-h-screen pt-40 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-2">Search Results FOR</h2>
        <h1 className="text-4xl font-black text-slate-900 mb-12">"{query}"</h1>

        <div className="space-y-8">
           {[
             { title: "RescueLink Pro Clip v2", type: "Product", path: "/device", desc: "Our latest generation siren detection hardware." },

             { title: "Registration Protocols", type: "Safety", path: "/safety", desc: "Official guides on how to react to alerts." },
             { title: "Deep Learning in Acoustics", type: "Technology", path: "/technology", desc: "How our AI identifies emergency sirens." }
           ].filter(item => item.title.toLowerCase().includes(query?.toLowerCase() || "")).map((item, i) => (
             <Link key={i} to={item.path} className="block bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
               <div className="flex justify-between items-center mb-4">
                 <span className="text-[10px] bg-primary/10 text-primary px-3 py-1 rounded-full font-bold uppercase tracking-widest">{item.type}</span>
               </div>
               <h4 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{item.title}</h4>
               <p className="text-slate-500 text-sm mt-2">{item.desc}</p>
             </Link>
           ))}
           
           {query && [1, 2, 3, 4].filter(x => false).length === 0 && (
             <div className="py-20 text-center">
               <p className="text-slate-400 font-medium">No further results found for that query.</p>
               <Link to="/" className="text-primary font-bold mt-4 inline-block hover:underline">Back to Home</Link>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
