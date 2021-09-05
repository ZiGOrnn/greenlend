import React, { ReactElement } from "react";
import Section from "../section/Section";

interface Props {}

function Roadmap({}: Props): ReactElement {
  return (
    <Section
      title="Roadmap"
      subtitle="Next steps for the GreenLend ecosystem."
    ></Section>
  );
}

export default Roadmap;
