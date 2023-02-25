import './Projects.css';
import resumeImg from '../../assets/resume-image.jpg';


const ProjectItem = () => {
    return (
        <div className='projectItem-container'>
            <img src={resumeImg} className='projectItem-img' />
        </div>
    )
}

export default ProjectItem;