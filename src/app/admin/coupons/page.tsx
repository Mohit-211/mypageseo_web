"use client";

import { useEffect, useState } from "react";

type Coupon = {
  id: number;
  code: string;
  type: string;
  value: number;
  isActive: boolean;
  used: boolean;
  expiresAt: string;
};

export default function CouponsPage() {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    code: "",
    type: "flat",
    value: "",
  });

  async function fetchCoupons() {
    const res = await fetch("/api/admin/coupons/list");

    if (res.status === 401) {
      alert("Unauthorized");
      return;
    }

    const data = await res.json();
    setCoupons(data.coupons);
    setLoading(false);
  }

  useEffect(() => {
    fetchCoupons();
  }, []);

  async function handleCreate() {
    if (!form.code || !form.value) {
      alert("Fill all fields");
      return;
    }

    const res = await fetch("/api/admin/coupons/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: form.code,
        type: form.type,
        value: Number(form.value),
      }),
    });

    if (!res.ok) {
      alert("Failed to create");
      return;
    }

    setForm({ code: "", type: "flat", value: "" });
    fetchCoupons();
  }

  async function toggleCoupon(id: number) {
    await fetch("/api/admin/coupons/toggle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    fetchCoupons();
  }

  return (
    <div className="p-10 mt-14">
      <h1 className="text-3xl font-bold mb-8">Coupons</h1>

      {/* CREATE */}
      <div className="border p-6 rounded-xl mb-10 max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Create Coupon</h2>

        <input
          placeholder="Code"
          value={form.code}
          onChange={(e) =>
            setForm({ ...form, code: e.target.value.toUpperCase() })
          }
          className="border p-2 w-full mb-3"
        />

        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="border p-2 w-full mb-3"
        >
          <option value="flat">Flat</option>
          <option value="percentage">Percentage</option>
        </select>

        <input
          type="number"
          placeholder="Value"
          value={form.value}
          onChange={(e) => setForm({ ...form, value: e.target.value })}
          className="border p-2 w-full mb-4"
        />

        <button
          onClick={handleCreate}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Create Coupon
        </button>
      </div>

      {/* TABLE */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Code</th>
              <th className="p-4">Type</th>
              <th className="p-4">Value</th>
              <th className="p-4">Status</th>
              <th className="p-4">Expiry</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {coupons.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="p-4 font-semibold">{c.code}</td>

                <td className="p-4">{c.type}</td>

                <td className="p-4">
                  {c.type === "flat"
                    ? `$${(c.value / 100).toFixed(2)}`
                    : `${c.value}%`}
                </td>

                <td className="p-4">
                  {c.used ? "Used" : c.isActive ? "Active" : "Inactive"}
                </td>

                <td className="p-4 text-sm text-gray-500">
                  {new Date(c.expiresAt).toLocaleString()}
                </td>

                <td className="p-4">
                  <button
                    onClick={() => toggleCoupon(c.id)}
                    className="text-blue-600"
                  >
                    Toggle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
