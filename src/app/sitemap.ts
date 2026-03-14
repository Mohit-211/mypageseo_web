import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { getAllSlugs } from "@/lib/blogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://mypageseo.com";
  const appDir = path.join(process.cwd(), "src/app");

  function getRoutes(dir: string, basePath = ""): string[] {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    let routes: string[] = [];

    for (const entry of entries) {
      if (entry.name.startsWith("_")) continue;
      if (entry.name.startsWith("(")) continue;
      if (entry.name.startsWith("[")) continue;
      if (entry.name === "api") continue;

      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        routes = routes.concat(
          getRoutes(fullPath, `${basePath}/${entry.name}`)
        );
      }

      if (entry.name === "page.tsx") {
        routes.push(basePath || "");
      }
    }

    return routes;
  }

  /* ---------------- STATIC PAGES ---------------- */

  const staticRoutes: MetadataRoute.Sitemap = getRoutes(appDir).map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "daily" : "weekly",
      priority: route === "" ? 1 : 0.7,
    })
  );

  /* ---------------- BLOG PAGES ---------------- */

  const slugs = await getAllSlugs();

  const blogRoutes: MetadataRoute.Sitemap = slugs.map(({ slug }) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
