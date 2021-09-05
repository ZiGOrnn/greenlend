import React, { ReactElement } from "react";
import styles from "./Nav.module.css";
import Image from "next/image";
import logo from "../../../public/img/Logo.webp";
import { Icon, IconButton } from "rsuite";
import Button from "../../widget/button/Button";
import { Context } from "../../lib/context";
import { getStorage, KEY_STORAGE, setStorage } from "../../utils/local-storage";
import { useRouter } from "next/router";

interface Props {}

function Nav({}: Props): ReactElement {
  const { state, dispatch } = React.useContext(Context);
  const [mode, setMode] = React.useState(false);
  const router = useRouter();

  const onMode = () => {
    const element = getStorage(KEY_STORAGE.mode);
    if (element) {
      dispatch({ type: "SET_INITIAL_LIGHT" });
    } else {
      dispatch({ type: "SET_INITIAL_DARK" });
    }
    setStorage(KEY_STORAGE.mode, JSON.stringify(!element));
    setMode(!element);
  };
  const handleClick = (href) => {
    router.push(href);
  };
  const openLink = (url) => window.open(url, "_blank")?.focus();
  React.useEffect(() => {
    setMode(getStorage(KEY_STORAGE.mode));
    return () => {};
  }, []);
  return (
    <div
      className={styles.container}
      style={{
        background: mode ? "rgba(0, 0, 0, 0.8)" : "none",
      }}
    >
      <div className={styles.layout}>
        <div
          className={styles.logo}
          style={{ color: state.theme.primary, cursor: "pointer" }}
          onClick={() => handleClick("/")}
        >
          <Image src={logo} alt="Picture of the author" />
          {/* GLend */}
        </div>
        <span className={styles.spacer}></span>
        <div className={styles.buttons}>
          {/* <Button
            text="About GreenLend"
            textColor={state.theme.dark}
            fontWeight
          /> */}
          <Button
            onClick={() => handleClick("/app")}
            text="App"
            textColor={state.theme.dark}
            fontWeight
          />
          <Button
            onClick={() =>
              openLink(
                "https://02cdc23e-2500-4d8b-93ac-e0dcea3924de.filesusr.com/ugd/fbb562_2a2c8e9a647e484483520d55d4977784.pdf"
              )
            }
            text="Litepaper"
            textColor={state.theme.dark}
            fontWeight
          />
          <Button
            onClick={() => openLink("https://greenlend.medium.com/")}
            text={
              <Icon
                icon="medium"
                style={{ fontSize: 18, color: state.theme.primary }}
              />
            }
          />
          <Button
            onClick={() => openLink("https://twitter.com/GLend_Protocol")}
            text={
              <Icon
                icon="twitter"
                style={{ fontSize: 18, color: state.theme.primary }}
              />
            }
          />
          <Button
            onClick={() => openLink("https://t.me/GreenLend_protocol")}
            text={
              <Icon
                icon="telegram"
                style={{ fontSize: 18, color: state.theme.primary }}
              />
            }
          />
          <Button
            onClick={() => openLink("mailto:info@greenlend.org")}
            text={
              <Icon
                icon="envelope"
                style={{ fontSize: 18, color: state.theme.primary }}
              />
            }
          />
          <Button
            onClick={onMode}
            text={
              <Icon
                icon={mode ? "moon-o" : "sun-o"}
                style={{ fontSize: 22, color: state.theme.primary }}
              />
            }
            fontSize={22}
            textColor={state.theme.dark}
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
