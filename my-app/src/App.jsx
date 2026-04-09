
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer, ScrollToTop } from "./components/layout";
import { Hero, Features, HowItWorks, Simulation, Stats, Safety } from "./components/home";
import { Login, Registration } from "./pages/auth";
import { Device, DeviceDetails, Checkout, MyOrders } from "./pages/devices";
import { AdminPage, Dashboard } from "./pages/admin";
import {
  Technology,
  StatisticsPage,
  SafetyPage,
  SearchResults,
  CloudNetwork,
  FleetManagement,
  Training,
  Pricing,
  CaseStudies,
  AboutUs,
  LegalPage
} from "./pages/content";
import LiveMap from "./components/map/LiveMap";
import { useAuth } from "./context/AuthContext";

const HomePage = () => {
  const { user } = useAuth();
  return (
    <>
      {user?.userType === 'ambulance' && (
        <div className="pt-32 px-6 max-w-7xl mx-auto">
          <div className="bg-white p-6 md:p-10 rounded-[3rem] shadow-2xl border border-slate-100 mb-12 relative overflow-hidden group hover:shadow-primary/5 transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 px-4">
              <div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full mb-2">
                  Emergency Command Center
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tighter">Real-time Traffic Control</h3>
                <p className="text-slate-500 font-medium max-w-md">Automatic signal clearance system and vehicle tracking active for your area.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right hidden md:block">
                  <p className="text-[10px] font-black text-slate-400 uppercase">Active Units</p>
                  <p className="text-xl font-black">15 Vehicles</p>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-2xl text-xs font-black shadow-lg shadow-red-200">
                  <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                  LIVE
                </div>
              </div>
            </div>
            <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-100">
              <LiveMap />
            </div>
          </div>
        </div>
      )}
      <Hero />
      <Features />
      <HowItWorks />
      <Simulation />
      <Stats />
      <Safety />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans antialiased text-slate-900 overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/device" element={<Device />} />
            <Route path="/device/:id" element={<DeviceDetails />} />
            <Route path="/buy/:id" element={<Checkout />} />
            <Route path="/my-orders" element={<MyOrders />} />

            <Route path="/technology" element={<Technology />} />
            <Route path="/statistics" element={<StatisticsPage />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/technology/cloud" element={<CloudNetwork />} />
            <Route path="/safety/fleet" element={<FleetManagement />} />
            <Route path="/safety/training" element={<Training />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/legal/:doc" element={<LegalPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
