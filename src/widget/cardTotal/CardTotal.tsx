import React, { ReactElement } from "react";
import { Context } from "../../lib/context";
import styles from "./CardTotal.module.css";

interface Props {
  title?: string;
  subtitle?: string;
}

function CardTotal({ title, subtitle }: Props): ReactElement {
  const { state } = React.useContext(Context);

  return (
    <div className={styles.cardTotal}>
      <h4 style={{ color: state.theme.primary }}>{title}</h4>
      <h6>{subtitle}</h6>
    </div>
  );
}

export default CardTotal;
