const services = [
  {
    title: "Individual ITR Filing",
    desc: "ITR-1 to ITR-4 with expert support.",
    img: "https://images.unsplash.com/photo-1523246191915-300f24a0b24f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "GST Registration & Returns",
    desc: "Seamless GST onboarding and monthly/quarterly filings.",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "TDS & Payroll",
    desc: "Accurate payroll and TDS compliance.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Company Incorporation",
    desc: "Private limited, LLP, and more.",
    img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Tax Planning",
    desc: "Structure income and investments for efficiency.",
    img: "https://images.unsplash.com/photo-1554224155-bd1f1debb3f0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Insurance Advisory",
    desc: "Life, health, and business insurance.",
    img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-2 text-charcoal">Services</h1>
      <p className="text-ink mb-8">
        Choose from our comprehensive range of tax and insurance solutions.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-lg bg-white overflow-hidden shadow hover:shadow-lg transition border border-gray-200"
          >
            <img
              src={s.img}
              alt={s.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-medium text-ink">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
              <button className="mt-4 inline-flex rounded-md border border-gray-300 px-4 py-2 text-primary text-sm hover:bg-primary/5">
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
