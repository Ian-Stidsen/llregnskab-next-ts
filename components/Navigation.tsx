import Link from "next/link";
import React, { useState } from "react";
import navbarStyles from "@/styles/navbar.module.css";
import Image from "next/image";
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useWindowSize } from "@/pages/api/useWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faLocationDot, faMailBulk, faMailForward, faMailReply, faMobilePhone, faPhone, faPhoneAlt, faPhoneFlip, faPhoneSlash, faPhoneSquare, faTimes } from "@fortawesome/free-solid-svg-icons";

export function Navigation() {
  const { locale } = useRouter()
  const { t: translate } = useTranslation('common')
  const currentPath = useRouter().asPath;
  const { width: windowWidth } = useWindowSize();

  const [navbarClass, setNavbarClass] = useState(navbarStyles.navbar);
  const [navbarLinkClass, setNavbarLinkClass] = useState(navbarStyles.navbarLinks);

  const handleDropdown = () => {
    const navLinkTimer = setTimeout(() => {
      setNavbarLinkClass(navbarStyles.showNavbarLinks);
    }, 200)
    const active = navbarClass === navbarStyles.navbar? true : false;
    console.log(active);
    if (active) {
      setNavbarClass(navbarStyles.dropNavbar);      
      navLinkTimer
    } else {
      setNavbarClass(navbarStyles.navbar);
      setNavbarLinkClass(navbarStyles.navbarLinks);
      clearTimeout(navLinkTimer);
    }
  };

  if (windowWidth! > 920 && navbarClass !== navbarStyles.navbar) {
    setNavbarClass(navbarStyles.navbar);
    setNavbarLinkClass(navbarStyles.navbarLinks);
  }

  const qaqortoqAddress = windowWidth! < 1000 ?
    'Sanatorievej B1004' : 'Sanatorievej B1004, Qaqortoq';

  const nuukAddress = windowWidth! < 1000 ?
  'Jens Kreutzmannip Aqq. 4' : 'Jens Kreutzmannip Aqq. 4, 1.sal, Nuuk';
  return (
    <>
      <div className={navbarStyles.topbar}>
        <Link href='/' locale={locale}>
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            height='60'
            width='225'
            />
        </Link>
        <ul className={navbarStyles.topbarLinks}>
          <li>
            <Link className={navbarStyles.topLink} href='tel:+299641603'>
              <FontAwesomeIcon
                className={navbarStyles.faIcons}
                icon={faPhone}
              />
              {translate('telephone')} (+299)641603
            </Link>
          </li>
          <li>
            <Link className={navbarStyles.topLink} href='mailto:laila@llregnskab.com'>
              <FontAwesomeIcon
                className={navbarStyles.faIcons}
                icon={faEnvelope}
              />
              Email: laila@llregnskab.com
            </Link>
          </li>
          <li className={navbarStyles.topAddresses}>
            <p>
              <FontAwesomeIcon
                className={navbarStyles.faIcons}
                icon={faLocationDot}
              />
              {translate('addresses')}
            </p>
            <div className={navbarStyles.topAddressLinks}>
              <Link className={navbarStyles.topLink} href='http://maps.google.com/?q=1004%20Sanatorievej' target='_blank' rel="noreferrer">
                {qaqortoqAddress}
              </Link>
              <Link className={navbarStyles.topLink} href='https://www.google.com/maps/place/Tumi+Consulting+ApS/@64.1719139,-51.7370675,19z/data=!3m1!4b1!4m5!3m4!1s0x4ea20fee844f428d:0xfcb56976bf831965!8m2!3d64.1719139!4d-51.7365203' target='_blank' rel="noreferrer">
                {nuukAddress}
              </Link>
            </div>
          </li>
        </ul>
        <button className={navbarStyles.dropdownbtn} onClick={handleDropdown}>
          <FontAwesomeIcon
            icon={navbarClass === navbarStyles.navbar ? faBars : faTimes}
            style={{width: "35px", height: "35px"}}
          />
        </button>
      </div>
      <nav className={navbarClass}>
          <ul className={navbarLinkClass}>
            <li>
              <Link className={navbarStyles.navLink} href='/' locale={locale}>{translate('home')}</Link>
            </li>
            <li>
              <Link className={navbarStyles.navLink} href='/about' locale={locale}>{translate('about')}</Link>
            </li>
            <li>
              <Link className={navbarStyles.navLink} href='/contact' locale={locale}>{translate('contact')}</Link>
            </li>
            <li className={navbarStyles.languages}>
              <Link className={navbarStyles.navLink} href={currentPath} locale='grl'>
                <img
                  src="https://flagcdn.com/20x15/gl.png"
                  srcSet="https://flagcdn.com/40x30/gl.png 2x,https://flagcdn.com/60x45/gl.png 3x"
                  width="30"
                  height="15"
                  alt="Greenland">
                </img>
              </Link>
              <Link className={navbarStyles.navLink} href={currentPath} locale='da'>
                <img
                  src="https://flagcdn.com/20x15/dk.png"
                  srcSet="https://flagcdn.com/40x30/dk.png 2x,https://flagcdn.com/60x45/dk.png 3x"
                  width="35"
                  height="15"
                  alt="DK">
                </img>
              </Link>
              <Link className={navbarStyles.navLink} href={currentPath} locale='en'>
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
      </nav>
    </>
  );
}