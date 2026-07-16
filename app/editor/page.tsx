"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function EditorContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = searchParams.get("id");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (id) {
      fetch(`/api/documents/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setTitle(data.title || "");
            setContent(data.content || "");
          }
        });
    }
  }, [id]);

  const saveDocument = async () => {
    if (!title.trim()) {
      alert("Please enter document title");
      return;
    }

    try {
      const response = await fetch(
        id ? `/api/documents/${id}` : "/api/documents",
        {
          method: id ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            content,
            ownerId: "cmri06m210000vra835xn35cz",
          }),
        }
      );

      const data = await response.json();

      if (!id) {
        router.push(`/editor?id=${data.id}`);
      }

      alert(id ? "Document Updated Successfully" : "Document Saved Successfully");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">
          Collaborative Editor
        </h1>

        <input
          type="text"
          placeholder="Enter Document Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing here..."
          className="w-full h-96 border rounded-lg p-4 resize-none"
        />

        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-600">
            Characters: {content.length}
          </span>

          <button
            onClick={saveDocument}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            {id ? "Update Document" : "Save Document"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function EditorPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <EditorContent />
    </Suspense>
  );
}