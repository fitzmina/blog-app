import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";

export default async function Post({
  params,
}: {
  params: {
    id: string;
  };
}) {
  // const url = `https://jsonplaceholder.typicode.com/posts/${params.id}`;

  // https://dummyjson.com/posts
  // https://api.vercel.app/blog
  // https://jsonplaceholder.typicode.com/posts

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  // fetch(url);
  // const post = await data.json();

  if (!post) {
    notFound();
  }

  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[44rem] mx-auto">{post.desc}</p>
    </main>
  );
}
