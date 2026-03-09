
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Simulation from "./Simulation";
import Stats from "./Stats";
import Safety from "./Safety";
import Footer from "./Footer";
import Registration from "./Registration";
import Login from "./Login";
import Device from "./Device";
import DeviceDetails from "./DeviceDetails";
import Checkout from "./Checkout";
import MyOrders from "./MyOrders";
import Demo from "./Demo";
import Technology from "./Technology";
import StatisticsPage from "./StatisticsPage";
import SafetyPage from "./SafetyPage";
import SearchResults from "./SearchResults";
import ScrollToTop from "./ScrollToTop";
import Dashboard from "./Dashboard";
import CloudNetwork from "./CloudNetwork";
import FleetManagement from "./FleetManagement";
import Training from "./Training";
import Pricing from "./Pricing";
import CaseStudies from "./CaseStudies";

const HomePage = () => (
  <>
    <Hero />
    <Features />
    <HowItWorks />
    <Simulation />
    <Stats />
    <Safety />
  </>
);

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
            <Route path="/demo" element={<Demo />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/statistics" element={<StatisticsPage />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/technology/cloud" element={<CloudNetwork />} />
            <Route path="/safety/fleet" element={<FleetManagement />} />
            <Route path="/safety/training" element={<Training />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;