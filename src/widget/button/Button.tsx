import React, { ReactElement } from "react";
import styles from "./Button.module.css";

interface Props {
  text?: string | ReactElement;
  size?: "small" | "default" | "large";
  fontSize?: string | number;
  expand?: "block" | "full";
  textColor?: string;
  color?: string;
  onClick?: () => void;
  fontWeight?: boolean;
  width?: string | number;
}

function Button({
  text,
  size,
  color,
  textColor,
  fontWeight,
  onClick,
  fontSize,
  width,
}: Props): ReactElement {
  return (
    <button
      onClick={onClick}
      className={styles.buttonNative}
      style={{
        backgroundColor: color || "initial",
        color: textColor,
        fontWeight: fontWeight ? "bold" : "inherit",
        fontSize,
        width,
      }}
    >
      {text}
    </button>
  );
}

export default Button;
