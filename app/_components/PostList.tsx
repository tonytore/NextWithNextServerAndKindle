import React, { Suspense } from "react";
import db from "@/lib/db";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface postProp {
  posts: [
    {
      id: Number;
      title: String;
    }
  ];
}
export default async function PostList({ posts }: postProp) {
  return(
    <Carousel
    opts={{
      align: "start",
      loop: true,
    }}
    orientation="vertical"
    className="w-full text-center max-w-7xl flex flex-col gap-3 mx-auto mt-14 justify-center items-center"
  >
    <CarouselContent className="-mt-1 h-[300px]">
      {posts.map((post, i) => {
    return (
      <div key={i} className="text-center p-5 hover:text-zinc-900">
        <Suspense fallback="Loading...">
          <Link href={`/posts/${post.id}`} className="text-2xl">
            {post.title}
          </Link>
        </Suspense>
      </div>
    );
  })}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>

  ) 
}
