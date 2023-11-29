import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout/layout';
import { GlassCardContainer, GlassCard, Section, IntroHeader, IntroContent, RetroButton } from '../styles/home.styles';

// const playSound = (soundUrl) => {
//   const audio = new Audio(soundUrl);
//   audio.play();
// };

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
        <GlassCardContainer>
          <GlassCard>
            <Section>
              <IntroHeader>
                <p>🗽🏎️</p>
                <h1>DYLAN.ENGINEERING</h1>
                <h3>Creative Problem-Solving + Execution</h3>
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
        </GlassCardContainer>
    </Layout>
  )
}

{/* <span style={{textShadow: 'initial',fontSize:'40px'}}>🏗</span>  */}