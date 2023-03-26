import Link from "next/link";
import React from "react";
import { Navbar } from "react-bootstrap";
import navbarStyles from "@/styles/navbar.module.css";
import Image from "next/image";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <header className={navbarStyles.container}>
        <div className={navbarStyles.topbar}>
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            height='60'
            width='225'
          />
          <ul className={navbarStyles.topbarLinks}>
            <li>
              <Link className={navbarStyles.topLink} href='tel:+299641603'>Telephone: (+299)641603</Link>
            </li>
            <li>
              <Link className={navbarStyles.topLink} href='mailto:laila@llregnskab.com'>Email: laila@llregnskab.com</Link>
            </li>
            <li className={navbarStyles.topAddresses}>
              <p>Addresses:</p>
              <div className={navbarStyles.topAddressLinks}>
                <Link className={navbarStyles.topLink} href='http://maps.google.com/?q=1004%20Sanatorievej' target='_blank' rel="noreferrer">
                  Sanatorievej B1004
                </Link>
                <Link className={navbarStyles.topLink} href='https://www.google.com/maps/place/Tumi+Consulting+ApS/@64.1719139,-51.7370675,19z/data=!3m1!4b1!4m5!3m4!1s0x4ea20fee844f428d:0xfcb56976bf831965!8m2!3d64.1719139!4d-51.7365203' target='_blank' rel="noreferrer">
                  Jens Kreutzmannip Aqq. 4
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <Navbar className={navbarStyles.navbar}>
            <ul className={navbarStyles.navbarLinks}>
              <li>
                <Link className={navbarStyles.navLink} href='/'>Home</Link>
              </li>
              <li>
                <Link className={navbarStyles.navLink} href='/about'>About</Link>
              </li>
              <li>
                <Link className={navbarStyles.navLink} href='/contact'>Contact</Link>
              </li>
              <li className={navbarStyles.languages}>
                <Link className={navbarStyles.navLink} href='/'>
                  <img
                    src="https://flagcdn.com/20x15/gl.png"
                    srcSet="https://flagcdn.com/40x30/gl.png 2x,https://flagcdn.com/60x45/gl.png 3x"
                    width="30"
                    height="15"
                    alt="Greenland">
                  </img>
                </Link>
                <Link className={navbarStyles.navLink} href='/'>
                  <img
                    src="https://flagcdn.com/20x15/dk.png"
                    srcSet="https://flagcdn.com/40x30/dk.png 2x,https://flagcdn.com/60x45/dk.png 3x"
                    width="35"
                    height="15"
                    alt="DK">
                  </img>
                </Link>
                <Link className={navbarStyles.navLink} href='/'>
                  <img
                    src="https://flagcdn.com/20x15/us.png"
                    srcSet="https://flagcdn.com/40x30/us.png 2x,https://flagcdn.com/60x45/us.png 3x"
                    width="30"
                    height="15"
                    alt="United States">
                  </img>
                </Link>
              </li>
            </ul>
        </Navbar>
      </header>
      <main>
        {children}
      </main>
    </>
  );
}

export default PageLayout;