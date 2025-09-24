import { Link } from "react-router-dom";

const services = [
  {
    title: "Individual Tax Filing",
    desc: "Accurate returns and optimized deductions.",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Business Compliance",
    desc: "Bookkeeping, GST, TDS, and ROC filings.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Tax Planning",
    desc: "Year-round advice to minimize liabilities.",
    img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Insurance Advisory",
    desc: "Life, health, and business risk coverage.",
    img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-charcoal">
            Beyond Taxes. Towards Peace of Mind.
          </h1>
          <p className="text-lg md:text-xl text-ink mb-8 max-w-3xl mx-auto">
            End-to-end tax, compliance, and insurance services for individuals
            and businesses. Reliable, transparent, and on time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/account"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-gray-800 font-medium hover:bg-primary-dark shadow"
            >
              Open an Account
            </Link>
            <Link
              to="/insurance"
              className="inline-flex items-center rounded-md border border-gray-300 px-6 py-3 text-primary font-medium hover:bg-primary/5"
            >
              Explore Insurance
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-charcoal">
          Our Services
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-lg bg-white overflow-hidden shadow hover:shadow-lg transition border border-gray-200"
            >
              <img
                src={s.img}
                alt={s.title}
                className="h-36 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-medium text-ink">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="bg-surface py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-charcoal">
              Contact us
            </h2>
            <p className="text-gray-600 mb-6">
              Send your details and message—we’ll get back within 1 business
              day.
            </p>
            <form className="grid gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  className="border border-gray-300 rounded-md px-3 py-2 bg-white text-ink"
                  placeholder="First name"
                />
                <input
                  className="border border-gray-300 rounded-md px-3 py-2 bg-white text-ink"
                  placeholder="Last name"
                />
              </div>
              <input
                className="border border-gray-300 rounded-md px-3 py-2 bg-white text-ink"
                placeholder="Email"
              />
              <input
                className="border border-gray-300 rounded-md px-3 py-2 bg-white text-ink"
                placeholder="Phone"
              />
              <textarea
                className="border border-gray-300 rounded-md px-3 py-2 min-h-28 bg-white text-ink"
                placeholder="Your message"
              />
              <button
                type="button"
                className="inline-flex w-fit rounded-md bg-accent px-5 py-2.5 text-white font-medium hover:opacity-90 shadow"
              >
                Send message
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-charcoal">
              Get in touch
            </h3>
            <ul className="text-ink space-y-2">
              <li>Phone: (555) 123-4567</li>
              <li>Email: hello@taxandbeyond.com</li>
              <li>Office: 123 Finance Ave, Suite 400, Metropolis</li>
            </ul>
            <div className="mt-6">
              <img
                src="https://images.unsplash.com/photo-1502920917128-1aa500764ce7?q=80&w=1200&auto=format&fit=crop"
                alt="Office"
                className="rounded-lg w-full object-cover h-64 shadow"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
