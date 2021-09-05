import React, { ReactElement } from "react";
import styles from "./AppGlend.module.css";

interface Props {}

function AppGlend({}: Props): ReactElement {
  return (
    <div className={styles.appGlend}>
      <div className={styles.content}>
        <h1>Coming soon</h1>
      </div>
    </div>
  );
}

export default AppGlend;
