import Head from 'next/head';
import Layout, {siteTitle} from "../components/layout/layout";
import { ContactWrapper, LinkWrapper, SectionPressed } from '../styles/contact.styles';

export default function TestPost() {
    return (
        <Layout>
            <Head>
                <title>Contact Me | {siteTitle}</title>
            </Head>
            <SectionPressed>
                <h1>Contact Me</h1>
                <ContactWrapper>
                    <LinkWrapper>
                        <a href="mailto:dylan.terrell14@gmail.com">📧 Email</a>
                    </LinkWrapper>
                    <LinkWrapper>
                        <a target='_blank' href="https://drive.google.com/file/d/15rM7y34HmZAT1w7IWN5xGJSJDJ6Cjy7p/view?usp=sharing">⚙️ Resume</a>
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
        </Layout>
    )
  }