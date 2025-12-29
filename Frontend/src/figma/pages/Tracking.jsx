import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertCircle, TrendingUp } from 'lucide-react';

export default function Tracking() {
  const spendingTrend = [
    { month: 'Jan', amount: 2400 },
    { month: 'Feb', amount: 2100 },
    { month: 'Mar', amount: 2800 },
    { month: 'Apr', amount: 2500 },
    { month: 'May', amount: 3200 },
    { month: 'Jun', amount: 2900 },
  ];

  const categoryData = [
    { category: 'Restaurants', amount: 850, color: '#2e4f21' },
    { category: 'Groceries', amount: 620, color: '#4a7c33' },
    { category: 'Transport', amount: 380, color: '#6ba945' },
    { category: 'Entertainment', amount: 420, color: '#a0f1bd' },
    { category: 'Shopping', amount: 630, color: '#d2f8dc' },
  ];

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-normal text-[#2e4f21] mb-4">Spending Insights</h1>
          <p className="text-gray-600 max-w-2xl">
            Get a clear view of your spending patterns. We analyze your transactions and show you exactly where your money goes each month.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8 flex items-start gap-4">
          <div className="p-3 bg-orange-50 rounded-full">
            <AlertCircle className="text-orange-500" size={24} />
          </div>
          <div>
            <h3 className="font-medium text-[#2e4f21] mb-1">Spending Alert</h3>
            <p className="text-gray-600 text-sm">
              Your spending in <strong>Restaurants</strong> is 25% higher than last month. Consider reviewing your dining habits.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="text-[#2e4f21]" size={24} />
            <h2 className="text-2xl font-normal text-[#2e4f21]">Spending Trend</h2>
          </div>
          <p className="text-gray-600 text-sm mb-6">
            Your spending over the last 6 months shows a gradual increase. Understanding this pattern helps you plan better.
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={spendingTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
              <Line type="monotone" dataKey="amount" stroke="#2e4f21" strokeWidth={2} dot={{ fill: '#2e4f21', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-normal text-[#2e4f21] mb-6">Category Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={categoryData} cx="50%" cy="50%" labelLine={false} label={(entry) => entry.category} outerRadius={100} dataKey="amount">
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-normal text-[#2e4f21] mb-6">Top Categories</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="category" stroke="#6b7280" tick={{ fontSize: 12 }} />
                <YAxis stroke="#6b7280" />
                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                <Bar dataKey="amount" fill="#2e4f21" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
