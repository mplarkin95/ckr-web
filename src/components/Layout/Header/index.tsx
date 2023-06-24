import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";

const Header = () => {
  const [hasScrolled, setHasScrolled] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 200) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 w-full lg:px-10 flex ${
        hasScrolled ? styles.heightSmall : styles.heightLarge
      } border-b p-2 ${styles.headerBG}`}
    >
      <div className="flex flex-row h-full">
        <Link href="/" className="h-full">
          <Image
            src={"/images/CKRFULL.png"}
            alt="logo"
            width={100}
            height={100}
            className="object-cover w-full h-full my-auto"
          />
        </Link>
      </div>
      <div className="blox sm:hidden mr-0 ml-auto">sda</div>

      <div className="hidden sm:flex  flex-row justify-between w-1/4 justify-self-end items-center mr-0 ml-auto">
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
