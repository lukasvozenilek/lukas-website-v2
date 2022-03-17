import React from 'react';
import {
  AboutContainer,
  AboutHeading,
  AboutP,
  AboutRow,
  AboutWrapper,
  Column1,
  Column2,
  Img,
} from './AboutElements';

const AboutSection = () => {
  return (
      <AboutContainer>
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <Img src={'/images/Lukas.JPG'} alt="Lukas"/>
            </Column1>
            <Column2>
              <AboutHeading>About</AboutHeading>
              <AboutP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                dignissim purus suscipit lectus dictum dictum. Morbi porta
                consequat risus, id auctor libero lacinia quis. Nullam dictum
                est
                bibendum metus semper rhoncus. Nunc dignissim sapien in ipsum
                scelerisque lacinia. Mauris congue, purus a cursus scelerisque,
                odio mauris feugiat erat, quis dapibus massa metus id ex.
                Vestibulum pretium eleifend diam. Praesent in ullamcorper diam.
                Fusce non laoreet neque, eget placerat nunc. Ut sed interdum
                leo.
              </AboutP>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
  );
};

export default AboutSection;
