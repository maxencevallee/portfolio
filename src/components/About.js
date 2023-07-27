import styles from "@/styles/About.module.css";
import Image from "next/image";
import AboutImage from "@/../public/images/workdesk.jpg";
import DownloadIcon from "@/../public/images/download-icon.svg";

export default function About() {
  return (
    <>
      <section id="à-propos" className={styles.about}>
        <div className={styles.left_section}>
          <div className={styles.picture}>
            <Image src={AboutImage} alt="Photo du bureau" />
          </div>
        </div>
        <div className={styles.right_section}>
          <div className={styles.text}>
            <h2>À propos de moi</h2>
            <p>
              Passionné par le monde de l'informatique depuis mon plus jeune
              âge. J'ai commencé les jeux vidéos, mais, à l'adolescence, j'étais
              déjà créatif et intéressé par tous le domaine du multimédia.
            </p>
          </div>
          <a
            className={styles.primary_btn}
            href="https://www.maxencevallee.com/Curriculum-Vitæ.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger mon CV
            <Image
              className={styles.icon}
              src={DownloadIcon}
              alt="Téléchargement"
            />
          </a>
        </div>
      </section>
    </>
  );
}
