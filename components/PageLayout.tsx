import React from "react";
import navbarStyles from "@/styles/navbar.module.css";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <header className={navbarStyles.container}>
        <Navigation />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default PageLayout;