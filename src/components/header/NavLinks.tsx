import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="hidden md:flex items-center space-x-5">
      <Link
        href="/"
        className="opacity-100 font-medium hover:opacity-100 transition-all ease-linear"
      >
        SomeWhere
      </Link>
      <Link
        href="/"
        className="opacity-80 font-medium hover:opacity-100 transition-all ease-linear"
      >
        SomeWhere
      </Link>
      <Link
        href="/"
        className="opacity-80 font-medium hover:opacity-100 transition-all ease-linear"
      >
        SomeWhere
      </Link>
      <Link
        href="/"
        className="opacity-80 font-medium hover:opacity-100 transition-all ease-linear"
      >
        SomeWhere
      </Link>
      
    </div>
  );
}
