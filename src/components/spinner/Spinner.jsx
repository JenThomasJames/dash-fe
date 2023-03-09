import React from "react";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div class={styles.skChase}>
      <div class={styles.skChaseDot}></div>
      <div class={styles.skChaseDot}></div>
      <div class={styles.skChaseDot}></div>
      <div class={styles.skChaseDot}></div>
      <div class={styles.skChaseDot}></div>
      <div class={styles.skChaseDot}></div>
    </div>
  );
};

export default Spinner;
