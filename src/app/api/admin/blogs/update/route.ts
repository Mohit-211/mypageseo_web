import { db } from "@/lib/firebase-admin";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

function calculateReadingTime(content: string) {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200);
}

export async function PUT(req: Request) {
  const cookieStore = await cookies();

  if (cookieStore.get("admin_auth")?.value !== "true") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await req.json();

  if (!data.slug || !data.title || !data.content || !data.createdAt) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const readingTime = calculateReadingTime(data.content);

  await db
    .collection("blogs")
    .doc(data.slug)
    .update({
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt || "",
      content: data.content,
      bannerImage: data.bannerImage || "",
      status: data.status || "draft",
      createdAt: new Date(data.createdAt),
      readingTime,
    });

  return NextResponse.json({ success: true });
}
