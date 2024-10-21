import Link from "next/link";
import Image from "next/image";
import { Globe, PanelsTopLeft } from "lucide-react";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center">
          <Link
            href="https://autocog.com.br/"
            className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
          >
            <Globe className="w-6 h-6 mr-3" />

            <span className="font-bold">Autocog</span>

            <span className="sr-only">Autocog</span>
          </Link>
          <nav className="ml-auto flex items-center gap-2">
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-10 min-h-[calc(100vh-57px)] flex flex-col">
          <div className="flex flex-col items-center justify-center h-full my-auto">
            <h1 className="text-2xl font-bold mb-4">Autocog</h1>
            <form className="w-full max-w-sm">
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <Link href="/dashboard" >
                  <Button type="submit">Sign In</Button>
                </Link>
                <Link
                  href="#"
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                  Forgot Password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
