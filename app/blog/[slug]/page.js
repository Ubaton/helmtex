import { notFound } from "next/navigation";
import { getPostBySlug } from "../../../lib/posts";
import RichBlogPost from "../../../components/Blogs/RichBlogPost";

// SEO Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return {
    title: post.title,
    description: post.excerpt || "Discover the latest trends and insights from Helm Textile Mills.",
    keywords: [
      ...(post.tags || []),
      "Helmtex",
      "Textile Manufacturer",
      "Fabric Supplier South Africa",
      "Upholstery",
      "Curtains",
      "Bulk Fabric",
      "Tender Fabric",
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.helmtex.co.za/blog/${slug}`,
      type: "article",
      images: post.featuredImage
        ? [`https://www.helmtex.co.za${post.featuredImage}`]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage
        ? [`https://www.helmtex.co.za${post.featuredImage}`]
        : [],
    },
  };
}

// ✅ Async function for correct `params` usage
export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();
  return <RichBlogPost post={post} />;
}
