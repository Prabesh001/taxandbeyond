export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-ink">Tax & Beyond</h3>
          <p className="text-sm text-gray-600">
            Reliable taxation and insurance services tailored for individuals
            and businesses.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-ink">Get in touch</h4>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>Phone: (555) 123-4567</li>
            <li>Email: hello@taxandbeyond.com</li>
            <li>Address: 123 Finance Ave, Suite 400, Metropolis</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-ink">Links</h4>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              <a href="/services" className="hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="/payment" className="hover:text-primary">
                Payment
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Tax & Beyond. All rights reserved.
      </div>
    </footer>
  );
}
