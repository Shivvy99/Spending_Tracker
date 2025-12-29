import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

export default function Transactions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDateRange, setSelectedDateRange] = useState('all');

  const transactions = [
    { id: '1', merchant: 'Whole Foods Market', category: 'Groceries', date: '2024-12-28', amount: -85.42 },
    { id: '2', merchant: 'Netflix', category: 'Subscriptions', date: '2024-12-27', amount: -15.99 },
    { id: '3', merchant: 'Starbucks', category: 'Restaurants', date: '2024-12-27', amount: -8.75 },
    { id: '4', merchant: 'Shell Gas Station', category: 'Transport', date: '2024-12-26', amount: -52.3 },
    { id: '5', merchant: 'Amazon', category: 'Shopping', date: '2024-12-26', amount: -124.95 },
    { id: '6', merchant: 'Chipotle', category: 'Restaurants', date: '2024-12-25', amount: -16.2 },
    { id: '7', merchant: 'Target', category: 'Shopping', date: '2024-12-24', amount: -67.89 },
    { id: '8', merchant: 'Uber', category: 'Transport', date: '2024-12-24', amount: -23.45 },
    { id: '9', merchant: 'Spotify', category: 'Subscriptions', date: '2024-12-23', amount: -9.99 },
    { id: '10', merchant: 'Trader Joes', category: 'Groceries', date: '2024-12-23', amount: -92.15 },
    { id: '11', merchant: 'AMC Theatres', category: 'Entertainment', date: '2024-12-22', amount: -34.5 },
    { id: '12', merchant: 'Panera Bread', category: 'Restaurants', date: '2024-12-21', amount: -14.85 },
  ];

  const categories = ['all', 'Groceries', 'Subscriptions', 'Restaurants', 'Transport', 'Shopping', 'Entertainment'];
  const dateRanges = [
    { value: 'all', label: 'All Time' },
    { value: 'week', label: 'Last 7 Days' },
    { value: 'month', label: 'Last 30 Days' },
  ];

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.merchant.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || transaction.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-normal text-[#2e4f21] mb-4">Transactions</h1>
          <p className="text-gray-600 max-w-2xl">
            View and filter all your transactions in one place. Every purchase is automatically categorized for easy tracking.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search merchants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4f21] focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4f21] focus:border-transparent appearance-none bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                value={selectedDateRange}
                onChange={(e) => setSelectedDateRange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4f21] focus:border-transparent appearance-none bg-white"
              >
                {dateRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#2e4f21]">Merchant</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#2e4f21]">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#2e4f21]">Date</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#2e4f21]">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">{transaction.merchant}</td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 bg-[#d2f8dc] text-[#2e4f21] rounded-full text-xs">
                        {transaction.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(transaction.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>
                    <td className={`px-6 py-4 text-sm text-right font-medium ${
                      transaction.amount < 0 ? 'text-red-600' : 'text-green-600'
                    }`}>
                      ${Math.abs(transaction.amount).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredTransactions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No transactions found matching your filters.</p>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mt-8">
          <h2 className="text-2xl font-normal text-[#2e4f21] mb-4">How Transactions Are Grouped</h2>
          <div className="space-y-3 text-gray-600">
            <p>
              Ledgera automatically categorizes your transactions using merchant data and spending patterns. This helps you see where your money goes without manual tracking.
            </p>
            <p>
              <strong className="text-[#2e4f21]">Categories include:</strong> Groceries, Restaurants, Transport, Shopping, Subscriptions, Entertainment, and more.
            </p>
            <p>
              You can filter by category or search for specific merchants to find what you're looking for quickly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
