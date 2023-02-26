import './Projects.css';
import resumeImg from '../../assets/resume-image.jpg';

const ProjectItem = ({projectLink,   projectImage}) => {
    return (
        <div className='projectItem-container'>
            <a href={projectLink} target="_blank">
                <img src={projectImage} className='projectItem-img' /> 
            </a>
        </div>
    )
}

export default ProjectItem;