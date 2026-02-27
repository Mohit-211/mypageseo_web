import { db } from "@/lib/firebase-admin";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const cookieStore = await cookies();

  if (cookieStore.get("admin_auth")?.value !== "true") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const doc = await db.collection("blogs").doc(params.slug).get();

  if (!doc.exists) {
    return NextResponse.json(null, { status: 404 });
  }

  return NextResponse.json(doc.data());
}
