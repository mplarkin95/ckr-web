import React from "react";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
