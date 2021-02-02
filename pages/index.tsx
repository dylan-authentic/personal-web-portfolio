import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout/layout';
import { Section, IntroHeader, CoffeeMug, MenuLink, IntroContent, LinkBox } from '../styles/home.styles';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section>
        <IntroHeader>
          <h1><CoffeeMug>☕️</CoffeeMug> dylan.cafe</h1>
          <LinkBox>
            <Link href="/bio">
              <MenuLink>My Bio</MenuLink>
            </Link>
            <Link href="/projects">
              <MenuLink>Projects</MenuLink>
            </Link>
            <Link href="/articles">
              <MenuLink>Articles</MenuLink>
            </Link>
            <Link href="/contact">
              <MenuLink>Contact</MenuLink>
            </Link>
          </LinkBox>
        </IntroHeader>
        <IntroContent>
          <p>
            I'm laser-focused when it comes to my work, determined to win when it comes to my goals, & good-hearted when it comes to treating others.‍
            <br/><br/>I'm a computer programmer with a background in fullstack web development, database management, & cloud-native applications.
            <br/><br/>I'm an entrepreneur building businesses in my spare time, and I currently advise small and medium-sized businesses in adopting simple and useful technology for the digital era.‍
          </p>
        </IntroContent>
      </Section>
    </Layout>
  )
}