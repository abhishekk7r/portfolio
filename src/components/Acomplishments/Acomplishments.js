import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 500, text: 'DSA Questions'},
  { number: 10, text: 'Projects', }
];

const Acomplishments = () => (
    <Section>
      <SectionTitle>Personal Acomplishments</SectionTitle>
      <Boxes>
        {data.map((card, index)=>(
          <Box key={index}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
);

export default Acomplishments;
