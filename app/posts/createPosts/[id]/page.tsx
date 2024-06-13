import db from "@/lib/db";
import React from "react";
import Back from "../../_components/Back/Back";

export type CreatePostPageProps = {
  params: {
    id: String;
  };
};

const CreatePostPage = async ({ params }: CreatePostPageProps) => {
  const posts = await db.post.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <div>
      <Back />
      <div className="px-7 pt-24 text-center">
        <h1 className="text-5xl font-semibold mb-7">{posts.title}</h1>
        <p className="max-w-[700px] mx-auto">{posts.content}</p>
      </div>
    </div>
  );
};

export default CreatePostPage;
