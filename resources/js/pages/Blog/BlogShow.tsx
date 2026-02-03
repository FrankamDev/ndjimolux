import { Head, Link } from "@inertiajs/react";
import "./blog.css";
interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  image?: string;
  category?: string;
  published_at?: string;
}

export default function BlogShow({ post }: { post: Post }) {
  return (
    <>
      <Head title={post.title} />

      <div className="min-h-screen bg-black text-white">

        {/* Hero Image */}
        {post.image && (
          <div className="w-full h-[400px] relative">
            <img
              src={`/storage/${post.image}`}
              alt={post.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          </div>
        )}

        <div className="max-w-4xl mx-auto px-6 py-16">

          {/* Back button */}
          <Link
            href="/blog"
            className="text-green-400 text-sm hover:underline mb-8 inline-block"
          >
            ← Retour au blog
          </Link>

          {/* Category */}
          {post.category && (
            <span className="text-green-400 text-xs uppercase tracking-wider font-semibold">
              {post.category}
            </span>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Date */}
          <p className="text-gray-500 text-sm mb-10">
            {post.published_at}
          </p>

          {/* Content */}
          <div
            className="
    rich-content
    prose prose-rich prose-invert max-w-none
  "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </div>
      </div>
    </>
  );
}
