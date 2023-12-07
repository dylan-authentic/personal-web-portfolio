import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../components/layout/layout';
import { Wrapper, LinkWrapper, ContentWrapper, BackButton, GlassCardContainer, GlassCardDark, TickerContainer, TickerLine, TickerText, ControllerContainer, ControllerButton } from '../styles/about.styles';
  
export default function AboutMe() {
    const router = useRouter();
    const showNavbarParam = router.query.nav=== '1' ? true: false;
    
    const handleBackClick =() => {
        router.push('/')
    }
    const handleNextClick =() => {
        router.push('/projects?nav=0')
    }

    return (
        <Layout showNavbar={showNavbarParam}>
            <Head>
                <title>About Me | {siteTitle}</title>
            </Head>
            <GlassCardContainer>
                <GlassCardDark>
                        {/* <div className="container">
                            <LinkWrapper>
                                <a href="https://drive.google.com/file/d/1KVTY2TKNP7KY1gK4dTXbm-AIX0HL2br5/view?usp=sharing" target='_blank'>⚙️ Resume</a>
                                <a href="https://www.linkedin.com/in/dylan-terrell/" target='_blank'>🤝 LinkedIn</a>
                                <a href="https://github.com/dylan-authentic" target='_blank'>💻 Github</a>
                                <a href="https://dylanauthentic.medium.com/" target='_blank'>✒️ Medium</a>
                            </LinkWrapper>
                        </div> */}
                        <ContentWrapper>
                            <h1>About Me</h1>
                            <TickerContainer>
                                {/* <TickerLine direction="left">
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Consulting</TickerText>
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Consulting</TickerText>
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Consulting</TickerText>
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Consulting</TickerText>
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Consulting</TickerText>
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Consulting</TickerText>
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Consulting</TickerText>
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Consulting</TickerText>
                                    {/* <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Consulting</TickerText>
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Consulting</TickerText>
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Consulting</TickerText> *
                                </TickerLine> */}
                                <TickerLine direction="right">
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Freelance Consulting</TickerText>
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Freelance Consulting</TickerText>
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Freelance Consulting</TickerText>
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Freelance Consulting</TickerText>
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Freelance Consulting</TickerText>
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Freelance Consulting</TickerText>
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Freelance Consulting</TickerText>
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Freelance Consulting</TickerText>
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Freelance Consulting</TickerText>
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Freelance Consulting</TickerText>
                                    <TickerText>Product Management</TickerText>
                                    <TickerText>Software Development</TickerText>
                                    <TickerText>Business Development</TickerText>
                                    <TickerText>Custom Websites</TickerText>
                                    <TickerText>Freelance Consulting</TickerText>
                                </TickerLine>
                            </TickerContainer>
                            <p>Professionally, I'm a software product manager with 3+ years of ADTECH experience, and 6 years of software engineering experience. {<br/>} {<br/>} Additionally, I'm an entreprenuer with a passion for business, technology, music, art, design, and engineering.{<br/>} {<br/>} Some additional interests of mine are machine learning, advanced manufacturing and design, sports, and community development.{<br/>} {<br/>} Based in New York City. {<br/>} {<br/>} Dato curioso: actualmente, estoy estudiando español para aprender un idioma nuevo y aprender sobre otras culturas del mundo. ¡Pregúntame sobre eso!</p>
                            {/* {!showNavbarParam && (<BackButton onClick={handleBackClick}>&lt; Back to start</BackButton>)} */}
                        </ContentWrapper>
                        {!showNavbarParam && (
                        <ControllerContainer>
                            <ControllerButton onClick={handleBackClick}>Home</ControllerButton>
                            <ControllerButton onClick={handleNextClick}>Next</ControllerButton>
                        </ControllerContainer>
                        )}
                </GlassCardDark>
            </GlassCardContainer>
        </Layout>
    )
}