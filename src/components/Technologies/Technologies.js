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
      Frontend Technologies: React.js, AngularJS, JavaScript, Bootstrap, HTML, CSS
      Backend Technologies: Java, Spring Boot, SQL, PLSQL, REST API, Microservices, Object-Oriented Programming (OOP)
      Development Tools: Git, GitHub, VSCode, Eclipse, Postman
      Core Competencies: Data Structures, Algorithms, OOP with Java
    </SectionText>
    <List>
      <ListItem>
        <SiReact size="3rem" />
        <br />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience With <br />
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
            Solved 500+ Questions <br />
            on LeetCode, GFG, C++
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiFigma size="3rem" />
        <br />
        <ListContainer>
          <ListTitle>Backend Technologies</ListTitle>
          <ListParagraph>
            Experience With <br />
            tools like Java, Spring Boot, SQL, PLSQL, REST API, Microservices
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
