import { SignInButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <Button
        variant="ghost"
        className="text-sm cursor-pointer font-semibold hover:text-darkColor text-lightColor  hoverEffect"
      >
        Login
      </Button>
    </SignInButton>
  );
};

export default SignIn;
