import React from 'react';
import { Helmet } from "react-helmet";
import SiteWrapper from '../components/siteWrapper';
import Team from '../components/team';
import Header from '../components/header';
import Navigation from '../components/navigation';

export default function Home() {
    return (
      <SiteWrapper>
        <Helmet>
          <title>Guessword - Team</title>
          <meta name="description" content="Play together with your friends in this word guessing game." />
        </Helmet>
        <Team />
        <Header />
        <Navigation />
      </SiteWrapper>
    )
  }
  