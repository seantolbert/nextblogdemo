import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://i.imgur.com/ZCGDmH3.png"
            width={50}
            height={50}
            alt="Logo"
          />
        </Link>
        <h1 className="uppercase text-sm tracking-[8px]">Tolbert & Co</h1>
      </div>

      <div>
        <Link
          target="_blank"
          rel="noreferrer"
          className="text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center px-5 py-3"
          href="http://tolbert.me"
        >
          visit my website
        </Link>
      </div>
    </div>
  );
}
export default Header;
