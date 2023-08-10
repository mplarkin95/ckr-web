import React, { useEffect } from "react";

import Footer from "./Footer";
import Header from "./Header";

import styles from "./Layout.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`flex flex-col w-full ${styles.container}`}>
      <Header />
      <div className="container mx-auto mt-20">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
