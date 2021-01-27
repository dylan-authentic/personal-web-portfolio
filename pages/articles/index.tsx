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
                {allPostsData.map((item) => (
                    <BlogItem item={item} key={item.id}/>
                ))}
        </div>
        </Layout>
        </>
    )
}