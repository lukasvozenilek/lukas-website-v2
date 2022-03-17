import styled from 'styled-components';

export const AboutContainer = styled.div`
  color: #fff;
  background: #6b6b6b;
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const AboutRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-areas: 'col1 col2';
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const AboutHeading = styled.h1`
  font-size: 48px;
  color: #000;
`;

export const AboutP = styled.p`
  font-size: 18px;
  color: #ffffff;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 0 0;
`;
