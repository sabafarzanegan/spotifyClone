import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import SignInBtn from "../Auth/SignInBtn";
import { Button } from "../ui/button";

function Topbar() {
  return (
    <nav className="flex items-center justify-between static top-0 right-0 bg-zinc-900/75 py-4">
      {/* logo */}
      <div>
        <img src="./images/logo.png" alt="logo" className=" h-10" />
      </div>
      {/* login button */}
      <div>
        <SignedIn>
          <SignOutButton>
            <Button className="" variant="destructive">
              خروج
            </Button>
          </SignOutButton>
        </SignedIn>
        <SignedOut>
          <SignInBtn />
        </SignedOut>
      </div>
    </nav>
  );
}

export default Topbar;
