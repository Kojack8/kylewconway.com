import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container} from 'components/common';
import dev from 'assets/static/dog_001.jpg';
import photo3 from 'assets/static/photo_003.jpg'
import photo2 from 'assets/static/photo_002.jpg'
import photo4 from 'assets/static/photo_004.jpg'
import photo5 from 'assets/static/photo_005.jpg'
import photo6 from 'assets/static/photo_006.jpg'
import photo7 from 'assets/static/photo_007.jpg'
import photo8 from 'assets/static/photo_008.jpg'
import photo9 from 'assets/static/photo_009.jpg'
import photo10 from 'assets/static/photo_010.jpg'
import photo11 from 'assets/static/photo_011.jpg'
import photo12 from 'assets/static/photo_012.jpg'
import { Wrapper, ImagesWrapper, Details, Thumbnail } from './styles';

export const Images = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="image">
      <ImagesWrapper as={Container}>
        <Thumbnail>
          <img src={photo12} class = 'pic' alt='Presidential nominee Joe Biden speaks to the UFCW in Altoona, IA' />
          <img src={photo7} class = 'pic' alt='Photo of State Farm Arena ft. Trae Young.'/>
          <img src={photo8} class = 'pic' alt='Movie set at a church in Atlanta, GA'/>
          <img src={dev} alt="My Italian Greyhound, Bella" class = 'pic' />
          <img src={photo3} class = 'Beam shaping prism in a laser projector' />
          <img src={photo2} class = 'pic' alt = 'Sample LED wall setup ft. a roading fire' />
          <img src={photo5} class = 'pic' alt='Statue outside of McCormick Place'/>
          <img src={photo6} class = 'pic' alt='A snow covered hot tub in Breckenridge, CO'/>
          <img src={photo9} class = 'pic' alt='RISE lantern festival in the Mojave desert'/>
          <img src={photo10}  class = 'pic'alt='A crew photo from Real World: Las Vegas'/>
          <img src={photo11}  class = 'pic' alt='ActionBoyz podcast recording in Dallas, TX'/>
          <img src={photo4}  class = 'pic' alt='Control screen from a democratic candidates forum in Detroit, MI'/>
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
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
