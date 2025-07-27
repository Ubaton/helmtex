import BlogList from "../../components/Blogs/BlogsList";

export default async function BlogPage({ searchParams }) {
  const page = parseInt((await searchParams)?.page || "1", 10);

  return <BlogList currentPage={page} />;
}
