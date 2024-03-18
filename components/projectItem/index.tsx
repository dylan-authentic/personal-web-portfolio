import { ProjectItemWrapper, ProjectItemTop, ProjectItemBottom } from './styles';

interface ProjectItemProps {
    title: string
    description: string
    link?: string
    github?: string
}

export default function ProjectItem(props: ProjectItemProps) {
    return (
        <ProjectItemWrapper>
            <ProjectItemTop>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </ProjectItemTop>
            <ProjectItemBottom>
                {props.link ? <a target='_blank' href={props.link}>🔗 View Project</a> : <></>}
                {props.github ? <a target='_blank' href={props.github}>⌨️ View Github</a> : ''}
            </ProjectItemBottom>
        </ProjectItemWrapper>
    )
}