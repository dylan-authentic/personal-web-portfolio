import Layout from '../../components/layout/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { PostWrapper } from '../../styles/posts.styles'

interface Paths {
    params: {
        id: string
    }
}

export async function getStaticPaths() {
    const paths: Array<Paths> = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }: Paths) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }) {
    // console.log(postData.contentHtml)
  return (
    <Layout>
        <div className="container">
            <PostWrapper>
                <h2>{postData.title}</h2>
                <h6>{postData.tag}</h6>
                <h6>{postData.date}</h6>
                <br />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </PostWrapper>
        </div>
    </Layout>
  )
}