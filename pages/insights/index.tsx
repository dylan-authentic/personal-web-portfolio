import { useRouter } from 'next/router';
import BlogItem from '../../components/blogIndexItem';
import Layout from '../../components/layout/layout';
import { getSortedPostsData } from '../../lib/posts';
import { PostContainer, PostHeaderSection, Filters } from '../../styles/posts.styles'
import { ControllerContainer, ControllerButtonTwo } from '../../styles/projects.styles';
import { useState } from 'react';

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

    const [filterTag, setFilterTag] = useState('');
    
    const handleBackClick =() => {
        router.push('/')
    }

    const handleNextClick =() => {
        router.push('/hire?nav=1')
    }


    // Filtered list of posts
    const filteredPostsData = filterTag
        ? allPostsData.filter(item => item.tag === filterTag)
        : allPostsData;
        
    return (
        <>
        <Layout showNavbar={showNavbarParam}>
        <PostContainer>
            <PostHeaderSection>
                <h1>Mini-blog</h1>
                {/* <p></p> */}
            </PostHeaderSection>
            <Filters>
                <button onClick={() => setFilterTag('')} className={!filterTag ? 'active' : ''}>All Topics</button>
                <button onClick={() => setFilterTag('Engineering')} className={filterTag === 'Engineering' ? 'active' : ''}>Engineering</button>
                <button onClick={() => setFilterTag('Product Management')} className={filterTag === 'Product Management' ? 'active' : ''}>Product Management</button>
            </Filters>
            {filteredPostsData.map((item) => (
                <BlogItem item={item} key={item.id}/>
            ))}
        </PostContainer>
        <ControllerContainer>
            <ControllerButtonTwo onClick={handleNextClick}>Next: Contact Me &gt;</ControllerButtonTwo>
            <ControllerButtonTwo style={{display: 'block', color: 'red'}} onClick={handleBackClick}>&lt; Quit</ControllerButtonTwo>
        </ControllerContainer>
        </Layout>
        </>
    )
}