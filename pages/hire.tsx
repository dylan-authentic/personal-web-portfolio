import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout, {siteTitle} from "../components/layout/layout";
import { ContactWrapper, LinkWrapper, SectionPressed } from '../styles/contact.styles';
import { ControllerContainer, ControllerButtonTwo } from '../styles/projects.styles';

export default function TestPost() {
    const router = useRouter();
    const showNavbarParam = router.query.nav=== '1' ? true: false;
    
    const handleBackClick =() => {
        router.push('/')
    }

    const handleNextClick =() => {
        router.push('/')
    }

    return (
        <Layout showNavbar={showNavbarParam}>
            <Head>
                <title>Contact Me | {siteTitle}</title>
            </Head>
            <SectionPressed>
                <ContactWrapper>
                    <h1>Contact Me</h1>
                    <h3>Let's connect</h3>
                    <LinkWrapper>
                        <a href="mailto:dyl.terrell25@gmail.com">📧 Email</a>
                    </LinkWrapper>
                    <LinkWrapper>
                        <a target='_blank' href="https://www.linkedin.com/in/dylan-terrell/">🤝 LinkedIn</a>
                    </LinkWrapper>
                    <LinkWrapper>
                        <a target='_blank' href="https://github.com/dylan-authentic">💻 Github</a>
                    </LinkWrapper>
                </ContactWrapper>
            </SectionPressed>
            <ControllerContainer>
                    {/* <ControllerButtonTwo onClick={handleNextClick}>Next: Insights &gt;</ControllerButtonTwo> */}
                    <ControllerButtonTwo onClick={handleNextClick}>End &gt; </ControllerButtonTwo>
                </ControllerContainer>
        </Layout>
    )
  }