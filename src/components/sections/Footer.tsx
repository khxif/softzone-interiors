import Link from "next/link";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="h-[75vh] md:h-screen bg-black w-full pt-12 md:pt-36 pb-4">
      <div className="max-w-6xl mx-auto px-4 md:px-0 flex flex-col justify-between h-full">
        <div className="space-y-10 ">
          <span className="flex items-center space-x-12 text-2xl md:text-4xl font-light">
            <h1>We</h1>
            <span className="content text-3xl md:text-5xl font-bold">
              <span
                className="highlight text-white md:before:border-[0.6rem] 
          md:after:border-[.6rem] before:border-white after:border-white"
              >
                activate
              </span>
            </span>
            <h1>brands.</h1>
          </span>

          <h1 className="text-lg md:text-xl md:max-w-lg">
            Have a conversation with us and see how we can activate your brand.
          </h1>
        </div>

        <div className="flex flex-col space-y-6">
          <span className="flex items-center space-x-10 text-white px-5">
            <Link href="#">
              <FaYoutube size="25" />
            </Link>
            <Link href="#">
              <FaFacebook size="25" />
            </Link>
            <Link href="#">
              <FaTwitter size="25" />
            </Link>
            <Link href="#">
              <FaGithub size="25" />
            </Link>
            <Link href="#">
              <FaFacebook size="25" />
            </Link>
            <Link href="#">
              <FaTwitter size="25" />
            </Link>
          </span>

          <div className="grid grid-cols-3 gap-2 md:w-1/2 ">
            <p className="text-sm opacity-80">
              <Link href="#">Privacy Policy</Link>
            </p>
            <p className="text-sm opacity-80">
              <Link href="#">Privacy Policy</Link>
            </p>
            <p className="text-sm opacity-80">
              <Link href="#">Privacy Policy</Link>
            </p>
            <p className="text-sm opacity-80">
              <Link href="#">Privacy Policy</Link>
            </p>
            <p className="text-sm opacity-80">
              <Link href="#">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
