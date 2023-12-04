import BlogItem from '../../components/blogIndexItem';
import Layout from '../../components/layout/layout';
import { getSortedPostsData } from '../../lib/posts';

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
    return (
        <>
        <Layout>
        <div className="container">
            <h1 style={{fontFamily: 'Inconsolata, sans-Serif'}}>Articles</h1>
            <p>I write about engineering, product management, and sometimes a project that I'm working on. Some engineering posts are very much so my study notes. Posts about engineering are tagged 'Engineering' and posts about product management are tagged... you guessed it, 'Product Management'. Thanks for reading!</p>
                {allPostsData.map((item) => (
                    <BlogItem item={item} key={item.id}/>
                ))}
        </div>
        </Layout>
        </>
    )
}