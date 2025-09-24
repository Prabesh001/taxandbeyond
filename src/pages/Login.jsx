export default function Login() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md mx-auto border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-semibold mb-6 text-charcoal">Login</h1>
        <div className="grid gap-4">
          <input
            className="border border-gray-300 rounded-md px-3 py-2 bg-white text-ink"
            placeholder="Email"
          />
          <input
            className="border border-gray-300 rounded-md px-3 py-2 bg-white text-ink"
            placeholder="Password"
            type="password"
          />
          <button className="rounded-md bg-primary px-5 py-2.5 text-white font-medium hover:bg-primary-dark">
            Sign in
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          By signing in, you agree to our terms and privacy policy.
        </p>
      </div>
    </main>
  );
}
