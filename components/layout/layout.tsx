import Head from 'next/head'
import { Styles } from './styles'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const siteTitle = '☕️ dylan.cafe'

export default function Layout({
  children,
  home 
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <Styles.Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <>
        {home ? (
          <Styles.Wrapper>
            <main>{children}</main>
          </Styles.Wrapper>
        ) : (
          <>
          <Styles.NavBar>
            <Styles.NavBarWrapper>
              <Styles.Container>
                <Styles.Brand>
                  <Link href="/">
                    <a><h1>☕️ dylan.cafe</h1></a>
                  </Link>
                </Styles.Brand>
                <Styles.NavMenu>
                  <Link href='/'><a>Home</a></Link>
                  <Link href='/bio'><a>My Bio</a></Link>
                  <Link href='/projects'><a>Projects</a></Link>
                  {/* <Link href='/blog'><a>Blog</a></Link> */}
                  <Link href='/contact'><a>Contact</a></Link>
                </Styles.NavMenu>
              </Styles.Container>
            </Styles.NavBarWrapper>
          </Styles.NavBar>
          <main>{children}</main>
          <Styles.FooterWrapper>
            <Styles.Footer>
              <Link href="/">
                <a>dylan.cafe</a>
              </Link>
            </Styles.Footer>
          </Styles.FooterWrapper>
          </>
        )}
      </>
    </Styles.Container>
  )
}