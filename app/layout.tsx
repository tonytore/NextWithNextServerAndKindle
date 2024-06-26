import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideNav } from "./_components/SideNav";
import { Header } from "./_components/Header";
import Footer from "./_components/Footer";
import { ThemeProvider } from "../lib/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dummy Data",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
      <body className={`${inter.className} min-h-screen dark:bg-zinc-950`}>
        <div className="md:w-64 fixed hidden md:block">
          <SideNav />
        </div>
        <div className="md:ml-64  flex flex-col bg-white dark:bg-zinc-700  justify-between min-h-screen">
          <Header />
          <div className="flex-1">{children}</div>
          <div className="">
            <Footer/>
          </div>
        </div>
      </body>
      </ThemeProvider>
    </html>
  );
}
