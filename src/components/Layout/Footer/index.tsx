import Link from "next/link";
import styles from "./footer.module.css";
import EmailField from "./EmailField";
const Footer = () => {
  return (
    <footer className="border-t">
      <div
        className={`${styles.container} lg:w-1/3 w-full px-2 lg:px-0 mx-auto`}
      >
        <Link href="https://www.instagram.com/ck.recs/">Instagram</Link>
        <EmailField />
      </div>
    </footer>
  );
};

export default Footer;
