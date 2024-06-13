import db from "@/lib/db";
import PostList from "../_components/PostList";
import PostForm from "./_components/formInput/postForm";
import { Suspense } from "react";

//export const dynamic = "force-dynamic"
export type postProp = {
  id: string;
  title: String;
  content: String;
};

const PostPage = async () => {
  const posts = await db.post.findMany();


  return (
    <div className="p-6">
      <h1 className="text-5xl text-center flex justify-center">ALL POSTS</h1>

      <div className="max-w-9xl mx-auto rounded-md">
        <Suspense fallback="Loading...">
        <PostList posts={posts} />
        </Suspense>
      </div>
    </div>
  );
};

export default PostPage;
