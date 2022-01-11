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

export default function Home() {
  return (
     <main>
         <NavigationMenu />
         <HeroSection />
         <TokenStats />
         <AboutSection />
         <CommunitySection />
         <GoalsSection />
         <NFTSection />
         <PartnersSection />
         <Footer />
     </main>
  )
}
