import React from "react";
import { SectionContainer } from "../SectionElements";
import {
  ContactHeading,
  ContactWrapper,
  LinkIconWrapper,
} from "./ContactElements";
import { FaDiscord, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const ContactSection = ({lightBg}) => {
  return (
    <SectionContainer lightBg={lightBg}>
      <ContactWrapper>
        <ContactHeading lightBg={lightBg}>Links</ContactHeading>
        <LinkIconWrapper>
          <a href="https://www.linkedin.com/in/lukasvozenilek/" target="_blank">
            <FaLinkedin size={70} color={lightBg ? '#000' : '#ffffff'} />
          </a>
        </LinkIconWrapper>
        <LinkIconWrapper onClick={() => {}}>
          <a href="https://github.com/lukasvozenilek" target="_blank">
            <FaGithubSquare size={70} color={lightBg ? '#000' : '#ffffff'} />
          </a>
        </LinkIconWrapper>
        <LinkIconWrapper onClick={() => {}}>
          <a href="mailto:lvozenilek@gmail.com" target="_blank">
            <FiMail size={70} color={lightBg ? '#000' : '#ffffff'} />
          </a>
        </LinkIconWrapper>
        <LinkIconWrapper onClick={() => {}}>
          <a href="https://discord.com/users/RoboLuke#4854" target="_blank">
            <FaDiscord size={70} color={lightBg ? '#000' : '#ffffff'} />
          </a>
        </LinkIconWrapper>
      </ContactWrapper>
    </SectionContainer>
  );
};

export default ContactSection;
