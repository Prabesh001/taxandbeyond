export default function Account() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-4 text-charcoal">Your Account</h1>
      <p className="text-ink mb-8">
        Manage your documents, service requests, and invoices from a single
        dashboard.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-lg border border-gray-200 p-5 bg-white shadow-sm">
          <h3 className="font-medium text-ink">Documents</h3>
          <p className="text-sm text-gray-600">
            Upload PAN, Aadhaar, Form-16, bank statements, and more.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-5 bg-white shadow-sm">
          <h3 className="font-medium text-ink">Service Requests</h3>
          <p className="text-sm text-gray-600">
            Track progress and communicate with experts.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-5 bg-white shadow-sm">
          <h3 className="font-medium text-ink">Invoices</h3>
          <p className="text-sm text-gray-600">
            View history and download receipts.
          </p>
        </div>
      </div>
    </main>
  );
}
