import React from "react";

import styles from "./Splash.module.css";
import SocialLink from "../shared/SocialLink";

export const Splash: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="w-full mt-60">
        <div
          className={`w-full w-11/12 lg:w-2/4 mx-auto ${styles.imageContainer}`}
        >
          <img
            src="/images/SplashLogo.png"
            alt="logo"
            className="object-cover w-full h-full my-auto"
          />
        </div>
        <div className={`mx-auto w-fit`}>COMING SOON</div>
      </div>
      <div className={styles.footerContainer}>
        <div className={`flex w-10/12 lg:w-3/4 mx-auto ${styles.footer}`}>
          <div className={`${styles.iconContainer} text-center`}>
            <SocialLink href="https://www.instagram.com/ck.recs" />
            <SocialLink href="mailto:matt@ckrecs.com" />
          </div>
        </div>
      </div>
    </div>
  );
};
