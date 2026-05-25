export default function UserForm({ user, setUser }: any) {
  return (
    <div className="grid gap-4">
      <input
        placeholder="Full Name"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        className="w-full px-4 py-2 rounded-md border bg-background
        focus:outline-none focus:ring-2 focus:ring-brand-red transition"
      />

      <input
        placeholder="Email Address"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="w-full px-4 py-2 rounded-md border bg-background
        focus:outline-none focus:ring-2 focus:ring-brand-red transition"
      />

      <input
        placeholder="Business Name (Optional)"
        onChange={(e) => setUser({ ...user, business: e.target.value })}
        className="w-full px-4 py-2 rounded-md border bg-background
        focus:outline-none focus:ring-2 focus:ring-brand-red transition"
      />
    </div>
  );
}
