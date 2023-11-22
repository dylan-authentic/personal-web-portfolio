import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout/layout';
import { GlassCard, Section, IntroHeader, CoffeeMug, MenuLink, IntroContent, LinkBox, RetroButton, RetroBackground, OptionsButton, RacewayContainer, Grass, Road, Border, LaneLine, FixedImage } from '../styles/home.styles';

const playSound = (soundUrl) => {
  const audio = new Audio(soundUrl);
  audio.play();
};

export default function Home() {
  // useEffect(() => {
  //   if (typeof window !== undefined) {
  //     // playSound('/sounds/intro-music.wav');
  //   }
  // }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <RetroBackground>
        <GlassCard>
          <Section>
            <IntroHeader>
              <h1>🗽🏎️</h1>
              <h1>DYLAN.ENGINEERING</h1>
              <h3>Critical Problem-Solving + Execution</h3>
            </IntroHeader>
            <IntroContent>
              <Link href='/bio' passHref>
                <RetroButton>&gt; START HERE &lt;</RetroButton>
              </Link>
              <br/>
              <br/>
              <Link href='/bio' passHref>
                <RetroButton>&gt; START SOMEWHERE ELSE &lt;</RetroButton>
              </Link>
            </IntroContent>
          </Section>
        </GlassCard>
      </RetroBackground>
      {/* <RacewayScene /> */}
    </Layout>
  )
}

{/* <span style={{textShadow: 'initial',fontSize:'40px'}}>🏗</span>  */}