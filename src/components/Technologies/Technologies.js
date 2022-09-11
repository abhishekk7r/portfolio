import React from 'react';
import { SiLeetcode, SiFigma, SiReact } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of Technologies in the Web-Development and I do
      problem solving on LeetCode, GFG and CodeStudio Using C++.
    </SectionText>
    <List>
      <ListItem>
        <SiReact size="3rem" />
        <br />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experince With <br />
            React.Js, JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiLeetcode size="3rem" />
        <br />
        <ListContainer>
          <ListTitle>Problem-Solving</ListTitle>
          <ListParagraph>
            Solved 50+ Questions <br />
            on LeetCode, GFG, C++
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiFigma size="3rem" />
        <br />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experince With <br />
            tools like Figma, Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
