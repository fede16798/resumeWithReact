import './Projects.css';

const ProjectItem = ({projectLink, projectImage, projectName}) => {
    return (
        <div className='projectItem-container'>
            <a href={projectLink} target="_blank" className='projectItem-a'>
                <img src={projectImage} className='projectItem-img' /> 
                <span className='projectItem-span'>{projectName}</span>
            </a>
        </div>
    )
}

export default ProjectItem;