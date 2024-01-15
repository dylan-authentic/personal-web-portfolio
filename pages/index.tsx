import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../components/layout/layout';
import { GlassCardContainer, GlassCard, Section, IntroHeader, IntroContent, RetroButton, MainMenuOverlay, TransitionScreen, FullScreenFadeIn } from '../styles/home.styles';

// const playSound = (soundUrl) => {
//   const audio = new Audio(soundUrl);
//   audio.play();
// };

const texts = [
  "Technical Problem Solving",
  "Product and Program Management",
  "Business Strategy and Delivery"
];

export default function Home() {
  const router = useRouter();
  const menuParameter = router.query.menu === 'main' ? true: undefined;

  const [showMenu, setShowMenu] = useState(false);
  const [showFullScreenFadeIn, setShowFullScreenFadeIn] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  // State to keep track of current text
  const [currentText, setCurrentText] = useState(texts[0]);
  
  const [index, setIndex] = useState(0);

  const handleStartClick = (path) => {
    setShowTransition(true);
    setTimeout(() => {
      setShowFullScreenFadeIn(true); // Activate the full-screen overlay
      setTimeout(() => {
        router.push(path); // Navigate after the fade-out completes
      }, 500); // Duration of the fade-out animation
    }, 800); // Adjust timing based on your animation
  };
  
  const handleBackClick =() => {
    setShowMenu(false);
    router.replace(router.pathname);
  }

  useEffect(() => {
    // Change text every 3 seconds (3000 milliseconds)
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setCurrentText(texts[index]);
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [index, texts]);

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
                      <h3>{currentText}</h3>
                    </IntroHeader>
                    <IntroContent>
                      {/* <h3>Welcome!</h3> */}
                        <RetroButton onClick={() => handleStartClick('/about?nav=1')}>&gt; PRESS START &lt;</RetroButton>
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
                        <li><button onClick={() => handleStartClick('/about?nav=1')}>About Me</button></li>
                        <li><button onClick={() => handleStartClick('/projects?nav=1')}>Projects + Ventures</button></li>
                        <li><button onClick={() => handleStartClick('/insights?nav=1')}>Insights</button></li>
                        <li><button onClick={() => handleStartClick('/hire?nav=1')}>Hire Me</button></li>
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