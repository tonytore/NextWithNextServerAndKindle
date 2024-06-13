"use client";

import Image from "next/image";
import logo from "../../public/logoipsum-332.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import ThemeSwitcherBtn from "./ThemeSwitcherBtn";

const HeaderList = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Posts",
    href: "/posts",
  },
  {
    id: 3,
    title: "CreatePost",
    href: "/posts/createPosts",
  },
];

export const Header = () => {
  const path = usePathname();
  const {user}:any = useKindeBrowserClient()

  return (
    <div className="flex p-7 dark:bg-zinc-800 shadow-md justify-between items-center px-8">
      <div className="flex gap-6">
        <ThemeSwitcherBtn/>
        <div className=''>
         <Image
        src={user?.picture}
        width={35}
        height={35}
        alt='user'
        className='rounded-full  shadow-md'
        />
      </div>
   
    </div>
      <div className="flex gap-6 px-8 text-zinc-400">
        <Image
          src={logo}
          width={35}
          height={35}
          alt="user"
          className="rounded-full  shadow-md"
        />
        {HeaderList.map((list) => {
          return (
            <div
              className={`flex items-center gap-3 ${
                path === list.href && "text-zinc-950"
              }`}
              key={list.id}
            >
              <Link href={list.href}>{list.title}</Link>
            </div>
          );
        })}
        <LogoutLink>Logout</LogoutLink>
      </div>
    </div>
  );
};
