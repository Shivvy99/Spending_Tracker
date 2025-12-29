export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-normal text-[#2e4f21] mb-4">Privacy</h1>
          <p className="text-gray-600 text-lg">
            Your data is yours. We use bank-level encryption, never sell data, and you can request deletion anytime.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-3">
          <h3 className="text-2xl font-medium text-[#2e4f21]">Key points</h3>
          <ul className="text-gray-600 space-y-2 list-disc list-inside">
            <li>Bank-level encryption for linked accounts.</li>
            <li>We do not sell or share personal data with advertisers.</li>
            <li>You can disconnect accounts and delete data at any time.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
