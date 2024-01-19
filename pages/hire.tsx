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
                <title>Hire Me | {siteTitle}</title>
            </Head>
            <SectionPressed>
                <ContactWrapper>
                    <h1>Hire Me</h1>
                    <LinkWrapper>
                        <a href="mailto:dylan.terrell14@gmail.com">📧 Email</a>
                    </LinkWrapper>
                    <LinkWrapper>
                        <a target='_blank' href="https://drive.google.com/file/d/1KVTY2TKNP7KY1gK4dTXbm-AIX0HL2br5/view?usp=sharing">⚙️ Resume</a>
                    </LinkWrapper>
                    <LinkWrapper>
                        <a target='_blank' href="https://www.linkedin.com/in/dylan-terrell/">🤝 LinkedIn</a>
                    </LinkWrapper>
                    <LinkWrapper>
                        <a target='_blank' href="https://github.com/dylan-authentic">💻 Github</a>
                    </LinkWrapper>
                    <LinkWrapper>
                        <a target='_blank' href="https://dylanauthentic.medium.com/">✒️ Medium</a>
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