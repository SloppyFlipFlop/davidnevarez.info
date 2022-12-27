import React from "react";

// components
import Navbar from "./../../components/layout/navbars/_navbarLayout";
import Footer from "./../../components/layout/footers/_footerLayout";

// styles
import layoutStyles from "./../../styles/components/layout/_pagelayout.module.scss";

// global fonts
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

const PageLayout = ({ children }) => {
  return (
    <div id={layoutStyles.page_container} className={inter.className}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
