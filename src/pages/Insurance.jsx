export default function Insurance() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-4 text-charcoal">
        Insurance Services
      </h1>
      <p className="text-ink mb-6">
        Protect what matters with the right coverage. Our advisors help you
        choose policies that fit your needs and budget.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Health Insurance",
            img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
          },
          {
            title: "Life Insurance",
            img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1200&auto=format&fit=crop",
          },
          {
            title: "Business Insurance",
            img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
          },
        ].map((p) => (
          <div
            key={p.title}
            className="rounded-lg bg-white overflow-hidden shadow border border-gray-200"
          >
            <img
              src={p.img}
              alt={p.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-medium text-ink">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                Get quotes and compare plans with expert guidance.
              </p>
              <button className="mt-3 inline-flex rounded-md border border-gray-300 px-4 py-2 text-primary text-sm hover:bg-primary/5">
                Request Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
