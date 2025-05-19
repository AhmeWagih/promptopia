"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  
  return (
    <div className="flex-between w-full mt-[-50px]">
      <Link href="/">
          <Image src="/assets/images/logo2.png" alt="Logo" width={200} height={50} />
        </Link>
      {/* Desktop Navigation */}
      <div className="hidden sm:flex">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-post" className="black_btn">
              Create Post
            </Link>
            <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="Profile Picture"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <Link
                  href="/profile"
                  className="dropdown_link"
                >
                  Profile
                </Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href="/create-post"
                  className="dropdown_link"
                >
                  Create Post
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <button
                  type="button"
                  onClick={() => {
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="Profile Picture"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <Link
                  href="/profile"
                  className="dropdown_link"
                >
                  Profile
                </Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href="/create-post"
                  className="dropdown_link"
                >
                  Create Post
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <button
                  type="button"
                  onClick={() => {
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
