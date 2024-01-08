import SearchForm from "@/components/SearchForm";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import AnimatedSvg from "@/components/animatedsvg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex min-h-screen w-full flex-col items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black overflow-hidden">
        <div className="relative z-20 flex flex-col  items-center gap-6 h-screen px-4 pt-[140px] sm:pt-[260px]">
          <h1 className="text-7xl md:text-9xl font-black text-center">
            Project
            <br />
            Tracker
          </h1>
          <p className="text-xl md:text-2xl font-medium">
            Create. Read. Update. Delete.
          </p>
          {/* <SearchForm /> */}
          <div className="flex gap-3">
            <LoginLink>
              <Button type="button" size="lg">
                Login
              </Button>
            </LoginLink>
            <RegisterLink>
              <Button type="button" size="lg" variant="secondary">
                Sign Up
              </Button>
            </RegisterLink>
          </div>
        </div>
        <div className="absolute bottom-0 z-10 h-[60vh] w-full overflow-hidden">
          <AnimatedSvg />
        </div>
      </div>
      <div className="h-screen bg-stone-800"></div>
    </main>
  );
}
