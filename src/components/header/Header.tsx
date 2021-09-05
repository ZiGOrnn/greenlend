import React, { ReactElement } from "react";
import { Context } from "../../lib/context";
import Button from "../../widget/button/Button";
import styles from "./Header.module.css";

interface Props {}

function Header({}: Props): ReactElement {
  const { state } = React.useContext(Context);
  const openLink = (url) => window.open(url, "_blank")?.focus();

  return (
    <div className={styles.header}>
      <img
        className={styles.bg}
        src="/img/PngItem_4368587.png"
        alt=""
        style={{ opacity: state.mode ? "initial" : 0.5 }}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>GreenLend Ecosystem</h1>
        <h3 className={styles.subtitle} style={{ color: state.theme.dark }}>
          GreenLend is an eco-friendly Lending and Savings protocol built on the
          Energy Web and BSC networks.
        </h3>
        <div className={styles.buy}>
          <Button
            onClick={() =>
              openLink(
                "https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0xf0eFFed6865b0D871E2301af24762620D9F9744c"
              )
            }
            text="Buy $GLend"
            color={state.theme.primary}
            textColor={state.theme.white}
            fontWeight
            width={150}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
