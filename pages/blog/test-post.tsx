import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout/layout'

export default function TestPost() {
    return (
        <Layout>
            <Head>
                <title>Test Post</title>
            </Head>
            <h1>Test Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
  }