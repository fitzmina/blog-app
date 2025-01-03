import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/db";

export default async function PostsList() {
  // const url = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5";

  // https://dummyjson.com/posts
  // https://api.vercel.app/blog
  // https://jsonplaceholder.typicode.com/posts

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const posts = await prisma.post.findMany();

  // fetch(url);
  // const posts = await data.json();

  return (
    <ul className="mb-10">
      {posts.map((post) => (
        <li key={post.id} className="mb-3">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
