import React from "react";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.skChase}>
      <div className={styles.skChaseDot}></div>
      <div className={styles.skChaseDot}></div>
      <div className={styles.skChaseDot}></div>
      <div className={styles.skChaseDot}></div>
      <div className={styles.skChaseDot}></div>
      <div className={styles.skChaseDot}></div>
    </div>
  );
};

export default Spinner;
