import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        House of EdTech Collaborative Editor
      </h1>

      <p className="text-gray-600 mb-8">
        Welcome! Login or Register to continue.
      </p>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Register
        </Link>
      </div>
    </main>
  );
}