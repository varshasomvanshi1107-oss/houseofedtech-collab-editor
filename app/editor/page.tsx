"use client";

import { useState } from "react";

export default function EditorPage() {
  const [content, setContent] = useState("");

  const saveDocument = async () => {
    try {
      const response = await fetch("/api/documents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
        }),
      });

      const data = await response.json();

      alert(data.message);
    } catch (error) {
      console.log(error);
      alert("Save failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">

        <h1 className="text-2xl font-bold mb-4">
          Collaborative Editor
        </h1>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing here..."
          className="w-full h-96 border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="mt-4 flex justify-between items-center">

          <span className="text-sm text-gray-500">
            Characters: {content.length}
          </span>

          <button
            onClick={saveDocument}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Save
          </button>

        </div>

      </div>
    </div>
  );
}