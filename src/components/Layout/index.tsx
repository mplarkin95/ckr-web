import React from "react";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="h-full justify-center flex">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
