import React from "react";

// components
import Navbar from "./../../components/layout/navbars/_navbarLayout";
import Footer from "./../../components/layout/footers/_footerLayout";

// styles

import layoutStyles from "./../../styles/components/layout/pageLayout.module.scss";

// global fonts
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

const PageLayout = ({ children }) => {
  return (
    <div id={layoutStyles.page} className={inter.className}>
      {/* <Navbar /> */}
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
