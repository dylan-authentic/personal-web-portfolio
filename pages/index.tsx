import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Plants from '../components/plants';
import styles from '../styles/Main.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.section}>
        <div className={styles.introHeader}>
          <h1><span className={styles.coffeeMug}>☕️</span> dylan.cafe</h1>
          <div>
            <Link href="/">
              <a className={styles.menulink}>Home</a>
            </Link>
            <Link href="/about-me">
              <a className={styles.menulink}>About Me</a>
            </Link>
            <Link href="/blog">
              <a className={styles.menulink}>Blog Posts</a>
            </Link>
            <Link href="/contact">
              <a className={styles.menulink}>Contact</a>
            </Link>
          </div>
        </div>
        <div className={styles.introContent}>
          <p>
            I'm laser-focused when it comes to my work, determined to win when it comes to my goals, & good-hearted when it comes to treating others.‍
            <br/><br/>I'm a computer programmer with a background in fullstack web development, database management, & cloud-native applications.
            <br/><br/>I'm an entrepreneur building businesses in my spare time, and I currently advise small and medium-sized businesses in adopting simple and useful technology for the digital era.‍
          </p>
        </div>
      </div>
    </Layout>
  )
}