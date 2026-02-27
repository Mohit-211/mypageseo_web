import { db } from "@/lib/firebase-admin";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();

  if (cookieStore.get("admin_auth")?.value !== "true") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const snapshot = await db
    .collection("blogs")
    .orderBy("createdAt", "desc")
    .get();

  const blogs = snapshot.docs.map((doc) => doc.data());

  return NextResponse.json(blogs);
}
