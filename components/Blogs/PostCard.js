import Link from "next/link";
import Image from "next/image";

export default function PostCard({ post }) {
  return (
    <li className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition overflow-hidden flex flex-col sm:flex-row">
      {post.featuredImage && (
        <div className="relative w-full sm:w-1/3 h-48 sm:h-64 lg:h-56">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <Link href={`/blog/${post.slug}`}>
            <a className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
              {post.title}
            </a>
          </Link>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {post.author?.avatar && (
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}
            <span className="text-sm font-medium">
              {post.author?.name || "Unknown Author"}
            </span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {post.date}
          </span>
        </div>
      </div>
    </li>
  );
}
