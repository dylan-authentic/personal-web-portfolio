import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../components/layout/layout';
import { ContentWrapper, GlassCardContainer, GlassCardDark, TickerContainer, TickerLine, TickerText, ControllerContainer, ControllerButton, ControllerButtonTwo, OffscreenDiv, TickerLineTwo } from '../styles/about.styles';

const textArray = ["Product Management", "Software Development", "Business Development", "Custom Websites", "Consulting"];
const repeatedText = textArray.concat(textArray).concat(textArray).concat(textArray).concat(textArray);
const repeatedTextTwo = textArray.concat(textArray).concat(textArray).concat(textArray).concat(textArray).concat(textArray);

export default function AboutMe() {
    const router = useRouter();
    const showNavbarParam = router.query.nav=== '1' ? true: false;

    const [textWidth, setTextWidth] = useState(0);
    const measureRef = useRef(null);

    const [repetitions, setRepetitions] = useState(0);

    useEffect(() => {
        if (measureRef.current) {
            setTextWidth(measureRef.current.offsetWidth);
        }
    }, []);

    useEffect(() => {
        if (textWidth > 0) {
            const screenWidth = window.innerWidth;
            const neededRepetitions = Math.ceil(screenWidth / textWidth);
            setRepetitions(neededRepetitions * 3); // Adjust the multiplier as needed
        }
    }, [textWidth]);
    
    useEffect(() => {
        const handleResize = () => {
            if (textWidth > 0) {
                const newScreenWidth = window.innerWidth;
                const newRepetitions = Math.ceil(newScreenWidth / textWidth);
                setRepetitions(newRepetitions * 3); // Adjust the multiplier as needed
            }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
    }, [textWidth]);

    const handleBackClick =() => {
        router.push('/')
    }
    const handleNextClick =() => {
        router.push('/projects?nav=1')
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
                            {/* <OffscreenDiv ref={measureRef}>
                                {repeatedText.join(' ')} 
                            </OffscreenDiv>
                            <TickerContainer>
                                <TickerLine direction="left">
                                    {Array.from({ length: 20 }).map((_, index) => (
                                        repeatedText.map((text, textIndex) => (
                                            <TickerText key={`left-${index}-${textIndex}`}>{text}</TickerText>
                                        ))
                                    ))}
                                </TickerLine> */}
                                {/* <TickerLineTwo direction="right">
                                    {Array.from({ length: 1 }).map((_, index) => (
                                        repeatedTextTwo.map((text, textIndex) => (
                                            <TickerText key={`right-${index}-${textIndex}`}>{text}</TickerText>
                                        ))
                                    ))}
                                </TickerLineTwo> */}
                            {/* </TickerContainer> */}
                            <p>Hey, I'm Dylan <span style={{fontSize: '22px'}}>👋🏽</span>{<br/>} {<br/>}I currently work as a software product manager in ADTECH, with 3 years of experience driving and executing product strategy. My background is in computer science with 6+ years of programming and software engineering experience building full-stack applications. {<br/>} {<br/>} I'm passionate about business, technology, design, entreprenuership, and engineering, with additional interests in music, sports, fashion, community development, and advanced manufacturing.{<br/>} {<br/>} I'm a continuous learner and project builder, and I'm currently self-studying foundational mathematics and Spanish in my free time. {<br/>} {<br/>} I'm based in New York City. {<br/>} {<br/>} Estoy estudiando español para aprender un idioma nuevo y aprender sobre otras culturas del mundo. ¡Pregúntame sobre eso!</p>
                            {/* <ControllerContainer>
                                <ControllerButtonTwo onClick={handleNextClick}>Projects + Ventures &gt;</ControllerButtonTwo>
                            </ControllerContainer> */}
                            {/* {!showNavbarParam && (<BackButton onClick={handleBackClick}>&lt; Back to start</BackButton>)} */}
                        </ContentWrapper>
                </GlassCardDark>
            </GlassCardContainer>
            {showNavbarParam && (
            <ControllerContainer>
                <ControllerButtonTwo onClick={handleNextClick}>Next: Projects and Ventures &gt;</ControllerButtonTwo>
                <ControllerButtonTwo style={{display: 'block', color: 'red'}} onClick={handleBackClick}>&lt; Quit</ControllerButtonTwo>
            </ControllerContainer>
            )}
        </Layout>
    )
}