import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/tracking', label: 'Tracking' },
    { path: '/transactions', label: 'Transactions' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/support', label: 'Support' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-semibold text-[#2e4f21]">
            Ledgera
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors ${
                  isActive(link.path)
                    ? 'text-[#2e4f21] font-medium'
                    : 'text-gray-600 hover:text-[#2e4f21]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/transactions"
              className="bg-[#2e4f21] text-white px-4 py-2 rounded-full text-sm hover:bg-[#3a6229] transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm ${
                  isActive(link.path)
                    ? 'text-[#2e4f21] font-medium'
                    : 'text-gray-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/transactions"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-2 bg-[#2e4f21] text-white px-4 py-2 rounded-full text-sm text-center"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
