import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';
import { Wrapper, LinkWrapper, ContentWrapper } from '../styles/bio.styles';

export default function AboutMe() {
    return (
        <Layout>
            <Head>
                <title>My Bio | {siteTitle}</title>
            </Head>
            <Wrapper>
                <div className="container">
                    <LinkWrapper>
                        <a href="https://drive.google.com/file/d/1_Yxr7vmX1H2k65M7FKrl_6o-YyGfRJE6/view?usp=sharing" target='_blank'>⚙️ Resume</a>
                        <a href="https://www.linkedin.com/in/dylan-terrell/" target='_blank'>🤝 LinkedIn</a>
                        <a href="https://github.com/dylan-authentic" target='_blank'>💻 Github</a>
                        <a href="https://dylanauthentic.medium.com/" target='_blank'>✒️ Medium</a>
                    </LinkWrapper>
                </div>
                <div className="container">
                    <ContentWrapper>
                        <h1>About Me</h1>
                        <p>Welcome to my corner of the internet! My name is Dylan Terrell. I was born and raised in Atlanta, GA to a family that I'm incredibly grateful for. Like many young boys growing up, I dreamed of being the next Allen Iverson or Michael Jordan 🏀, but my crossover and jump shot <a href="https://www.youtube.com/watch?v=PPhKo7i8N-M">(while pretty nice)</a>, didn't take me to the big leagues. Instead, I took my talents to New York City 🌃 where I studied computer science 💻 at St. John's University and received my bachelor's degree in May of 2018 🎓. Since then, I've been on a dedicated path of learning the ins and outs of life, pursuing my passions and goals, and growing my skillset and knowledge along the way🚀.</p>
                    </ContentWrapper>
                    <ContentWrapper>
                        <h1>My journey into tech</h1>
                        <p>When I graduated high school, I promised myself I would only take the required math credits in college and be done with math for good. My initial decision to study journalism and communications seemed like the best way to do that. But, being the ambitious fellow I am, I one day found myself learning HTML & CSS in my dorm room, and the curiosity continued. From there, I taught myself how to build websites and began offering that skill as a service to people I knew. I then decided to do the one thing I promised myself I wouldn't do... I changed my major to one of the most math-heavy majors in college (computer science). But, luckily for me, I soon fell in love with learning both high and low level concepts of computer science and software engineering. And, as they say, that's all she wrote.‍‍ <br/><br/><b>For more about my journey, check out <a href="https://medium.com/@dylanauthentic/my-journey-so-far-c21e46eabae0">this article</a> I wrote back in 2017 on Medium.</b></p>
                    </ContentWrapper>
                </div>
            </Wrapper>
        </Layout>
    )
}