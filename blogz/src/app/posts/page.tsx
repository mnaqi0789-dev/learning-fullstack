"use client";
import React from 'react'
import { usePosts } from "../../hooks/usePosts";
import PostGrid from "../../components/PostGrid";

const Page = () => {
 const { data: posts, isLoading, isError, error } = usePosts();

 if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
        <span className="ml-2 text-slate-600 font-medium">Loading posts...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mx-auto max-w-md my-12 p-6 rounded-2xl border border-red-200 bg-red-50 text-center text-red-700">
        <h3 className="font-bold text-lg">Failed to load posts</h3>
        <p className="text-sm mt-1">{(error as Error)?.message || "Unknown error occurred"}</p>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 space-y-4">
        {/* <p className="text-slate-500">Explore technical writeups and financial analysis.</p> */}
        
      </div>

      <PostGrid posts={posts || []} />
    </main>
  );
}

export default Page