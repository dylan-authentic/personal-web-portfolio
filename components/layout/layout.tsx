import Head from 'next/head'
import { Styles } from './styles'
import Link from 'next/link'

export const siteTitle = '⚡ Dylan.Engineering'

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
          content="www.dylan.engineering"
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
            <>{children}</>
          </Styles.Wrapper>
        ) : (
          <>
          <Styles.NavBar>
            <Styles.NavBarWrapper>
              <Styles.Container>
                <Styles.Brand>
                  <Link href="/">
                    <h1><span style={{textShadow: 'initial'}}>🏗</span> dylan.engineering <span style={{textShadow: 'initial'}}>🏗</span></h1>
                  </Link>
                </Styles.Brand>
                <Styles.NavMenu>
                  <Link href='/'>Home</Link>
                  <Link href='/bio'>My Bio</Link>
                  <Link href='/projects'>Projects</Link>
                  <Link href='/articles'>Articles</Link>
                  <Link href='/contact'>Contact</Link>
                </Styles.NavMenu>
              </Styles.Container>
            </Styles.NavBarWrapper>
          </Styles.NavBar>
          <main>{children}</main>
          <Styles.FooterWrapper>
            <Styles.Footer>
              <Link href="/">
                dylan.engineering
              </Link>
            </Styles.Footer>
          </Styles.FooterWrapper>
          </>
        )}
      </>
    </Styles.Container>
  )
}