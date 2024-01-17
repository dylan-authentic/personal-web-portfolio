import { useRouter } from 'next/router';
import Layout from '../../components/layout/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { PostWrapper, PostContainer } from '../../styles/posts.styles'
import { ControllerContainer, ControllerButtonTwo } from '../../styles/projects.styles';


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
    const router = useRouter();

    const handleBackClick =() => {
        router.push('/insights?nav=1')
    }

  return (
    <Layout showNavbar={true}>
        <div className="container">
            <PostWrapper>
                <h2>{postData.title}</h2>
                <h6>{postData.tag}</h6>
                <h6>{postData.date}</h6>
                <br />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </PostWrapper>
            <ControllerContainer>
                <ControllerButtonTwo onClick={handleBackClick}>&lt; Back to Insights</ControllerButtonTwo>
            </ControllerContainer>
        </div>
    </Layout>
  )
}