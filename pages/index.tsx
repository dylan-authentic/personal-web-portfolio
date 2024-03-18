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
  "Dylan Terrell, Product Manager & Engineer"
];

export default function Home() {
  const router = useRouter();
  const menuParameter = router.query.menu === 'main' ? true: undefined;
  const showFreelanceAvailable = router.query.freelance === 'yes' ? true : undefined;

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
    // Function to update index
    const updateIndex = () => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };
  
    // Immediately update index on first render
    updateIndex();
  
    // Set the interval for subsequent updates
    const intervalId = setInterval(updateIndex, 2200);
  
    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run only on component mount
  
  useEffect(() => {
    // Update currentText whenever index changes
    setCurrentText(texts[index]);
  }, [index, texts]);

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
                      <h3>Product Manager & Engineer</h3>
                      {showFreelanceAvailable && (
                        <span style={{color: 'white', fontFamily: 'PressStart2P', fontSize: '9px'}}>Available for Freelance Projects</span>
                        )}
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
                        <li><button onClick={() => handleStartClick('/insights?nav=1')}>Mini-blog</button></li>
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