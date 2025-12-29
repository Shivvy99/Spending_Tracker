import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f9f9f9] border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-[#2e4f21] mb-4">Ledgera</h3>
            <p className="text-sm text-gray-600">
              Simple, honest insights about your spending.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#2e4f21] mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/tracking" className="text-sm text-gray-600 hover:text-[#2e4f21]">
                  Spending Insights
                </Link>
              </li>
              <li>
                <Link to="/transactions" className="text-sm text-gray-600 hover:text-[#2e4f21]">
                  Transactions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-600 hover:text-[#2e4f21]">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#2e4f21] mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-[#2e4f21]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-gray-600 hover:text-[#2e4f21]">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-[#2e4f21]">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#2e4f21] mb-4">Connect</h4>
            <p className="text-sm text-gray-600">hello@ledgera.com</p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {currentYear} Ledgera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
