import React from "react";
import styles from "../../styles/loading.module.scss";

export function Loading({ height }) {
  return (
    <div className={styles.containerLoading} style={{ height: height }}>
      <div className={styles.loader}></div>
    </div>
  );
}
