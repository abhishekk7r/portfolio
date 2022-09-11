import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus
        arcu et metus finibus, sed finibus sem ornare. Curabitur nec.
      </SectionText>
      <Button onCLick={() => {window.location = 'https://google.com'}}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;