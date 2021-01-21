import { ProjectItemWrapper, ProjectItemTop, ProjectItemBottom } from './styles';

interface ProjectItemProps {
    title: string
    description: string
    link?: string
    github: string
}

export default function ProjectItem(props: ProjectItemProps) {
    return (
        <ProjectItemWrapper>
            <ProjectItemTop>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </ProjectItemTop>
            <ProjectItemBottom>
                {props.link ? <a target='_blank' href={props.link}>🔗 Link</a> : <a target='_blank' href='#'>🔗 (No Link Available)</a>}
                <a target='_blank' href={props.github}>⌨️ Github</a>
            </ProjectItemBottom>
        </ProjectItemWrapper>
    )
}