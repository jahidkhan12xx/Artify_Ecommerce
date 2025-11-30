import { currentUser } from "@clerk/nextjs/server";
import SignIn from "./auth_components/SignIn";
import Container from "./Container";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import CartIcon from "./logo_components/CartIcon";
import FavouriteButton from "./logo_components/FavouriteButton";
import SearchBar from "./logo_components/SearchBar";
import MobileMenu from "./mobile/MobileMenu";
import { ClerkLoaded, SignedOut, SignInButton } from "@clerk/nextjs";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Header = async () => {
  const user = await currentUser();
  return (
    <header className="bg-white/70 py-5 sticky top-0 z-50 backdrop-blur-md">
      <Container className="flex justify-between items-center text-lightColor">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 md:gap-0 justify-start">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavouriteButton />
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant={"outline"}
                  className="font-bold bg-transparent hover:text-white hover:bg-shop_light_green hoverEffect"
                >
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
