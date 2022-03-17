import React from 'react';
import {AboutRow, AboutWrapper, Column1, Column2, Img} from './AboutElements';
import {SectionContainer, SectionHeading, SectionP} from '../SectionElements';

const AboutSection = ({lightBg}) => {
  return (
      <SectionContainer lightBg={lightBg}>
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <Img src={'/images/Lukas.JPG'} alt="Lukas"/>
            </Column1>
            <Column2>
              <SectionHeading lightBg={lightBg}>About</SectionHeading>
              <SectionP lightBg={lightBg}>
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
              </SectionP>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </SectionContainer>
  );
};

export default AboutSection;
