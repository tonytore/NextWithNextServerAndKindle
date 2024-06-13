"use client"

import { Plus } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";


export default function SubmitButton() {
  const {pending} = useFormStatus()
  return (
    <div className="pb-3">
     
        <button
          type="submit"
          disabled={pending}
          className="bg-blue-600 dark:bg-black dark:text-white w-full text-center border shadow-md p-2 px-6 flex justify-center text-zinc-950 rounded-md   items-center "
        >
          
          <Plus className="w-5 h-5 mr-2 " />
          <span>submit</span>
        </button>
  
    </div>
  );
}