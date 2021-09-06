import React, { ReactElement } from "react";
import { Input } from "rsuite";
import { Context } from "../../lib/context";
import Button from "../../widget/button/Button";
import styles from "./Contact.module.css";

interface Props {}

function Contact({}: Props): ReactElement {
  const { state } = React.useContext(Context);

  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <Input
          style={{ backgroundColor: "inherit", border: "1px solid grey", color: state.mode ? "white" : "black" }}
          placeholder="Email"
        />
        <div className={styles.button}>
          <Button
            text="Our newsletter"
            color={state.theme.primary}
            textColor={state.theme.white}
            fontWeight
            width={130}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
