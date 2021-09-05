import React, { ReactElement } from "react";
import { Col, Grid, Row } from "rsuite";
import { FEATURES } from "../../data/features";
import { Context } from "../../lib/context";
import Card from "../../widget/card/Card";
import Section from "../section/Section";
import styles from "./Features.module.css";

interface Props {}

function Features({}: Props): ReactElement {
  const { state } = React.useContext(Context);

  return (
    <Section
      title="Core Features"
      subtitle="GreenLend protocol combines lending and saving features."
    >
      <div className={styles.card}>
        <Grid fluid>
          <Row gutter={24}>
            {FEATURES.map((item, index) => (
              <Col key={index} xs={24} sm={24} md={8}>
                <Card
                  icon={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                  footer={item.footer}
                />
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    </Section>
  );
}

export default Features;
