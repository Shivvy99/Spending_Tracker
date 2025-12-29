export default function Support() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-normal text-[#2e4f21] mb-4">Support</h1>
          <p className="text-gray-600 text-lg">We’re here to help. Choose a topic or reach out directly.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-3">
            <h3 className="text-2xl font-medium text-[#2e4f21]">Getting started</h3>
            <ul className="text-gray-600 space-y-2 list-disc list-inside">
              <li>Connecting your bank accounts</li>
              <li>How transactions are categorized</li>
              <li>Setting alerts and budgets</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-3">
            <h3 className="text-2xl font-medium text-[#2e4f21]">Need to talk?</h3>
            <p className="text-gray-600">Email us at <a href="mailto:support@ledgera.com" className="text-[#2e4f21] font-medium">support@ledgera.com</a></p>
            <p className="text-gray-600">We reply within one business day.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
