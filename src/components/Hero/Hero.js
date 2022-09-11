import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I Am <br />
        Abhishek Kumar
      </SectionTitle>
      <SectionText>
        I am a web developer and designer based in India. I am pursuing a
        Bachelor's degree in Technology and I am passionate about web
        development and problem solving.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "#tech")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
