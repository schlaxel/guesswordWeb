import React from "react";
import { Helmet } from "react-helmet";
import SiteWrapper from '../components/siteWrapper';
import Header from '../components/header';
import Phone from '../components/phone';
import Navigation from '../components/navigation';

export default function Home() {
  return (
    <SiteWrapper>
      <Helmet>
        <title>Guessword - Party Game</title>
        <meta name="description" content="Play together with your friends in this word guessing game." />
      </Helmet>
      <Header />
      <Phone />
      <Navigation />
    </SiteWrapper>
  )
}
