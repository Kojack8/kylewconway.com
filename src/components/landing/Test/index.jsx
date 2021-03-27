import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container} from 'components/common';
import dev from 'assets/illustrations/dev.svg';
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
          <h1>Skills</h1>
          <p>
          •Ruby  &nbsp;&nbsp;•Ruby on Rails &nbsp;&nbsp;•React &nbsp;&nbsp;•PostgreSQL &nbsp;&nbsp;
          •SQLite &nbsp;&nbsp;•MySQL &nbsp;&nbsp;•HTML &nbsp;&nbsp;•Heroku &nbsp;&nbsp;•CSS &nbsp;&nbsp;
          •JS &nbsp;&nbsp;•Git
          </p>
        </Details>
      </TestWrapper>
    </Wrapper>
  );
};
