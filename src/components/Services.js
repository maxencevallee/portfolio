import styles from "@/styles/Services.module.css";
import Image from "next/image";
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
                Découvrez mes compétences techniques liées à l'informatique afin
                de concevoir et de mettre en oeuvre des solutions innovantes.
              </p>
            </div>
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
                  Mon approche créative alliée à ma maîtrise des outils de
                  design tels que Figma et Photoshop, me permettent de créer des
                  interfaces uniques avec une approche axée sur l'utilisateur.
                </p>
              </div>
              <div className={styles.item}>
                <div className={styles.bg_icon}>
                  <Image src={Object} alt="Icône modélisation" />
                </div>
                <h3>Modélisation 3D</h3>
                <p>
                  Je maîtrise les logiciels de modélisation tels que Blender et
                  Fusion 360, afin de créer des pièces complexes, prototypes et
                  objets artistiques.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
