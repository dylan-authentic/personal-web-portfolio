import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../components/layout/layout';
import { Wrapper, LinkWrapper, ContentWrapper, BackButton, GlassCardContainer, GlassCardDark } from '../styles/about.styles';

export default function AboutMe() {
    const router = useRouter();
    const showNavbarParam = router.query.nav=== '1' ? true: false;
    
    const handleBackClick =() => {
        router.push('/')
      }

    return (
        <Layout showNavbar={showNavbarParam}>
            <Head>
                <title>About Me | {siteTitle}</title>
            </Head>
            <GlassCardContainer>
                <GlassCardDark>
                    {/* <Wrapper> */}
                        {/* <div className="container">
                            <LinkWrapper>
                                <a href="https://drive.google.com/file/d/1KVTY2TKNP7KY1gK4dTXbm-AIX0HL2br5/view?usp=sharing" target='_blank'>⚙️ Resume</a>
                                <a href="https://www.linkedin.com/in/dylan-terrell/" target='_blank'>🤝 LinkedIn</a>
                                <a href="https://github.com/dylan-authentic" target='_blank'>💻 Github</a>
                                <a href="https://dylanauthentic.medium.com/" target='_blank'>✒️ Medium</a>
                            </LinkWrapper>
                        </div> */}
                        <div className="container">
                            <ContentWrapper>
                                <h1>About Me</h1>
                                <p>Professionally, I'm a software product manager with 3+ years of ADTECH experience, and 6 years of software engineering experience. {<br/>} {<br/>} Additionally, I'm an entreprenuer with a passion for business, technology, music, art, design, and engineering.{<br/>} {<br/>} Some additional interests of mine are machine learning, advanced manufacturing and design, sports, and community development.{<br/>} {<br/>} Based in New York City. {<br/>} {<br/>} Dato curioso: actualmente, estoy estudiando español para aprender un idioma nuevo y aprender sobre otras culturas del mundo. ¡Pregúntame sobre eso!</p>
                            </ContentWrapper>
                            {/* <ContentWrapper>
                                <h1>My journey into tech</h1>
                                <p>When I graduated high school, I promised myself I would only take the required math credits in college and be done with math for good. My initial decision to study journalism and communications seemed like the best way to do that. But, being the ambitious fellow I am, I one day found myself learning HTML & CSS in my dorm room, and the curiosity continued. From there, I taught myself how to build websites and began offering that skill as a service to people I knew. I then decided to do the one thing I promised myself I wouldn't do... I changed my major to one of the most math-heavy majors in college (computer science). But, luckily for me, I soon fell in love with learning both high and low level concepts of computer science and software engineering. And, as they say, that's all she wrote.‍‍ <br/><br/><b>For more about my journey, check out <a href="https://medium.com/@dylanauthentic/my-journey-so-far-c21e46eabae0">this article</a> I wrote back in 2017 on Medium.</b></p>
                            </ContentWrapper> */}
                        </div>
                    {/* </Wrapper> */}
                    {!showNavbarParam && (<BackButton onClick={handleBackClick}>&lt; Back to start</BackButton>)}
                </GlassCardDark>
            </GlassCardContainer>
        </Layout>
    )
}