import React from "react";
import navbarStyles from "@/styles/navbar.module.css";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

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
      <footer style={{marginTop: '150px'}}>
        <Footer />
      </footer>
    </>
  );
}

export default PageLayout;