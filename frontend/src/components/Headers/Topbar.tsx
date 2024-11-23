import {
  SignedIn,
  SignedOut,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import SignInBtn from "../Auth/SignInBtn";
import { Button } from "../ui/button";
import { useAuthStore } from "@/stores/useAuthStore";
import { Link } from "react-router-dom";

function Topbar() {
  const { isAdmin } = useAuthStore();
  return (
    <nav className="flex items-center justify-between static top-0 right-0 bg-zinc-900/75 py-4 rounded-lg px-4">
      {/* logo */}
      <div>
        <Link to="/">
          <img src="./images/logo.png" alt="logo" className=" h-5 md:h-8" />
        </Link>
      </div>
      {/* login button */}
      <div className="flex items-center">
        {isAdmin && (
          <Button
            className="mr-2 text-sm md:text-base px-1
          ">
            <Link to="/admin">صفحه ادمین</Link>
          </Button>
        )}
        <div className="flex items-center gap-x-2">
          <div className="hidden md:block">
            <SignedIn>
              <SignOutButton>
                <Button className="" variant="destructive">
                  خروج
                </Button>
              </SignOutButton>
            </SignedIn>
          </div>

          <SignedOut>
            <SignInBtn />
          </SignedOut>
          <UserButton />
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
