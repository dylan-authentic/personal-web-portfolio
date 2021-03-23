import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout';
import { SectionPressed, ProjectWrapper } from '../styles/projects.styles';
import ProjectItem from '../components/projectItem';

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>Projects | {siteTitle}</title>
            </Head>
            <SectionPressed>
                <h1>Projects</h1>
                <ProjectWrapper>
                    <ProjectItem
                        title='Link Social'
                        description='A product management case study for a mock social networking tool'
                        link='https://www.notion.so/Link-Social-Product-Case-Study-a650f0b753de4fd6a15950e492fc5faf'/>
                    <ProjectItem
                        title='Mock User Stories'
                        description='Mock user stories for a small business directory product'
                        link='https://drive.google.com/file/d/1tU4JzL_zTSQrqGk9qD9BBeMSllPGWcUM/view?usp=sharing'/>
                    <ProjectItem
                        title='Automated Data Entry'
                        description='A Node.js script that uses an open-source headless browser to automate data entry from an excel file into a web form'
                        link='https://dylanauthentic.medium.com/how-i-created-a-51-cost-savings-for-my-client-using-simple-browser-automation-fb12052a8ae6'
                        github='https://github.com/dylan-authentic/data-entry-automation' />
                    <ProjectItem
                        title='My NBA Teams'
                        description='A web app that uses Next.js, TypeScript, and TailwindCSS that allows a user to view NBA teams, players, and game stats'
                        link='https://my-nba-web-app.vercel.app/'
                        github='https://github.com/dylan-authentic/my-nba-web-app' />
                    <ProjectItem
                        title='Authentic Marketplace'
                        description='A web app that uses React, GraphQL, and AWS to create a shoppable e-commerce marketplace.'
                        link='https://dev.authentic.shop/'
                        github='https://github.com/authenticmarketplace/shop-cx-amplify-ui-service' />
                   <ProjectItem
                        title='Dylan-Dot-Cafe'
                        description='This website - Built using TypeScript, Next.js, and Styled Components'
                        link='https://dylan.cafe'
                        github='https://github.com/dylan-authentic/dylan-dot-cafe' />
                    <ProjectItem
                        title='Daily Push Up-Streams'
                        description='My personal daily coding practice in which I study and implement various software skills such as algorithms, data structures, etc.'
                        github='https://github.com/dylan-authentic/daily-push-upstreams' />
                    <ProjectItem
                        title='TypeScript-React-Demo'
                        description='A sample project that uses TypeScript and React to build an address book and contact form.'
                        github='https://github.com/dylan-authentic/typescript-react-demo' />
                    <ProjectItem
                        title='Python Data Visualization'
                        description={'A web app that utilizes Python\'s Flask + Dash libraries to create a data visualization dashboard'}
                        github='https://github.com/dylan-authentic/python-data-vis' />
                </ProjectWrapper>
            </SectionPressed>
        </Layout>
    )
}