import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">
        Collab Editor
      </h1>

      <nav className="space-y-4">
        <Link href="/dashboard" className="block hover:text-blue-400">
          Dashboard
        </Link>

        <Link href="/editor" className="block hover:text-blue-400">
          Editor
        </Link>

        <Link href="/login" className="block hover:text-blue-400">
          Login
        </Link>

        <Link href="/register" className="block hover:text-blue-400">
          Register
        </Link>
      </nav>
    </aside>
  );
}