import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout/layout';
import { Section, IntroHeader, CoffeeMug, MenuLink, IntroContent, LinkBox, RetroButton, RetroBackground, OptionsButton } from '../styles/home.styles';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <RetroBackground>
        <Section>
          <IntroHeader>
            <img src="/images/firstlogo-1 copy.png" />
          </IntroHeader>
          <IntroContent>
            <RetroButton>🏎️ START HERE 🏎️</RetroButton>
            <br/>
            <br/>
            <RetroButton>⚙️ OTHER OPTIONS ⚙️</RetroButton>
          </IntroContent>
        </Section>
      </RetroBackground>
    </Layout>
  )
}