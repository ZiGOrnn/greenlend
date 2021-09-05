import React from "react";
import AppGlend from "../src/components/app/AppGlend";
import Contact from "../src/components/contact/Contact";
import Header from "../src/components/header/Header";
import HeadMeta from "../src/components/HeadMeta";
import Layout from "../src/components/layout/Layout";

export default function App(props) {
  React.useEffect(() => {
    console.log(props);
    return () => {};
  }, []);
  return (
    <>
      <HeadMeta />
      <Layout>
        <AppGlend />
      </Layout>
    </>
  );
}

export const getServerSideProps = ({ locale, locales }) => {
  return {
    props: {
      locale,
      locales,
    },
  };
};
