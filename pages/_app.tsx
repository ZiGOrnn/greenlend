import React from "react";
import { AppProps } from "next/app";
import "../public/styles/global.css";
import { reducer } from "../src/lib/reducers";
import { Context, initialState } from "../src/lib/context";
import "rsuite/dist/styles/rsuite-default.css";
import { getStorage, KEY_STORAGE } from "../src/utils/local-storage";

function App({ Component, pageProps }: AppProps) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  React.useEffect(() => {
    const element = getStorage(KEY_STORAGE.mode);
    if (element) {
      dispatch({ type: "SET_INITIAL_DARK" });
    } else {
      dispatch({ type: "SET_INITIAL_LIGHT" });
    }
    return () => {};
  }, []);
  return (
    <Context.Provider value={value}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default App;
