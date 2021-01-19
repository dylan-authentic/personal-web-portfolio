import Head from 'next/head';
import Layout, {siteTitle} from "../components/layout";
import styles from '../styles/Contact.module.css';

export default function TestPost() {
    return (
        <Layout>
            <Head>
                <title>Contact Me | {siteTitle}</title>
            </Head>
            <div className='section pressed'>
                <h1>Get in touch!</h1>
                <div className={styles.contactWrapper}>
                    <div className={styles.linkWrapper}>
                        <a href="mailto:dylan.terrell14@gmail.com">📧 Email</a>
                    </div>
                    <div className={styles.linkWrapper}>
                        <a href="#">⚙️ Resume</a>
                    </div>
                    <div className={styles.linkWrapper}>
                        <a href="https://www.linkedin.com/in/dylan-terrell/">🤝 LinkedIn</a>
                    </div>
                    <div className={styles.linkWrapper}>
                        <a href="https://github.com/dylan-authentic">💻 Github</a>
                    </div>
                    <div className={styles.linkWrapper}>
                        <a href="https://dylanauthentic.medium.com/">✒️ Medium</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
  }