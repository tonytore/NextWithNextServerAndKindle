import React from "react";
import PostForm from "../_components/formInput/postForm";
import db from "@/lib/db";
import { postProp } from "../page";
import Link from "next/link";

const CreatePost = async () => {
  const posts = await db.post.findMany();
  return (
    <div className="bg-white dark:bg-zinc-700">
      <PostForm />
    </div>
  );
};

export default CreatePost;
