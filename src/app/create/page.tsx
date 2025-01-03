import { createPost } from "@/actions/action";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { redirect } from "next/navigation";
import React from "react";

export default async function Create() {
  // const { isAuthenticated } = getKindeServerSession();

  // if (!(await isAuthenticated())) {
  //   redirect("/api/auth/login?post_login_redirect_url=/create");
  // }

  return (
    <main className="text-center pt-12 px-5 ">
      <h1 className="text-4xl font-bold mb-5 md:text-5xl  ">Create Post</h1>

      <form
        action={createPost}
        className="flex flex-col gap-2 max-w-[35rem] mx-auto mb-5"
      >
        <input
          type="text"
          name="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Title"
          required
        />
        <textarea
          name="desc"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Description"
          required
          rows={6}
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
          Submit
        </button>
      </form>
      <LogoutLink>Logout</LogoutLink>
    </main>
  );
}
