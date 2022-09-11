import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {[
        {
          title: "Project1",
          description: "This is a long description about this project",
        },
        {
          title: "Project1",
          description: "This is a long description about this project",
        },
        {
          title: "Project1",
          description: "This is a long description about this project",
        },
        {
          title: "Project1",
          description: "This is a long description about this project",
        },
      ].map((project) => (
        <div>{project}</div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
