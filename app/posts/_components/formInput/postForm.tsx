"use client";

import { addPost } from "@/lib/action";
import React from "react";
import SubmitButton from "../submitButton";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

export default function PostForm() {
  return (
    <div>
      <form
        action={addPost}
        className="w-full max-w-4xl p-4   
     dark:bg-zinc-700 bg-transparent my-12 sm:p-6 md:p-8  bg-slate-50
     text-slate-500 dark:text-slate-50
    border-gray-100 mx-auto"
      >
        <div className="flex flex-col gap-4 sm:gap-6">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="border rounded h-10 px-3"
          />
          <textarea
            name="content"
            cols={30}
            rows={10}
            placeholder="content"
            className="text-start p-4 text-xl"
          />
        </div>

        <div className="flex  flex-col   px-8 items-center text-center py-5 justify-between mx-auto">
          <div className="w-full text-center">
          <SubmitButton/>
          </div>
          <LogoutLink className="w-full dark:bg-white dark:text-black border shadow-md p-2 px-6 rounded-lg">Logout</LogoutLink>
        </div>
      </form>
    </div>
  );
}
