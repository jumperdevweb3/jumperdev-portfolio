import Image from "next/image";
import styles from "./Projects.module.scss";
export const Projects = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.overlay}></div>
        <div className={styles["text-container"]}>
          <div className={styles["text-wrapper"]}>
            <h2 className={styles.title}>Crypto Tracker App</h2>
            <h3 className={styles["sub-title"]}>Tech Stack</h3>
            <p className={styles.stack}>
              React - Next.js - Redux - css modules
            </p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              vitae id amet voluptas, expedita natus, rerum optio iure laborum
              doloremque iste sapiente consectetur dicta nihil, quasi vero?
              Dolores, necessitatibus aliquam.
            </p>
          </div>
        </div>
        <div className={styles["images-wrapper"]}>
          <Image
            src={"/test2.png"}
            width={500}
            height={500}
            alt="crypto project"
            className={styles.image}
          />
          <Image
            src={"/test1.png"}
            width={500}
            height={500}
            alt="crypto project"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};
