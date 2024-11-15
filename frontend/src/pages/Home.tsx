import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Topbar from "../components/Headers/Topbar";
function Home() {
  return (
    <div>
      <Topbar />
      {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
    </div>
  );
}

export default Home;
