"use client";

import Sidebar from "../components/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();

  const [documents, setDocuments] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    const res = await fetch("/api/documents");
    const data = await res.json();
    setDocuments(data);
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    router.push("/login");
  };

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 min-h-screen bg-gray-100 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">My Documents</h2>

          {/* Search Box */}
          <input
            type="text"
            placeholder="Search documents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4"
          />

          {documents.length === 0 ? (
            <p>No Documents Found</p>
          ) : (
            <ul className="space-y-3">
              {documents
                .filter((doc: any) =>
                  doc.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((doc: any) => (
                  <li
                    key={doc.id}
                    onClick={() => router.push(`/editor?id=${doc.id}`)}
                    className="border p-4 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
                  >
                    <h3 className="font-bold">{doc.title}</h3>

                    <p className="text-gray-600">{doc.content}</p>

                    <button
                      onClick={async (e) => {
                        e.stopPropagation();

                        if (!confirm("Delete this document?")) return;

                        await fetch(`/api/documents/${doc.id}`, {
                          method: "DELETE",
                        });

                        fetchDocuments();
                      }}
                      className="bg-red-500 text-white px-3 py-1 rounded mt-2"
                    >
                      Delete
                    </button>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}