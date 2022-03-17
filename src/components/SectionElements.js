import styled from 'styled-components';

export const SectionContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#c9c9c9' : '#191a28')};
`;

export const SectionHeading = styled.h1`
  font-size: 48px;
  color: ${({lightBg}) => (lightBg ? '#000000' : '#ffffff')};
`;

export const SectionP = styled.p`
  font-size: 18px;
  color: ${({lightBg}) => (lightBg ? '#464646' : '#ffffff')};
`;
