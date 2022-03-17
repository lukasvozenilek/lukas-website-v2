import React from "react";
import { SectionContainer } from "../SectionElements";
import { ProjectsHeading, ProjectsWrapper } from "./ProjectsElements";
import Project from "../Project";

const ProjectSection = ({lightBg}) => {
  return (
    <SectionContainer lightBg={lightBg}>
      <ProjectsWrapper>
        <ProjectsHeading lightBg={lightBg}>Projects</ProjectsHeading>
        <Project />
        <Project />
        <Project />
        <Project />
      </ProjectsWrapper>
    </SectionContainer>
  );
};

export default ProjectSection;
