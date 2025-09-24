export default function Payment() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-charcoal">
            Quick & Secure Payment
          </h1>
          <p className="text-ink mb-6">
            Pay for services securely online. We accept UPI, cards, and net
            banking. Invoices are sent instantly to your email.
          </p>
          <button className="rounded-md bg-primary px-6 py-3 text-white font-medium hover:bg-primary-dark shadow">
            Proceed to Pay
          </button>
        </div>
        <div>
          <img
            className="rounded-lg w-full object-cover shadow"
            src="https://images.unsplash.com/photo-1518544801976-3e1772d1464a?q=80&w=1600&auto=format&fit=crop"
            alt="Payment"
          />
        </div>
      </div>
    </main>
  );
}
