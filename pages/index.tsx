import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../components/layout/layout';
import { GlassCardContainer, GlassCard, Section, IntroHeader, IntroContent, RetroButton, DropdownMenu, MainMenuOverlay, TransitionScreen, FullScreenFadeIn } from '../styles/home.styles';

// const playSound = (soundUrl) => {
//   const audio = new Audio(soundUrl);
//   audio.play();
// };

export default function Home() {
  const router = useRouter();
  const menuParameter = router.query.menu === 'main' ? true: undefined;

  const [showMenu, setShowMenu] = useState(false);
  const [showFullScreenFadeIn, setShowFullScreenFadeIn] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  const handleStartClick = () => {
    setShowTransition(true);
    setTimeout(() => {
      setShowFullScreenFadeIn(true); // Activate the full-screen overlay
      setTimeout(() => {
        router.push(`/about?nav=0`); // Navigate after the fade-out completes
      }, 500); // Duration of the fade-out animation
    }, 800); // Adjust timing based on your animation
  };
  
  const handleBackClick =() => {
    setShowMenu(false);
    router.replace(router.pathname);
  }

  useEffect(() => {
    if(menuParameter) setShowMenu(true);
    // if (typeof window !== undefined) {
    //   // playSound('/sounds/intro-music.wav');
    // }
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {showFullScreenFadeIn && ( <FullScreenFadeIn />)}
        <GlassCardContainer>
            <GlassCard>
              <Section>
                {!showMenu && (
                  <>
                    <IntroHeader>
                      <p>🗽🏎️</p>
                      <h1>DYLAN.ENGINEERING</h1>
                      <h3>Creative Problem-Solving + Execution</h3>
                    </IntroHeader>
                    <IntroContent>
                      {/* <Link href='/bio' passHref> */}
                        <RetroButton onClick={handleStartClick}>&gt; PRESS START &lt;</RetroButton>
                      {/* </Link> */}
                      <br/>
                      <br/>
                      <RetroButton onClick={() => setShowMenu(true)}>&gt; MAIN MENU &lt;</RetroButton>
                    </IntroContent>
                  </>
                  )}
                  {showTransition && (
                        <TransitionScreen>
                          <h1>Loading<span>.</span><span>.</span><span>.</span></h1>
                        </TransitionScreen>
                      )}
                  {showMenu && (
                    <MainMenuOverlay>
                      <IntroHeader>
                        <p>🗽🏎️</p>
                        <h1>DYLAN.ENGINEERING</h1>
                        <h3>Main Menu</h3>
                      </IntroHeader>
                      <ul>
                        <li><Link href='/about?nav=1'>About Me</Link></li>
                        <li><Link href='/projects?nav=1'>Projects + Ventures</Link></li>
                        <li><Link href='/insights?nav=1'>Insights</Link></li>
                        <li><Link href='/hire?nav=1'>Hire Me</Link></li>
                      </ul>
                      <div className="home-button" onClick={handleBackClick}>&lt; Back to start</div>
                    </MainMenuOverlay>
                  )}
              </Section>
            </GlassCard>
        </GlassCardContainer>
    </Layout>
  )
}