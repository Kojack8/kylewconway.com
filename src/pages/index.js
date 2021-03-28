import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, Aboutme, Images } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
    <Projects />
    <Aboutme />
    <Images />
    <Contact />
  </Layout>
);
