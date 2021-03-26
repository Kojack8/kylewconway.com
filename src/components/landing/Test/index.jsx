import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, TestWrapper, Details, Thumbnail } from './styles';

export const Test = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="test">
      <TestWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Kyle and I’m a fullstack engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            DIS DAT TEST PAGE BOI
          </p>
          <Button as={AnchorLink} href="#contact">
            E-mail me
          </Button>
        </Details>
      </TestWrapper>
    </Wrapper>
  );
};
