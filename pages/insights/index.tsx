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
                <h1>Insights</h1>
                <p>I write about engineering, product management, and sometimes a project that I'm working on. Some engineering posts are very much so my study notes. Posts about engineering are tagged 'Engineering' and posts about product management are tagged... you guessed it, 'Product Management'. Thanks for reading!</p>
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
            <ControllerButtonTwo onClick={handleNextClick}>Next: Hire Me &gt;</ControllerButtonTwo>
            <ControllerButtonTwo style={{display: 'block', color: 'red'}} onClick={handleBackClick}>&lt; Quit</ControllerButtonTwo>
        </ControllerContainer>
        </Layout>
        </>
    )
}