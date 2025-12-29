import { Landmark, TrendingUp, Receipt, Calendar } from 'lucide-react';

export default function Services() {
  const features = [
    {
      icon: Landmark,
      title: 'Connect Bank Accounts',
      description:
        'Securely link your bank accounts and credit cards in minutes. We use bank-level encryption to keep your data safe.',
      status: 'Available',
      color: '#2e4f21',
    },
    {
      icon: TrendingUp,
      title: 'Track Spending Automatically',
      description:
        'Every transaction is automatically imported and categorized. No manual entry required—just open the app and see your data.',
      status: 'Available',
      color: '#4a7c33',
    },
    {
      icon: Receipt,
      title: 'View Clear Insights',
      description:
        'Beautiful charts and simple summaries show you exactly where your money goes. Understand your spending at a glance.',
      status: 'Available',
      color: '#6ba945',
    },
    {
      icon: Calendar,
      title: 'Budget Planning',
      description:
        "Set spending limits for each category and get alerts when you're close to your budget. Stay on track effortlessly.",
      status: 'Coming Soon',
      color: '#a0f1bd',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-normal text-[#2e4f21] mb-4">Tools & Features</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to understand and manage your spending. Simple tools that work together to give you complete financial clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <Icon size={32} style={{ color: feature.color }} />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-normal text-[#2e4f21]">{feature.title}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      feature.status === 'Available'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {feature.status}
                  </span>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-3xl font-normal text-[#2e4f21] mb-8 text-center">How Ledgera Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Connect Your Accounts',
              'Automatic Tracking',
              'Get Clear Insights',
            ].map((title, idx) => (
              <div className="text-center" key={title}>
                <div className="w-12 h-12 bg-[#d2f8dc] rounded-full flex items-center justify-center mx-auto mb-4 text-[#2e4f21] font-semibold">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-medium text-[#2e4f21] mb-2">{title}</h3>
                <p className="text-gray-600">
                  {idx === 0 && 'Securely link your bank and credit card accounts using our encrypted connection.'}
                  {idx === 1 && 'Every transaction is automatically imported and organized by category.'}
                  {idx === 2 && 'View charts and summaries that show exactly where your money goes each month.'}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#2e4f21] to-[#4a7c33] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">Ready to Take Control?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have gained clarity and confidence in their spending with Ledgera.
          </p>
          <a
            href="/transactions"
            className="inline-block bg-white text-[#2e4f21] px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </div>
  );
}
