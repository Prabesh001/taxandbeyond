export default function About() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-charcoal">
            About Tax & Beyond
          </h1>
          <p className="text-ink mb-4">
            We are a client-first tax and insurance firm helping thousands of
            individuals and businesses stay compliant and plan smarter. With
            seasoned professionals and modern tools, we deliver accuracy,
            clarity, and peace of mind.
          </p>
          <p className="text-ink">
            Our mission is to simplify complexity—handling your filings,
            planning, and protection so you can focus on growth.
          </p>
        </div>
        <div>
          <img
            className="rounded-lg w-full object-cover shadow"
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop"
            alt="Team at work"
          />
        </div>
      </div>
    </main>
  );
}
