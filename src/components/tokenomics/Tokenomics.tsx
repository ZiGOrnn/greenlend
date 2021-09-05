import React, { ReactElement } from "react";
import { Col, Grid, Row } from "rsuite";
import { TOKENOMICS, TOTAL_SUPPLY } from "../../data/tokenomics";
import { Context } from "../../lib/context";
import CardTotal from "../../widget/cardTotal/CardTotal";
import Card from "../../widget/card/Card";
import Section from "../section/Section";
import styles from "./Tokenomics.module.css";

interface Props {}

function Tokenomics({}: Props): ReactElement {
  const { state } = React.useContext(Context);

  return (
    <Section
      title="$GLend Tokenomics"
      subtitle="GLend is the governance and utility token of the GreenLend protocol."
    >
      <div className={styles.holders}>
        <Grid fluid>
          <Row gutter={24}>
            {TOKENOMICS.map((item, index) => (
              <Col key={index} xs={24} sm={24} md={8}>
                <Card title={item.title} />
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
      <div className={styles.total}>
        <h3>Total supply 100,000,000 GLend</h3>
      </div>
      <div className={styles.holders}>
        <Grid fluid>
          <Row gutter={24}>
            {TOTAL_SUPPLY.map((item, index) => (
              <Col key={index} xs={24} sm={24} md={24}>
                <CardTotal title={item.title} subtitle={item.subTitle} />
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    </Section>
  );
}

export default Tokenomics;
