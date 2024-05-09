import { Link } from "react-router-dom";
import NavMenu from "./NavLinks";
import CheckWindowSize from "../../contexts/WindowSize";
import ToggleMenu from "./ToggleMenu";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import './styles.css'

function Header() {
  const { isMenuOpen, toggleMenu } = CheckWindowSize();
  return (
    <header className="bg-white fixed top-0 left-0 z-50 flex items-center justify-between w-full h-[8dvh] md:h-auto py-2 pl-4 pr-1 md:px-6">
      <Link
        to="/"
        className="text-3xl font-bold flex-1 tracking-wide text-transparent bg-gradient-to-r from-purple-700 via-pink-400 to-yellow-500 bg-clip-text"
      >
        MindHarbour
      </Link>
      <NavMenu isMenuOpen={isMenuOpen} />
      <div className="flex items-center gap-2 justify-end flex-1 font-semibold text-xl">
        <div className=" rounded-full px-4 py-2 text-lg">
          <SignedIn>
            <UserButton afterSignOutUrl='/' showName />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <ToggleMenu toggleMenu={toggleMenu} />
        </div>
      </div>
    </header>
  );
}

export default Header;
