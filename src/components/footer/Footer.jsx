import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>ChicheDev</div>
        <div className={styles.text}>
          Chiche DevLabs © 2024 All Rights Deserveds
        </div>
      </div>
    </>
  );
};

export default Footer;
