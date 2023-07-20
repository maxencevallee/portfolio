import styles from "@/styles/Services.module.css";
import Image from "next/image";
import DownloadIcon from "@/../public/images/download-icon.svg";
import Cursor from "@/../public/images/cursor-fill.svg";
import Brush from "@/../public/images/paint_brush-fill.svg";
import Object from "@/../public/images/object_3d-fill.svg";

export default function Services() {
  return (
    <>
      <div className={styles.bg_services}>
        <section id="services" className={styles.services}>
          <div className={styles.left_section}>
            <div className={styles.text}>
              <h2>Ce que je fais</h2>
              <p>
                Veritatis, eos earum accusamus sint, illo eum laborum explicabo
                quod minus rem? Ad praesentium excepturi earum atque reiciendis
                explicabo.
              </p>
            </div>
            <a
              className={styles.primary_btn}
              href="http://192.168.144.10:3000/documentx.pdf"
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
          <div className={styles.right_section}>
            <div className={styles.container}>
              <div className={styles.item}>
                <div className={styles.bg_icon}>
                  <Image src={Cursor} alt="Icône développement" />
                </div>
                <h3>Développement</h3>
                <p>
                  Je possède une solide compréhension des langages tels que
                  HTML, CSS et JavaScript. Je construits des applications web
                  responsive avec React et NextJS.
                </p>
              </div>
              <div className={styles.item}>
                <div className={styles.bg_icon}>
                  <Image src={Brush} alt="Icône web design" />
                </div>
                <h3>Web Design</h3>
                <p>
                  Veniam sint eius adipisci officia cumque quas voluptatem
                  voluptate rerum minima cupiditate ut perferendis provident
                  debitis, quis ullam ea illo eos accusantium quaerat.
                </p>
              </div>
              <div className={styles.item}>
                <div className={styles.bg_icon}>
                  <Image src={Object} alt="Icône modélisation 3D" />
                </div>
                <h3>Modélisation 3D</h3>
                <p>
                  Veniam quasi incidunt illum in deleniti? Laudantium, soluta,
                  non officia iusto illo repellendus totam. Impedit rem delectus
                  eligendi odit, sint libero voluptates recusandae in iure.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
