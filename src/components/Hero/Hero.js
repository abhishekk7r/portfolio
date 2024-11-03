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
        I am a dedicated Software Engineer with over 1.5 years of experience in full-stack development,
        specializing in building efficient, scalable, and user-centric applications using modern technologies
        such as AngularJS, ReactJS, and Spring Boot.
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
