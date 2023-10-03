import styles from "@/styles/Hero.module.css";
import Image from "next/image";
import Bitmoji from "@/../public/images/bitmoji.svg";
import ArrowIcon from "@/../public/images/arrow-up.svg";

export default function Hero() {
  return (
    <>
      <div className={styles.bg_hero}>
        <section className={styles.hero}>
          <div className={styles.left_section}>
            <div className={styles.text}>
              <h1>Développeur Front-End React</h1>
              <p>
                Bienvenue sur mon portfolio, je m'appelle Maxence Vallée. Je
                suis développeur front-end, passionné par le monde du code.
              </p>
            </div>
            <div className={styles.container_btn}>
              <a className={styles.primary_btn} href="#projets">
                Découvrir mes projets
              </a>
              <a
                className={styles.secondary_btn}
                href="mailto:maxence.vallee@outlook.fr"
              >
                Prendre contact
                <Image
                  className={styles.icon}
                  src={ArrowIcon}
                  alt="Ouvrir le lien"
                />
              </a>
            </div>
          </div>
          <div className={styles.right_section}>
            <Image
              className={styles.img}
              src={Bitmoji}
              alt="Memoji de Maxence Vallée"
            />
          </div>
        </section>
      </div>
    </>
  );
}
