import React, { useState } from "react";
import styles from "@/styles/Header.module.css";
import Image from "next/image";
import Logo from "@/../public/images/logo.svg";
import CloseMenu from "@/../public/images/close-menu.svg";
import OpenMenu from "@/../public/images/menu.svg";

export default function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className={styles.bg_header}>
        <header id="accueil" className={styles.header}>
          <a href="/">
            <Image src={Logo} alt="Logo de Maxence Vallée" />
          </a>
          <nav>
            <div className={click ? `${styles.bg_menu}` : ""}></div>
            <ul className={click ? `${styles.active}` : ""}>
              <button onClick={handleClick}>
                <Image src={CloseMenu} alt="Fermer le menu" />
              </button>
              <li>
                <a onClick={handleClick} href="#à-propos">
                  À propos
                </a>
              </li>
              <li>
                <a onClick={handleClick} href="#services">
                  Services
                </a>
              </li>
              <li>
                <a onClick={handleClick} href="#projets">
                  Projets
                </a>
              </li>
              <li>
                <a onClick={handleClick} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className={styles.mobile}>
              <button onClick={handleClick}>
                <Image src={OpenMenu} alt="Ouvrir le menu" />
              </button>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
