import React from "react";
import Layout from "../src/components/layout/Layout";
import Header from "../src/components/header/Header";
import HeadMeta from "../src/components/HeadMeta";
import Features from "../src/components/features/Features";
import Tokenomics from "../src/components/tokenomics/Tokenomics";
import Build from "../src/components/build/Build";
import Contact from "../src/components/contact/Contact";
import Roadmap from "../src/components/roadmap/Roadmap";

export default function Home(props) {
  React.useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      <HeadMeta />
      <Layout>
        <Header />
        <Build />
        <Features />
        <Tokenomics />
        <Build team />
        <Roadmap />
        <Contact />
      </Layout>
      <style jsx>{``}</style>
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
