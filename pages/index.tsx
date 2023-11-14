import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout/layout';
import { Section, IntroHeader, CoffeeMug, MenuLink, IntroContent, LinkBox, RetroButton, RetroBackground, OptionsButton, RacewayContainer, Grass, Road, Border, LaneLine } from '../styles/home.styles';

// Assemble the scene
const RacewayScene = () => {
  return (
    <RacewayContainer>
      <Grass />
      <Road>
        <Border color="white" left /> {/* Left border */}
        <Border color="white" /> {/* Right border */}
        <LaneLine />
      </Road>
      <Grass />
    </RacewayContainer>
  )
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <RetroBackground>
        <Section>
          <IntroHeader>
            <h1>DYLAN.ENGINEERING</h1>
          </IntroHeader>
          <IntroContent>
            <Link href='/bio' passHref>
              <RetroButton>🏎️ PRESS START 🏎️</RetroButton>
            </Link>
            <br/>
            <br/>
            <RetroButton>⚙️ OTHER OPTIONS ⚙️</RetroButton>
          </IntroContent>
        </Section>
      </RetroBackground>
      {/* <RacewayScene /> */}
    </Layout>
  )
}