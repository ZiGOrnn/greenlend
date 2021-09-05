import React, { ReactElement } from "react";
import { Context } from "../../lib/context";
import styles from "./Build.module.css";

interface Props {
  team?: boolean;
}

function Build({ team }: Props): ReactElement {
  const { state } = React.useContext(Context);
  const openLink = (url) => window.open(url, "_blank")?.focus();

  return (
    <div className={styles.build}>
      <div
        onClick={() =>
          openLink(
            "https://explorer.energyweb.org/tokens/0x16970959A77821D1F1b4d099F113186AB9F3bDdE/token-transfers"
          )
        }
      >
        {state.mode ? (
          <img src="/img/logo-knockout.png" alt="" height="45" />
        ) : (
          <img src="/img/EVA4GPqUwAAcqUJ.png" alt="" height="45" />
        )}
      </div>
      <div
        onClick={() =>
          openLink(
            "https://bscscan.com/token/0xf0effed6865b0d871e2301af24762620d9f9744c"
          )
        }
      >
        {state.mode ? (
          <img src="/img/new-binance-chain-logo-1-1.png" alt="" height="45" />
        ) : (
          <img
            src="/img/binance-smart-chain-logo-802A74A1DB-seeklogo.com.png"
            alt=""
            height="45"
          />
        )}
      </div>
      {team && (
        <div
          onClick={() =>
            openLink(
              "https://team.finance/view-coin/0xf0eFFed6865b0D871E2301af24762620D9F9744c?name=GreenLend&symbol=GLend"
            )
          }
        >
          {state.mode ? (
            <img src="/img/team-white.png" alt="" height="45" />
          ) : (
            <img src="/img/team.png" alt="" height="45" />
          )}
        </div>
      )}
    </div>
  );
}

export default Build;
