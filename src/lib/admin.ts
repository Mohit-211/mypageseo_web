import { cookies } from "next/headers";

export async function isAdminSession() {
  const cookieStore = await cookies(); // ✅ FIX

  const admin = cookieStore.get("admin");

  return admin?.value === "true";
}
