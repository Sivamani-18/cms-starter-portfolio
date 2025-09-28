'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

type DevToPost = {
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  published_at: string;
  reading_time_minutes: number;
  url: string;
  cover_image: string | null;
  social_image: string;
  tag_list: string[] | string;
  type_of: 'article' | string;
};

interface BlogProps {
  /** initial number of posts to show per page */
  perPage?: number;
}

export const Blog: React.FC<BlogProps> = ({ perPage = 6 }) => {
  const [posts, setPosts] = useState<DevToPost[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchPage = useCallback(async (pageToLoad: number) => {
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch(
        `https://dev.to/api/articles?username=sivamani18&per_page=${perPage}&page=${pageToLoad}`,
        { cache: 'no-store' }
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: DevToPost[] = await res.json();

      // Only keep articles and de-duplicate by id
      const newArticles = data.filter(p => p.type_of === 'article');
      setPosts(prev => {
        const byId = new Map(prev.map(p => [p.id, p]));
        newArticles.forEach(p => byId.set(p.id, p));
        return Array.from(byId.values());
      });

      // If we got fewer than perPage, no more pages
      setHasMore(newArticles.length === perPage);
      setPage(prev => prev + 1);
    } catch (e: any) {
      setErr(e?.message || 'Failed to load posts');
    } finally {
      setLoading(false);
    }
  }, [perPage]);

  useEffect(() => {
    // initial load
    fetchPage(1);
  }, [fetchPage]);

  const onShowMore = () => {
    if (!loading && hasMore) fetchPage(page);
  };

  return (
    <section id="blog" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Latest <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Blog Posts</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base lg:text-lg">
            Insights, tutorials, and thoughts on modern frontend development and web technologies.
          </p>
        </div>

        {err && (
          <p className="text-center text-red-300 mb-8">Couldn’t load DEV posts: {err}</p>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => {
            const img = post.cover_image || post.social_image;
            const readTime = `${post.reading_time_minutes} min read`;
            const dateStr = new Date(post.published_at).toLocaleDateString(undefined, {
              year: 'numeric', month: 'short', day: 'numeric'
            });
            const tags = Array.isArray(post.tag_list)
              ? post.tag_list
              : String(post.tag_list || '')
                  .split(',')
                  .map(t => t.trim())
                  .filter(Boolean);

            return (
              <article
                key={post.id}
                className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img}
                    alt={post.title}
                    className="w-full h-48 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {tags[0] && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-cyan-500/80 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                        {tags[0]}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 lg:p-8">
                  <div className="flex items-center text-sm text-white/60 mb-4">
                    <Calendar size={16} className="mr-2" />
                    {dateStr}
                    <span className="mx-2">•</span>
                    {readTime}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    <a href={post.url} target="_blank" rel="noreferrer" className="block">
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed text-sm lg:text-base">
                    {post.description}
                  </p>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-white font-medium transition-colors text-sm lg:text-base"
                    aria-label={`Read "${post.title}" on DEV.to (opens in a new tab)`}
                  >
                    Read More <ChevronRight size={16} className="ml-2" />
                  </a>
                </div>
              </article>
            );
          })}

          {/* loading placeholders when fetching next page */}
          {loading && Array.from({ length: perPage }).map((_, i) => (
            <div key={`skeleton-${i}`} className="animate-pulse bg-white/5 rounded-3xl border border-white/10 h-80" />
          ))}
        </div>

        {/* Show more */}
        <div className="mt-10 flex items-center justify-center">
          {hasMore ? (
            <button
              onClick={onShowMore}
              disabled={loading}
              className="px-5 py-3 rounded-xl border border-white/20 text-cyan-300 hover:text-white hover:border-white/40 bg-white/5 hover:bg-white/10 transition disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Load more posts"
            >
              {loading ? 'Loading…' : 'Show more'}
            </button>
          ) : (
            posts.length > 0 && (
              <span className="text-white/60 text-sm">No more posts</span>
            )
          )}
        </div>
      </div>
    </section>
  );
};
