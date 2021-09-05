import React, { ReactElement } from "react";
import styles from "./Card.module.css";
import { Context } from "../../lib/context";

interface Props {
  title?: string;
  subtitle?: string;
  footer?: string;
  icon?: string | ReactElement;
}

function Card({ icon, title, subtitle, footer }: Props): ReactElement {
  const { state } = React.useContext(Context);

  return (
    <div className={styles.card}>
      {typeof icon === "string" ? (
        <img src={icon} alt="Picture of the author" />
      ) : (
        icon
      )}
      <h4 style={{ color: state.theme.primary }}>{title}</h4>
      <p>{subtitle}</p>
      <h6>{footer}</h6>
    </div>
  );
}

export default Card;
