import Logo from "./Logo";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between md:px-14 py-4 fixed left-0 top-0 z-50">
      <Logo />
      <NavLinks />
      <MobileNav />
    </header>
  );
}
