import React, { ReactElement } from "react";
import { Context } from "../../lib/context";
import styles from "./Section.module.css";

interface Props {
  title?: string;
  subtitle?: string;
  children?: JSX.Element | JSX.Element[] | ReactElement | ReactElement[];
}

function Section({ title, subtitle, children }: Props): ReactElement {
  const { state } = React.useContext(Context);

  return (
    <div className={styles.section}>
      <h5 className={styles.title} style={{ color: state.theme.primary }}>
        {title}
      </h5>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      {children}
    </div>
  );
}

export default Section;
