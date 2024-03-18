import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../components/layout/layout';
import { SectionPressed, ProjectWrapper, ControllerContainer, ControllerButtonTwo } from '../styles/projects.styles';
import ProjectItem from '../components/projectItem';

export default function Projects() {
    const router = useRouter();
    const showNavbarParam = router.query.nav=== '1' ? true: false;

    const handleBackClick =() => {
        router.push('/')
    }

    const handleNextClick =() => {
        router.push('/insights?nav=1')
    }

    return (
        <Layout showNavbar={showNavbarParam}>
            <Head>
                <title>Projects + Ventures | {siteTitle}</title>
            </Head>
            <SectionPressed>
                <h1>Projects + Ventures</h1>
                <ProjectWrapper>
                    <ProjectItem
                        title='&gt; Link Social'
                        description='A product management case study for a mock social networking tool'
                        link='https://www.notion.so/Link-Social-Product-Case-Study-a650f0b753de4fd6a15950e492fc5faf'/>
                    <ProjectItem
                        title='&gt; Mock User Stories'
                        description='Mock user stories for a small business directory'
                        link='https://drive.google.com/file/d/1tU4JzL_zTSQrqGk9qD9BBeMSllPGWcUM/view?usp=sharing'/>
                    <ProjectItem
                        title='&gt; Automated Data Entry'
                        description='A Node.js script that uses an open-source headless browser to automate browser actions'
                        github='https://github.com/dylan-authentic/data-entry-automation' />
                    <ProjectItem
                        title='&gt; My NBA Teams'
                        description='A web app that uses Next.js, TypeScript, and TailwindCSS to allow users to view NBA teams, players, and game stats'
                        link='https://my-nba-web-app.vercel.app/'
                        github='https://github.com/dylan-authentic/my-nba-web-app' />
                    <ProjectItem
                        title='&gt; Authentic Marketplace'
                        description='A web app that uses React, GraphQL, and AWS to create a shoppable e-commerce marketplace.'
                        link='https://dev.authentic.shop/'
                        github='https://github.com/authenticmarketplace/shop-cx-amplify-ui-service' />
                   <ProjectItem
                        title='&gt; Dylan-Dot-Engineering'
                        description='This website - Built using TypeScript, Next.js, and Styled Components'
                        link='https://dylan.engineering'
                        github='https://github.com/dylan-authentic/dylan-dot-cafe' />
                    <ProjectItem
                        title='&gt; Daily Push Up-Streams'
                        description='My personal daily coding practice in which I study and implement various algorithms, data structures, and other computing topics'
                        github='https://github.com/dylan-authentic/daily-push-upstreams' />
                    <ProjectItem
                        title='&gt; TypeScript-React-Demo'
                        description='A practice project that uses TypeScript and React to build an address book and contact form.'
                        github='https://github.com/dylan-authentic/typescript-react-demo' />
                    <ProjectItem
                        title='&gt; Python Data Visualization'
                        description={'A web app that utilizes Python\'s Flask + Dash libraries to create a data visualization dashboard'}
                        github='https://github.com/dylan-authentic/python-data-vis' />
                </ProjectWrapper>
                <ControllerContainer>
                    <ControllerButtonTwo onClick={handleNextClick}>Next: Insights &gt;</ControllerButtonTwo>
                    <ControllerButtonTwo style={{display: 'block', color: 'red'}} onClick={handleBackClick}>&lt; Quit</ControllerButtonTwo>
                </ControllerContainer>
            </SectionPressed>
        </Layout>
    )
}