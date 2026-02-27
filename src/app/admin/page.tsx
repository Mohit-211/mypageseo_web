"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Blog = {
  title: string;
  slug: string;
  status: string;
};

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  /* 🔐 Check session on load */
  useEffect(() => {
    async function checkSession() {
      const res = await fetch("/api/admin/blogs/list");

      if (res.status === 401) {
        setIsLoggedIn(false);
        setLoading(false);
        return;
      }

      const data = await res.json();
      setBlogs(data);
      setIsLoggedIn(true);
      setLoading(false);
    }

    checkSession();
  }, []);

  /* 🔑 LOGIN */
  async function handleLogin() {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!res.ok) {
      alert("Wrong password");
      return;
    }

    setPassword("");
    setIsLoggedIn(true);

    // Fetch blogs after login
    const listRes = await fetch("/api/admin/blogs/list");
    const data = await listRes.json();
    setBlogs(data);
  }

  /* 🚪 LOGOUT */
  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setIsLoggedIn(false);
    setBlogs([]);
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  /* 🔒 LOGIN VIEW */
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="border p-8 rounded-xl w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-6">Admin Login</h1>

          <input
            type="password"
            className="w-full border rounded-lg p-3 mb-4"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  /* 📊 DASHBOARD VIEW */
  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-8 mt-14">
        <h1 className="text-3xl font-bold">Blogs</h1>

        <div className="flex gap-4">
          <Link
            href="/admin/new"
            className="px-5 py-2 bg-black text-white rounded-lg"
          >
            + Add New
          </Link>

          <button
            onClick={handleLogout}
            className="px-5 py-2 border rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>

      <table className="w-full border rounded-xl overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Slug</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {blogs.length === 0 ? (
            <tr>
              <td colSpan={4} className="p-6 text-center text-gray-500">
                No blogs yet
              </td>
            </tr>
          ) : (
            blogs.map((blog) => (
              <tr key={blog.slug} className="border-t">
                <td className="p-4">{blog.title}</td>
                <td className="p-4 text-gray-500">{blog.slug}</td>
                <td className="p-4">{blog.status}</td>
                <td className="p-4">
                  <Link
                    href={`/admin/edit/${blog.slug}`}
                    className="text-blue-600"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

/*

{
  title: string
  slug: string
  excerpt: string
  content: string (HTML or Markdown)
  bannerImage: string
  author: string
  status: "draft" | "published"
  createdAt: Timestamp
  updatedAt: Timestamp
  readingTime: number
  tags: string[]
}

*/
