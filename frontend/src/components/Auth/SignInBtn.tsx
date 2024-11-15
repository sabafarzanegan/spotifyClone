import { useSignIn } from "@clerk/clerk-react";
import { Button } from "../ui/button";

function SignInBtn() {
  const { signIn, isLoaded } = useSignIn();
  if (!isLoaded) {
    return null;
  }
  const signInwithGoogle = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/authcallback",
    });
  };
  return (
    <Button onClick={signInwithGoogle} variant="outline">
      ورود
    </Button>
  );
}

export default SignInBtn;
