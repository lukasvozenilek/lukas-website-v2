import styled from 'styled-components';
import {SectionHeading} from '../SectionElements';

export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 200px 24px;
  justify-content: center;
  align-content: space-evenly;
`;

export const ContactHeading = styled(SectionHeading)`
  text-align: center;
`;

export const LinkIconWrapper = styled.div`
  justify-self: center;
  cursor: pointer;
  height: fit-content;
  width: fit-content;
`;
