export default function About() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-normal text-[#2e4f21] mb-4">About Ledgera</h1>
          <p className="text-gray-600 text-lg">
            Ledgera was built to make spending clarity effortless. We believe you shouldn’t need spreadsheets to understand where your money goes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-2xl font-medium text-[#2e4f21] mb-2">Our mission</h3>
            <p className="text-gray-600">
              Give everyone a clear, honest view of their finances so they can make confident decisions without changing their lifestyle overnight.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-2xl font-medium text-[#2e4f21] mb-2">What we value</h3>
            <p className="text-gray-600">
              Simplicity, privacy, and actionable insights. We only surface what matters, and we keep your data secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
