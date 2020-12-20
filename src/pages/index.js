import React from "react";
import SiteWrapper from '../components/siteWrapper';
import Header from '../components/header';
import Phone from '../components/phone';
import Navigation from '../components/navigation';

export default function Home() {
  return (
    <SiteWrapper>
      <Header />
      <Phone />
      <Navigation />
    </SiteWrapper>
  )
}
