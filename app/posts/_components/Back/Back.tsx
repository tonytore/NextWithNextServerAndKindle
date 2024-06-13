"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import logo from "../../../../public/logoipsum-332.svg";
import { ArrowLeft } from "lucide-react";

export default function Back() {
  const router = useRouter();
  return (
    <div className="flex justify-between md:mx-24  rounded-md shadow-sm items-center text-white py-6">
      <Image src={logo} alt="logo" />
      <button
        className="flex gap-2 items-center text-slate-950 dark:text-slate-200 text-2xl px-5 hover:text-zink-900"
        onClick={() => router.back()}
      >
        <ArrowLeft />
      </button>
    </div>
  );
}
