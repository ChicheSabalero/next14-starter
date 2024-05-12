import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Chiche Development Agency</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            impedit veniam reprehenderit, esse ad optio, repellendus sequi
            exercitationem magnam ipsam perspiciatis minus! Vitae autem, eveniet
            quibusdam sequi incidunt nesciunt fuga!
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}>Learn More</button>
            <button className={styles.button}>Contact</button>
          </div>

          <div className={styles.brands}>
            <Image className={styles.brand} src="/brands.png" alt="" fill />
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.heroImg} src="/hero.gif" alt="" fill />
        </div>
      </div>
    </>
  );
};

export default Home;
