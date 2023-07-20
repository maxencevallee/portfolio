import styles from "@/styles/Works.module.css";
import Image from "next/image";
import { projects } from "../pages/api/projects";
import ArrowIcon from "@/../public/images/arrow-up.svg";

export default function Works() {
  return (
    <>
      <section id="projets" className={styles.projects}>
        <h2>Mes projets récents</h2>
        <div className={styles.container}>
          {projects.map((project) => (
            <div className={styles.item} key={project.id}>
              <Image
                className={styles.image}
                src={project.image}
                width="384"
                height="384"
                alt={project.title}
              />
              <div className={styles.text}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              {/* <a
                className={styles.link}
                href={project.visit}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le projet
                <Image className={styles.icon} src={ArrowIcon} />
              </a> */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
