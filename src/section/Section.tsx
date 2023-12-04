import React from "react";
import styles from "./Section.module.css";
import img from "./prototype.png";

const Section: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.background}>
        <div>
        <img src={img} alt=""/>
        </div>
      </div>
    </section>
  );
};

export default Section;
