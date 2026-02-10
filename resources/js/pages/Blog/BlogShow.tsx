import { Head, Link } from "@inertiajs/react";
import "./blog.css";
import CommentSection from "@/components/Comments/CommentSection";
import NavBar from "@/components/NavBar";
import type { Post } from "@/types";

export default function BlogShow({ post }: { post: Post }) {
  return (
    <>
      <Head title={post.title}>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        {post.image_url && <meta property="og:image" content={post.image_url} />}
      </Head>
      <NavBar />

      <div className="min-h-screen bg-black text-white pb-20 pt-20"> {/* params pt-20 pour navbar fixed */}

        {/* Mobile Header / Social Style */}
        <div className="max-w-3xl mx-auto bg-gray-900/50 md:rounded-xl overflow-hidden md:mt-6 border-b md:border border-gray-800">

          {/* Author Info & Meta */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-20 z-10 md:static md:bg-transparent">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold text-sm">
                {post.author?.avatar ? (
                  <img src={post.author.avatar} alt={post.author.name} className="w-full h-full rounded-full object-cover" />
                ) : (
                  <span>{post.author?.initials || 'NJ'}</span>
                )}
              </div>
              <div>
                <h3 className="text-sm font-bold text-white leading-none mb-1">{post.author?.name || 'Njimolux'}</h3>
                <p className="text-xs text-gray-400">{post.published_at} • {post.category}</p>
              </div>
            </div>

            <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
              ✕ Fermer
            </Link>
          </div>

          {/* Post Content */}
          <article>
            {/* Title */}
            <div className="px-4 py-3">
              <h1 className="text-xl md:text-3xl font-bold leading-tight text-white">
                {post.title}
              </h1>
            </div>

            {/* Hero Image - Full Width on Mobile */}
            {post.image_url && (
              <div className="w-full relative aspect-square md:aspect-video bg-gray-800">
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Body */}
            <div className="px-4 py-6 md:px-8 md:py-8">
              <div
                className="
                  prose prose-invert max-w-none
                  prose-p:text-gray-300 prose-p:text-[16px] prose-p:leading-relaxed
                  prose-headings:text-emerald-400 prose-headings:font-bold
                  prose-a:text-emerald-400 hover:prose-a:text-emerald-300
                  prose-blockquote:border-l-emerald-500 prose-blockquote:bg-gray-800/30 prose-blockquote:py-1 prose-blockquote:px-4
                  prose-img:rounded-xl prose-img:w-full
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>

          {/* Interaction Bar (Placeholder for now) */}
          <div className="px-4 py-3 border-t border-gray-800 flex items-center justify-between text-gray-400 text-sm">
            <span>0 J'aime</span>
            <span>{post.comments ? post.comments.length : 0} Commentaires</span>
          </div>

          <div className="grid grid-cols-3 border-t border-gray-800 divide-x divide-gray-800">
            <button className="py-3 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
              <span>👍</span> <span className="hidden sm:inline">J'aime</span>
            </button>
            <button className="py-3 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
              <span>💬</span> <span className="hidden sm:inline">Commenter</span>
            </button>
            <button className="py-3 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
              <span>↗️</span> <span className="hidden sm:inline">Partager</span>
            </button>
          </div>

          {/* Comments Section */}
          <div className="px-4 py-6 border-t border-gray-800">
            <CommentSection comments={post.comments || []} postId={post.id} />
          </div>

        </div>
      </div>
    </>
  );
}
