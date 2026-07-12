export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
          />

          <button className="w-full bg-green-600 text-white p-3 rounded-lg">
            Register
          </button>
        </form>
      </div>
    </main>
  );
}