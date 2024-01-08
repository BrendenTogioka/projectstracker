"use client";

import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();
  const pathname = usePathname();
  {
    console.log(user);
  }

  return (
    <div className="flex flex-col">
      {isLoading && !(pathname === "/") && (
        <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-white/50 mx-auto my-2"></div>
      )}
      {user?.picture && (
        <Image
          src={user?.picture}
          alt="Profile pic"
          width={50}
          height={50}
          className="rounded-full mx-quto my-2"
        />
      )}
      {user && !user.picture && (
        <div className="rounded-full h-7 w-7 border-b-2 bg-zinc-800 text-xs flex justify-center items-center mx-auto my-2">
          {user?.given_name?.[0]}
        </div>
      )}
      {user?.email && (
        <p className="text-center text-xs mb-3">Logged in as {user?.email}</p>
      )}
      {isAuthenticated && (
        <LogoutLink className="py-3 px-5 text-center hover:bg-zinc-800 rounded-md transition inline-block">
          Log out
        </LogoutLink>
      )}
    </div>
  );
}
