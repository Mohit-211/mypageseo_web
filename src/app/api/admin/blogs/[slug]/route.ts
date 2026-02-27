import { db } from "@/lib/firebase-admin";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  const cookieStore = await cookies();

  if (cookieStore.get("admin_auth")?.value !== "true") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const doc = await db.collection("blogs").doc(slug).get();

  if (!doc.exists) {
    return NextResponse.json(null, { status: 404 });
  }

  return NextResponse.json(doc.data());
}
