import Logo from "./Logo";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between py-4 md:px-14">
      <Logo />
      <NavLinks />
      <MobileNav />
    </header>
  );
}
