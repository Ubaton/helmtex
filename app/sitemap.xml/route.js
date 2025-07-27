import { getAllPosts } from "../../lib/posts"; // your existing post fetcher

export async function GET() {
  const posts = getAllPosts(); // get all blog posts
  const baseUrl = "https://www.helmtex.co.za";

const urls = posts
  .map((post) => {
    const date = new Date(post.date);
    const lastmod = isNaN(date.getTime())
      ? new Date().toISOString() // fallback to current time
      : date.toISOString();

    return `
      <url>
        <loc>${baseUrl}/blog/${post.slug}</loc>
        <lastmod>${lastmod}</lastmod>
      </url>`;
  })
  .join("");
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    ${urls}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
