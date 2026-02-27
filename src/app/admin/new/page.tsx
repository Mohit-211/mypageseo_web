"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewBlogPage() {
  const router = useRouter();

  const today = new Date().toISOString().split("T")[0];

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [createdAt, setCreatedAt] = useState(today);
  const [loading, setLoading] = useState(false);

  function generateSlug(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  }

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!slug) {
      setSlug(generateSlug(value));
    }
  }

  async function handleSubmit() {
    if (!title || !content || !slug) {
      alert("Title, slug and content are required.");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/admin/blogs/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        slug,
        excerpt,
        content,
        bannerImage,
        status,
        createdAt,
      }),
    });

    setLoading(false);

    if (!res.ok) {
      const err = await res.json();
      alert(err.error || "Something went wrong");
      return;
    }

    router.push("/admin");
  }

  return (
    <div className="p-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Create New Blog</h1>

      <label className="block mb-2 font-semibold">Title</label>
      <input
        className="w-full border rounded-lg p-3 mb-4"
        value={title}
        onChange={(e) => handleTitleChange(e.target.value)}
      />

      <label className="block mb-2 font-semibold">Slug</label>
      <input
        className="w-full border rounded-lg p-3 mb-4"
        value={slug}
        onChange={(e) => setSlug(generateSlug(e.target.value))}
      />

      <label className="block mb-2 font-semibold">Excerpt</label>
      <textarea
        className="w-full border rounded-lg p-3 mb-4 h-24"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
      />

      <label className="block mb-2 font-semibold">Banner Image URL</label>
      <input
        className="w-full border rounded-lg p-3 mb-4"
        value={bannerImage}
        onChange={(e) => setBannerImage(e.target.value)}
      />

      <label className="block mb-2 font-semibold">Created At</label>
      <input
        type="date"
        className="w-full border rounded-lg p-3 mb-4"
        value={createdAt}
        onChange={(e) => setCreatedAt(e.target.value)}
      />

      <label className="block mb-2 font-semibold">Content</label>
      <textarea
        className="w-full border rounded-lg p-3 mb-4 h-64"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <label className="block mb-2 font-semibold">Status</label>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as "draft" | "published")}
        className="border rounded-lg p-3 mb-6"
      >
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>

      <div className="flex gap-4">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="px-6 py-3 bg-black text-white rounded-lg disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save"}
        </button>

        <button
          onClick={() => router.push("/admin")}
          className="px-6 py-3 border rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
