import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 w-full flex h-15 border-b p-1 ">
      <div className="flex flex-row h-full">
        <Link href="/" className="h-full">
          <Image
            src={"/images/CKRFULL.png"}
            alt="logo"
            width={100}
            height={100}
            className="object-cover w-full my-auto"
          />
        </Link>
      </div>
      <div className="flex flex-row justify-between w-1/6 justify-self-end items-center mr-0 ml-auto">
        <Link className="text-lg" href="/artists">
          Artists
        </Link>
        <Link className="text-lg" href="/releases">
          Releases
        </Link>
        <Link className="text-lg" href="/about">
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
