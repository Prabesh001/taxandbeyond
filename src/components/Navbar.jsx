import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock scroll and close on Escape when menu is open
  useEffect(() => {
    if (open) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [open]);

  return (
    <>
      <header className="border-b border-gray-200 bg-white bg-surface sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-ink hover:bg-gray-100"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 5.25a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <Link to="/" className="flex items-center gap-2">
            <img src="/vite.svg" alt="Tax & Beyond" className="h-8 w-8" />
            <span className="font-semibold text-lg text-ink">Tax & Beyond</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-medium"
                  : "text-ink hover:text-primary"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-medium"
                  : "text-ink hover:text-primary"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-medium"
                  : "text-ink hover:text-primary"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/payment"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-medium"
                  : "text-ink hover:text-primary"
              }
            >
              Payment
            </NavLink>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-medium"
                  : "text-ink hover:text-primary"
              }
            >
              Account
            </NavLink>
            <NavLink
              to="/insurance"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-medium"
                  : "text-ink hover:text-primary"
              }
            >
              Insurance
            </NavLink>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="text-sm text-ink hover:text-primary">
              Login
            </Link>
            <Link
              to="/payment"
              className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-primary-dark"
            >
              Pay Now
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile overlay and sidebar (outside header for reliability) */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-72  bg-white shadow-2xl p-4 flex flex-col transform transition-transform duration-300 ease-out translate-x-0">
            <div className="flex items-center justify-between mb-4">
              <Link
                to="/"
                className="flex items-center gap-2"
                onClick={() => setOpen(false)}
              >
                <img src="/vite.svg" alt="Tax & Beyond" className="h-7 w-7" />
                <span className="font-semibold text-ink">Tax & Beyond</span>
              </Link>
              <button
                className="inline-flex items-center justify-center rounded-md p-2 text-ink hover:bg-gray-100"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex-1 grid gap-2">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 hover:bg-gray-100 text-ink"
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 hover:bg-gray-100 text-ink"
              >
                Services
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 hover:bg-gray-100 text-ink"
              >
                About
              </NavLink>
              <NavLink
                to="/payment"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 hover:bg-gray-100 text-ink"
              >
                Payment
              </NavLink>
              <NavLink
                to="/account"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 hover:bg-gray-100 text-ink"
              >
                Account
              </NavLink>
              <NavLink
                to="/insurance"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 hover:bg-gray-100 text-ink"
              >
                Insurance
              </NavLink>
              <NavLink
                to="/login"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 hover:bg-gray-100 text-ink"
              >
                Login
              </NavLink>
            </nav>
            <Link
              to="/payment"
              onClick={() => setOpen(false)}
              className="mt-auto inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-primary-dark"
            >
              Pay Now
            </Link>
          </aside>
        </div>
      )}
    </>
  );
}
