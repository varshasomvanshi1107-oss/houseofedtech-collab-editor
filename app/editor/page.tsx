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
          title: "My First Document",
          content,
          ownerId: "cmri06m210000vra835xn35cz",
        }),
      });

      const data = await response.json();
      console.log(data);
      alert("Document Saved Successfully");
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
          className="w-full h-96 border rounded-lg p-4"
        />

        <div className="mt-4 flex justify-between">
          <span>Characters: {content.length}</span>

          <button
            onClick={saveDocument}
            className="bg-blue-600 text-white px-5 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}