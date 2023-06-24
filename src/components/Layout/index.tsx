import React, { useEffect } from "react";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="container mx-auto min-h-1/2 mt-20">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
