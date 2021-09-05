import React, { ReactElement } from "react";
import Head from "next/head";

interface Props {}

function HeadMeta({}: Props): ReactElement {
  return (
    <Head>
      <title>Eco Friendly DeFi Protocol | GreenLend</title>
      <link rel="icon" href="/img/Logo.webp" />
    </Head>
  );
}

export default HeadMeta;
