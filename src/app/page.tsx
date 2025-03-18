// app/pages.tsx
"use client";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      setData("");
      const response = await fetch("/api/service");
      const result = await response.json();
      setData(result.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-2 flex flex-col gap-4">
      <h1 className="">Home Page</h1>
      <form onSubmit={handleSubmit}>
        <button
          className="bg-blue-500 text-white py-1 px-2 rounded disabled:bg-gray-500"
          disabled={isSubmitting}
        >
          Fetch Data
        </button>
      </form>
      <textarea
        className="w-full h-32 mt-4 p-2 border"
        value={data ? data : ""}
        readOnly
      />
    </div>
  );
}
