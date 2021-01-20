import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout';
import { SectionPressed, ProjectWrapper, ProjectItem, ProjectItemTop, ProjectItemBottom } from '../styles/projects.styles.js';

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>My Bio | {siteTitle}</title>
            </Head>
            <SectionPressed>
                <h1>Projects</h1>
                <ProjectWrapper>
                    <ProjectItem>
                        <ProjectItemTop>
                            <h3>Automated Data Entry</h3>
                            <p>A software script that uses an open-source headless browser to automate data entry from an excel file into a web form</p>
                        </ProjectItemTop>
                        <ProjectItemBottom>
                            <a target='_blank' href="https://dylanauthentic.medium.com/how-i-created-a-51-cost-savings-for-my-client-using-simple-browser-automation-fb12052a8ae6">🔗 Link</a>
                            <a target='_blank' href="https://github.com/dylan-authentic/data-entry-automation">⌨️ Github</a>
                        </ProjectItemBottom>
                    </ProjectItem>
                    <ProjectItem>
                        <ProjectItemTop>
                            <h3>Authentic Marketplace</h3>
                            <p>A web app that uses React, GraphQL, and AWS to create a shoppable e-commerce marketplace.<br/><br/></p>
                        </ProjectItemTop>
                        <ProjectItemBottom>
                            <a target='_blank' href="https://www.authentic.shop/">🔗 Link</a>
                            <a target='_blank' href="https://github.com/authenticmarketplace/shop-cx-amplify-ui-service">⌨️ Github</a>
                        </ProjectItemBottom>
                    </ProjectItem>
                    <ProjectItem>
                        <ProjectItemTop>
                            <h3>Dylan-Dot-Cafe</h3>
                            <p>This website - Built using Next.js + Styled Components<br/><br/><br/></p>
                        </ProjectItemTop>
                        <ProjectItemBottom>
                            <a target='_blank' href="www.dylan.cafe">🔗 Link</a>
                            <a target='_blank' href="https://github.com/dylan-authentic/dylan-dot-cafe">⌨️ Github</a>
                        </ProjectItemBottom>
                    </ProjectItem>
                    <ProjectItem>
                        <ProjectItemTop>
                            <h3>Daily Push Up-Streams</h3>
                            <p>My personal daily coding practice in which I study and implement various software skills such as algorithms, data structures, etc.</p>
                        </ProjectItemTop>
                        <ProjectItemBottom>
                            <a target='_blank' href="#">🔗 (No Link Available)</a>
                            <a target='_blank' href="https://github.com/dylan-authentic/daily-push-upstreams">⌨️ Github</a>
                        </ProjectItemBottom>
                    </ProjectItem>
                    <ProjectItem>
                        <ProjectItemTop>
                            <h3>TypeScript-React-Demo</h3>
                            <p>A sample project that uses TypeScript and React to build an address book and contact form. <br/><br/></p>
                        </ProjectItemTop>
                        <ProjectItemBottom>
                            <a target='_blank' href="#">🔗 (No Link Available)</a>
                            <a target='_blank' href="https://github.com/dylan-authentic/typescript-react-demo">⌨️ Github</a>
                        </ProjectItemBottom>
                    </ProjectItem>
                    <ProjectItem>
                        <ProjectItemTop>
                            <h3>Python Data Visualization</h3>
                            <p>A web app that utilizes Python's Flask + Dash libraries to create a data visualization dashboard<br/><br/></p>
                        </ProjectItemTop>
                        <ProjectItemBottom>
                            <a target='_blank' href="#">🔗 (No Link Available)</a>
                            <a target='_blank' href="https://github.com/dylan-authentic/python-data-vis">⌨️ Github</a>
                        </ProjectItemBottom>
                    </ProjectItem>
                </ProjectWrapper>
            </SectionPressed>
        </Layout>
    )
}