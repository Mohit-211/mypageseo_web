import { db } from "@/lib/firebase-admin";

/* 🔹 Get All Published Blogs */
export async function getAllBlogs() {
  const snapshot = await db
    .collection("blogs")
    .where("status", "==", "published")
    .orderBy("createdAt", "desc")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

/* 🔹 Get Single Blog by Slug (doc ID) */
export async function getBlogBySlug(slug?: string) {
  if (!slug) return null;

  const doc = await db.collection("blogs").doc(slug).get();

  if (!doc.exists) return null;

  const data = doc.data();

  if (!data || data.status !== "published") return null;

  return {
    id: doc.id,
    ...data,
  };
}

/* 🔹 Get All Slugs for Static Generation */
export async function getAllSlugs() {
  const snapshot = await db
    .collection("blogs")
    .where("status", "==", "published")
    .get();

  return snapshot.docs.map((doc) => ({
    slug: doc.id, // slug is doc ID
  }));
}
