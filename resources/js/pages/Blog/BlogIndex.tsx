import { Head, Link } from "@inertiajs/react";
import NavBar from "@/components/NavBar";

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  image?: string;
  category?: string;
  published_at?: string;
}

export default function BlogIndex({ posts }: { posts: Post[] }) {
  return (
    <>
      <Head title="Blog" />
      <NavBar />
      <div className="min-h-screen mt-10 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* Header */}
          <div className="mb-14 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Blog de Njimoluxe
            </h1>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Découvrez nos derniers articles, conseils et ressources.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden transition duration-300 hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]">

                  {/* Image */}
                  {post.image && (
                    <div className="overflow-hidden">
                      <img
                        src={post.image || '/default-image.jpg'}
                        alt={post.title}
                        className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {post.category && (
                      <span className="inline-block mb-3 text-xs font-semibold tracking-wider uppercase text-green-400">
                        {post.category}
                      </span>
                    )}

                    <h2 className="text-xl font-bold mb-3 group-hover:text-green-400 transition">
                      {post.title}
                    </h2>

                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                      {post.excerpt ??
                        post.content.substring(0, 120) +
                        "..."}
                    </p>

                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{post.published_at}</span>
                      <span className="text-green-400 font-semibold group-hover:underline">
                        Lire →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
