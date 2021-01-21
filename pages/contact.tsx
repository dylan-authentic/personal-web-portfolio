import Head from 'next/head';
import Layout, {siteTitle} from "../components/layout/layout";
import { ContactWrapper, LinkWrapper, SectionPressed } from '../styles/contact.styles.js';

export default function TestPost() {
    return (
        <Layout>
            <Head>
                <title>Contact Me | {siteTitle}</title>
            </Head>
            <SectionPressed>
                <h1>Get in touch!</h1>
                <ContactWrapper>
                    <LinkWrapper>
                        <a href="mailto:dylan.terrell14@gmail.com">📧 Email</a>
                    </LinkWrapper>
                    <LinkWrapper>
                        <a href="#">⚙️ Resume</a>
                    </LinkWrapper>
                    <LinkWrapper>
                        <a href="https://www.linkedin.com/in/dylan-terrell/">🤝 LinkedIn</a>
                    </LinkWrapper>
                    <LinkWrapper>
                        <a href="https://github.com/dylan-authentic">💻 Github</a>
                    </LinkWrapper>
                    <LinkWrapper>
                        <a href="https://dylanauthentic.medium.com/">✒️ Medium</a>
                    </LinkWrapper>
                </ContactWrapper>
            </SectionPressed>
        </Layout>
    )
  }