import PostsList from "@/components/posts-list";
import React, { Suspense } from "react";

export default async function Posts() {
  return (
    <main className="text-center pt-12 px-5">
      <h1 className="text-4xl font-bold mb-5 md:text-5xl  ">All Posts</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <PostsList />
      </Suspense>
    </main>
  );
}
