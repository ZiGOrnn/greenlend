import React, { ReactElement } from "react";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import styles from "./Layout.module.css";

interface Props {
  children?: JSX.Element | JSX.Element[] | ReactElement | ReactElement[];
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
