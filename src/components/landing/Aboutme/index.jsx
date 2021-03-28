import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/city.svg';
import { Wrapper, AboutmeWrapper, Details, Thumbnail } from './styles';

export const Aboutme = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <AboutmeWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Kyle and I’m a software engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>About me</h1>
          <p>
            I was born in and attended college in Chicago, IL but I've worked all over the country (and sometimes out of it) as a television camera operator and video engineer.
            It was a great career filled with exciting travel opportunities but after a couple years I discovered software development and dove headfirst into a brand new adventure. 
            It's one of the best decisions I've ever made.
          </p>
          <Button as={AnchorLink} href="#contact">
            E-mail me
          </Button>
        </Details>
      </AboutmeWrapper>
    </Wrapper>
  );
};
