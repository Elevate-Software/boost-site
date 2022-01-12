import Head from 'next/head'
import {NavigationMenu} from "../components/navigation/navigation";
import {HeroSection} from "../components/sections/hero";
import {PartnersSection} from "../components/sections/partners";
import {Footer} from "../components/footer/footer";
import {TokenStats} from "../components/tokenstats/tokenstats";
import {AboutSection} from "../components/sections/about";
import {GoalsSection} from "../components/sections/goals";
import {NFTSection} from "../components/sections/nft";
import {CommunitySection} from "../components/sections/community";
import { Fragment } from 'react';

export default function Home() {
  return (
      <Fragment>
          <Head>
              <title>Boost2.0</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
          </Head>
          <main>
              <NavigationMenu />
              <HeroSection />
              <TokenStats />
              <CommunitySection />
              <AboutSection />
              <GoalsSection />
              <NFTSection />
              <PartnersSection />
              <Footer />
          </main>
      </Fragment>
  )
}
