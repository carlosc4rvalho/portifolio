import React from "react";
import styles from "./Section.module.css";

const Section: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.background1}></div>
      <div className={styles.background2}></div>
      <div className={styles.background3}></div>
    </section>
  );
};

export default Section;
