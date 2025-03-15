import { articles } from "../../../lib/data";

const BlogPost = async ({ params }) => {
  const { slug } = await params;

  // Find the blog based on the slug
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="text-center mt-20 text-xl text-red-500">
        Blog not found
      </div>
    );
  }

  // Dynamically import the blog component
  const BlogComponent = (
    await import(`../../../components/Blogs/${article.component}`)
  ).default;

  return (
    <div className="container mx-auto px-4 py-8">
      <BlogComponent />
    </div>
  );
};

export async function generateStaticParams() {
  // Pre-build all paths
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default BlogPost;
