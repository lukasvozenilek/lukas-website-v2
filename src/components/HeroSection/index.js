import React from 'react';
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
} from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg />
      <HeroContent>
        <HeroH1>Welcome To My Site!</HeroH1>
        <HeroP>Lorum ipsum dolar sit amet</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
