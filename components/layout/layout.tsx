import Head from 'next/head'
import { Styles } from './styles'
import Link from 'next/link'

export const siteTitle = '⚡ Dylan.Engineering'

export default function Layout({
  children,
  home,
  showNavbar
}: {
  children: React.ReactNode
  home?: boolean,
  showNavbar?: boolean
}) {
  console.log("home: " + home);
  console.log("showNavbar: " + showNavbar);
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
        {(home || !showNavbar) ? (
          <Styles.Wrapper>
            <>{children}</>
          </Styles.Wrapper>
        ) : (
          <Styles.Wrapper>
          <Styles.NavBar>
            <Styles.NavBarWrapper>
              <Styles.Container>
                <Styles.Brand>
                  <Link href="/">
                    <h1>🗽🏎️ dylan.engineering </h1>
                  </Link>
                </Styles.Brand>
                <Styles.NavMenu>
                  <Link href='/'>Home</Link>
                  <Link href='/about?nav=1'>About Me</Link>
                  <Link href='/projects?nav=1'>Projects + Ventures</Link>
                  <Link href='/insights?nav=1'>Insights</Link>
                  <Link href='/hire?nav=1'>Hire Me</Link>
                </Styles.NavMenu>
              </Styles.Container>
            </Styles.NavBarWrapper>
          </Styles.NavBar>
          <main>{children}</main>
          <Styles.FooterWrapper>
            <Styles.Footer>
              <Link href="/?menu=main">
                &lt; back to main menu
              </Link>
            </Styles.Footer>
          </Styles.FooterWrapper>
          </Styles.Wrapper>
        )}
      </>
    </Styles.Container>
  )
}

{/* <span style={{textShadow: 'initial'}}>🏗</span> */}
{/* Added code to grab the nav query parameter from the url and show or hide the navbar in the layout component. As        */}