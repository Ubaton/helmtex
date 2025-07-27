import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
} from "lucide-react"
import { Button } from "../ui/button"

export default function RichBlogPost({ post }) {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <header className="relative">
        <nav className="absolute top-0 left-0 right-0 z-10 p-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-white hover:text-gray-200 transition-colors duration-200 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </nav>

        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <Image
            src={post.featuredImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              {post.subtitle && (
                <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-3xl">
                  {post.subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Meta */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Image
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {post.author.name}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="flex items-center space-x-1 bg-transparent">
              <Heart className="w-4 h-4" />
              <span>{post.likes}</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-1 bg-transparent">
              <MessageCircle className="w-4 h-4" />
              <span>{post.comments}</span>
            </Button>
            <Button variant="outline" size="sm"><Bookmark className="w-4 h-4" /></Button>
            <Button variant="outline" size="sm"><Share2 className="w-4 h-4" /></Button>
          </div>
        </div>

        {/* Content */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-bold 
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:mb-4 prose-p:leading-relaxed
            prose-ul:my-4 prose-li:my-1 list-disc pl-6
            prose-a:text-blue-600 hover:prose-a:underline
            prose-strong:text-gray-900 dark:prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tags/${tag.toLowerCase()}`}
                className="inline-block px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <div className="flex items-start space-x-4">
            <Image
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              width={64}
              height={64}
              className="rounded-full"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                About {post.author.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{post.author.bio}</p>
              <div className="flex space-x-3">
                {post.author.social?.twitter && (
                  <a
                    href={`https://twitter.com/${post.author.social.twitter.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-500"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {post.author.social?.linkedin && (
                  <a
                    href={`https://linkedin.com/in/${post.author.social.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Share Options */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Share this article</h3>
          <div className="flex space-x-3">
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
              <Twitter className="w-4 h-4" />
              <span>Twitter</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
              <Copy className="w-4 h-4" />
              <span>Copy Link</span>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
