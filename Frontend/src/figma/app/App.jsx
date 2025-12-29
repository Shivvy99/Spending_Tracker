import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Tracking from '../pages/Tracking';
import Transactions from '../pages/Transactions';
import Services from '../pages/Services';
import About from '../pages/About';
import Support from '../pages/Support';
import Privacy from '../pages/Privacy';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
