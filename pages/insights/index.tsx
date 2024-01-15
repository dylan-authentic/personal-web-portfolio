import { useRouter } from 'next/router';
import BlogItem from '../../components/blogIndexItem';
import Layout from '../../components/layout/layout';
import { getSortedPostsData } from '../../lib/posts';
import { PostContainer, PostHeaderSection } from '../../styles/posts.styles'
import { ControllerContainer, ControllerButtonTwo } from '../../styles/projects.styles';

interface PostData {
    id: string,
    date: string,
    title: string,
    tag: string
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
        allPostsData
        }
    }
}

export default function Blog({ allPostsData }: { allPostsData: Array<PostData>}) {
    const router = useRouter();
    const showNavbarParam = router.query.nav=== '1' ? true: false;
    
    const handleBackClick =() => {
        router.push('/')
    }

    const handleNextClick =() => {
        router.push('/hire?nav=1')
    }

    return (
        <>
        <Layout showNavbar={showNavbarParam}>
        <PostContainer>
            <PostHeaderSection>
                <h1>Articles</h1>
                <p>I write about engineering, product management, and sometimes a project that I'm working on. Some engineering posts are very much so my study notes. Posts about engineering are tagged 'Engineering' and posts about product management are tagged... you guessed it, 'Product Management'. Thanks for reading!</p>
            </PostHeaderSection>
                {allPostsData.map((item) => (
                    <BlogItem item={item} key={item.id}/>
                ))}
        </PostContainer>
        <ControllerContainer>
                    <ControllerButtonTwo onClick={handleNextClick}>Next: Hire Me &gt;</ControllerButtonTwo>
                    <ControllerButtonTwo style={{display: 'block', color: 'red'}} onClick={handleBackClick}>&lt; Quit</ControllerButtonTwo>
                </ControllerContainer>
        </Layout>
        </>
    )
}