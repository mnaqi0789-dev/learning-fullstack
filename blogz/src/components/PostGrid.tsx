// components/PostGrid.tsx
import type { Post } from "@/lib/posts";
import PostCard from "./PostCard";

interface PostGridProps {
  posts: Post[];
}

export default function PostGrid({ posts }: PostGridProps) {
  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white/50 p-12 text-center">
        <p className="text-slate-500">No posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <PostCard
          key={post.id || `fallback-key-${index}`} // <-- FIXED: Guarantees a unique key
          post={post}
        />
      ))}
    </div>
  );
}
