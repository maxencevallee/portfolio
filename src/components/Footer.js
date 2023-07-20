import styles from "../styles/Footer.module.css";
import ArrowIcon from "@/../public/images/arrow-up.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className={styles.bg_footer}>
        <footer id="contact" className={styles.footer}>
          <div className={styles.text}>
            <h2>Vous avez un projet en tête ?</h2>
            <a
              className={styles.secondary_btn}
              href="mailto:maxence.vallee@outlook.fr"
            >
              Contactez-moi
              <Image
                className={styles.icon}
                src={ArrowIcon}
                alt="Ouvrir le lien"
              />
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#accueil">Accueil</a>
              </li>
              <li>
                <a href="#à-propos">À propos</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projets">Projets</a>
              </li>
            </ul>
          </nav>
          <div className={styles.copyright}>
            <span>© 2023 Maxence Vallée</span>
          </div>
        </footer>
      </div>
    </>
  );
}
