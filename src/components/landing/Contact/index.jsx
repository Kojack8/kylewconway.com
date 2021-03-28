import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/emailme.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h1>E-mail me directly using this form!</h1>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m Kyle and I’m a software engineer!" />
    </Thumbnail>
  </Wrapper>
);
