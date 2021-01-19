import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Dylan'
export const siteTitle = '☕️ dylan.cafe'

export default function Layout({
  children,
  home 
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
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
          <div className={styles.wrapper}>
            <main>{children}</main>
          </div>
        ) : (
          <>
          <div className={styles.navBar}>
            <div className={styles.navBarWrapper}>
              <div className={styles.container}>
                <div className={styles.brand}>
                  <Link href="/">
                    <a><h1>☕️ dylan.cafe</h1></a>
                  </Link>
                </div>
                <div className={styles.navMenu}>
                  <Link href='/'><a>Home</a></Link>
                  <Link href='/bio'><a>My Bio</a></Link>
                  <Link href='/projects'><a>Projects</a></Link>
                  {/* <Link href='/blog'><a>Blog</a></Link> */}
                  <Link href='/contact'><a>Contact</a></Link>
                </div>
              </div>
            </div>
          </div>
          <main>{children}</main>
          <div className={styles.footerWrapper}>
            <div className={styles.footer}>
              <Link href="/">
                <a>dylan.cafe</a>
              </Link>
            </div>
          </div>
          </>
        )}
      </>
    </div>
  )
}