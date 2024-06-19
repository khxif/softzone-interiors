import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="relative top-0 left-4 md:left-0 md:top-0">
      <Image src="/logo.png" alt="logo" width={160} height={100} />
    </Link>
  );
}
