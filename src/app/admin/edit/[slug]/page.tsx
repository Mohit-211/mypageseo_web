"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditBlogPage() {
  const params = useParams();
  const router = useRouter();
  const slugParam = params.slug as string;

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [createdAt, setCreatedAt] = useState("");
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  function generateSlug(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  }

  /* 🔄 Fetch Blog */
  useEffect(() => {
    async function fetchBlog() {
      const res = await fetch(`/api/admin/blogs/${slugParam}`);

      if (!res.ok) {
        alert("Blog not found");
        router.push("/admin");
        return;
      }

      const data = await res.json();

      setTitle(data.title || "");
      setSlug(data.slug || "");
      setExcerpt(data.excerpt || "");
      setContent(data.content || "");
      setBannerImage(data.bannerImage || "");
      setStatus(data.status || "draft");

      if (data.createdAt?.seconds) {
        const date = new Date(data.createdAt.seconds * 1000)
          .toISOString()
          .split("T")[0];
        setCreatedAt(date);
      }

      setInitialLoading(false);
    }

    fetchBlog();
  }, [slugParam, router]);

  /* 💾 Update */
  async function handleSave() {
    if (!title || !content || !slug || !createdAt) {
      alert("Missing required fields");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/admin/blogs/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
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
      alert(err.error || "Update failed");
      return;
    }

    router.push("/admin");
  }

  if (initialLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Edit Blog</h1>

      <label className="block mb-2 font-semibold">Title</label>
      <input
        className="w-full border rounded-lg p-3 mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
          onClick={handleSave}
          disabled={loading}
          className="px-6 py-3 bg-black text-white rounded-lg disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Changes"}
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
