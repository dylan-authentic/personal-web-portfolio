import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../components/layout/layout';
import { ContentWrapper, GlassCardContainer, GlassCardDark, TickerContainer, TickerLine, TickerText, ControllerContainer, ControllerButton, ControllerButtonTwo, OffscreenDiv, TickerLineTwo, ExpandCollapseButton } from '../styles/about.styles';

const textArray = ["Product Management", "Software Development", "Business Development", "Custom Websites", "Consulting"];
const repeatedText = textArray.concat(textArray).concat(textArray).concat(textArray).concat(textArray);
const repeatedTextTwo = textArray.concat(textArray).concat(textArray).concat(textArray).concat(textArray).concat(textArray);

export default function AboutMe() {
    const router = useRouter();
    const showNavbarParam = router.query.nav=== '1' ? true: false;

    const [isExpanded, setIsExpanded] = useState(false);

    const handleSetIsExpanded = () => {
        setIsExpanded(!isExpanded);
    }

    // const expandedText = `, where I built a strong technical foundation. Post-graduation, I worked as a web & database administrator at the New York County Lawyers Association, where I honed my Data Analysis and SQL database management expertise. After this role, I pursued my first stint of entreprenuership in self-employment, and I began providing contract technology services to businesses. During this time, I gained valuable business experience and developed and launched successful software projects, including full-stack web applications, automation scripts, and app briefs for clients. During this experience of working with clients, I grew a liking for not only working on technical problems, but also identifying business and customer-specific problems that could be solved using technology. This led me to pursue product management full-time.{<br/>} {<br/>}I'm passionate about business, entreprenuership, music, tech, and learning new things, and I'm based in New York City.{<br/>} {<br/>}`;
    // const collapsedText = `...${<button onClick={handleSetIsExpanded}>Expand Text</button>}`

    // const [textWidth, setTextWidth] = useState(0);
    // const measureRef = useRef(null);

    // const [repetitions, setRepetitions] = useState(0);

    // useEffect(() => {
    //     if (measureRef.current) {
    //         setTextWidth(measureRef.current.offsetWidth);
    //     }
    // }, []);

    // useEffect(() => {
    //     if (textWidth > 0) {
    //         const screenWidth = window.innerWidth;
    //         const neededRepetitions = Math.ceil(screenWidth / textWidth);
    //         setRepetitions(neededRepetitions * 3); // Adjust the multiplier as needed
    //     }
    // }, [textWidth]);
    
    // useEffect(() => {
    //     const handleResize = () => {
    //         if (textWidth > 0) {
    //             const newScreenWidth = window.innerWidth;
    //             const newRepetitions = Math.ceil(newScreenWidth / textWidth);
    //             setRepetitions(newRepetitions * 3); // Adjust the multiplier as needed
    //         }
    //     };
    
    //     window.addEventListener('resize', handleResize);
    
    //     return () => window.removeEventListener('resize', handleResize);
    // }, [textWidth]);

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
                    <ContentWrapper>
                        <h1>About Me</h1>
                        <p>
                I'm Dylan 👋🏽<br /><br />
                I'm a product manager at Mediaocean, where I work on adtech solutions for enterprise advertisers. With a degree in computer science and over 6 years of technical roles, I've developed a versatile set of skills and experiences across full-stack software development and product building.<br /><br />
                As a product manager, I drive outcomes through first principles thinking, feedback and collaboration, and applying an algorithmic approach to execution. I set clear goals, organize practical yet flexible gameplans, and follow through to achieve them.<br/><br />
                I started my career interning as a software engineer in undergrad{isExpanded ? ', where I ' : ', where I...'}
                 {isExpanded && (
                    <>
                        built a strong technical foundation. Post-graduation, I worked as a web & database administrator at the New York County Lawyers Association, where I honed my Data Analysis and SQL database management skills. After this role, I pursued my first stint of entrepreneurship and self-employment, providing contract services to small and medium businesses. During this time, I gained valuable business experience and developed and launched successful software projects, including full-stack web applications, automation scripts, and app briefs for clients. This work grew my interest for not only working on technical problems, but also identifying business and customer problems that could be solved using software, leading me to pursue my current role in product management full-time.<br /><br />
                        I'm passionate about business, entrepreneurship, music, tech, and learning new skills, and I'm based in New York City.<br /><br />
                    </>
                )}
            </p>
            <ExpandCollapseButton onClick={handleSetIsExpanded}>
                {isExpanded ? 'Collapse' : 'Continue Reading...'}
            </ExpandCollapseButton>
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
    );
}