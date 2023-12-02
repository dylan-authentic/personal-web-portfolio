import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../components/layout/layout';
import { GlassCardContainer, GlassCard, Section, IntroHeader, IntroContent, RetroButton, DropdownMenu, MainMenuOverlay, TransitionScreen } from '../styles/home.styles';

// const playSound = (soundUrl) => {
//   const audio = new Audio(soundUrl);
//   audio.play();
// };

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const [showTransition, setShowTransition] = useState(false);
  const router = useRouter();

  const handleStartClick = () => {
    setShowTransition(true);
    setTimeout(() => {
      router.push(`/bio`); // Replace with your target path
    }, 3000); // Adjust timing based on your animation
  };


  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };
  
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
              {!showMenu && (
                <>
                  <IntroHeader>
                    <p>🗽🏎️</p>
                    <h1>DYLAN.ENGINEERING</h1>
                    <h3>Creative Problem-Solving + Execution</h3>
                  </IntroHeader>
                  <IntroContent>
                    {/* <Link href='/bio' passHref> */}
                      <RetroButton onClick={handleStartClick}>&gt; START HERE &lt;</RetroButton>
                    {/* </Link> */}
                    {showTransition && (
                      <TransitionScreen>
                        <h1>Loading...</h1> {/* Or any other creative content */}
                      </TransitionScreen>
                    )}
                    <br/>
                    <br/>
                    <RetroButton onClick={() => setShowMenu(true)}>&gt; START SOMEWHERE ELSE &lt;</RetroButton>
                  </IntroContent>
                </>
                )}
                {showMenu && (
                  <MainMenuOverlay>
                     <IntroHeader>
                      <p>🗽🏎️</p>
                      <h1>DYLAN.ENGINEERING</h1>
                      <h3>Main Menu</h3>
                    </IntroHeader>
                    <ul>
                      <li><Link href='/about'>About Me</Link></li>
                      <li><Link href='/projects'>Projects + Ventures</Link></li>
                      <li><Link href='/insights'>Insights</Link></li>
                      <li><Link href='/hire'>Hire Me</Link></li>
                    </ul>
                    <div className="home-button" onClick={() => setShowMenu(false)}>&lt; Back</div>
                  </MainMenuOverlay>
                )}
              
            </Section>
          </GlassCard>
        </GlassCardContainer>
    </Layout>
  )
}

{/* <span style={{textShadow: 'initial',fontSize:'40px'}}>🏗</span>  */}