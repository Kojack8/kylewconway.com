import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container} from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="skills">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Kyle and I’m a software engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Skills</h1>
          <p>
          &nbsp;&nbsp;•Ruby  &nbsp;&nbsp;•Ruby on Rails &nbsp;&nbsp;•Node.js &nbsp;&nbsp;•React &nbsp;&nbsp;•PostgreSQL &nbsp;&nbsp;
          •SQLite &nbsp;&nbsp;•MySQL &nbsp;&nbsp;•HTML &nbsp;&nbsp;•Heroku &nbsp;&nbsp;•CSS &nbsp;&nbsp;
          •Javascript ES6 &nbsp;&nbsp;•Git
          </p>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
