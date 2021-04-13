import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container} from 'components/common';
import dev from 'assets/static/dog_001.webp';
import photo3 from 'assets/static/photo_003.webp'
import photo2 from 'assets/static/photo_002.webp'
import photo7 from 'assets/static/photo_007.webp'
import photo10 from 'assets/static/photo_010.webp'
import photo12 from 'assets/static/photo_012.webp'
import { Wrapper, ImagesWrapper, Details, Thumbnail } from './styles';

export const Images = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="image">
      <ImagesWrapper as={Container}>
        <Thumbnail>
          <img src={photo12} class = 'pic' alt='Presidential nominee Joe Biden speaks to the UFCW in Altoona, IA' />
          <img src={photo7} class = 'pic' alt='Photo of State Farm Arena ft. Trae Young.'/>
          <img src={photo10}  class = 'pic'alt='A crew photo from The Real World in Las Vegas'/>
          <img src={dev} alt="My Italian Greyhound, Bella" class = 'pic' />
          <img src={photo3} class = 'Beam shaping prism in a laser projector' />
          <img src={photo2} class = 'pic' alt = 'Sample LED wall setup ft. a roading fire' />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Interests</h1>
          <p>
            I listen to a lot of comedy podcasts, especially when I'm doing chores or driving. My favorites
            include "The Flagrant Ones," "Action Boyz," "Threedom" and "With Special Guest Lauren Lapkus." When I'm not working I can usually
            be found walking my dog, jogging around the city, or playing video games online with my friends. It's a dream of mine to
            run the Chicago marathon, but so far have been unlucky with the lotto drawing. There's always next year!
          </p>
          <p>"Very little is needed to make a happy life; it is all within yourself, in your way of thinking." -Marcus Aurelius</p>
        </Details>
      </ImagesWrapper>
    </Wrapper>
  );
};
