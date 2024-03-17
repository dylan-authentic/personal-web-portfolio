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
                            <p>Greetings, I'm Dylan <span style={{fontSize: '22px'}}>👋🏽</span>{<br/>} {<br/>}I'm a product manager at Mediaocean, where I work on adtech solutions for enterprise advertisers. With a degree in computer science and over 6 years of technical roles, I've developed a versatile set of skills and experiences across full-stack software development and product building.{<br/>} {<br/>}As a product manager, I drive outcomes through first principles thinking, feedback and collaboration, and employing systematic execution. I focus on establishing clear goals, creating practical plans, and continuously following through to achieve them.{<br/>} {<br/>}I'm passionate about business, entreprenuership, learning, music, and tech, and I'm based in New York City.{<br/>} {<br/>} </p>
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