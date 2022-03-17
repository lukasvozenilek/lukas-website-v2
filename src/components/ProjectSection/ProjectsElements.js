import styled from 'styled-components';
import {SectionHeading} from '../SectionElements';

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  z-index: 1;
  min-height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 24px 24px;
`;

export const ProjectsHeading = styled(SectionHeading)`
  text-align: center;
  margin-bottom: 24px;
`;
