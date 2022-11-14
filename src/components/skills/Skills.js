import './Skills.css';
import { FaReact, FaDocker, FaJava, FaPython } from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di'


const Skills = () => {
    return (
        <div className="skills-section">
            <ul className="skills-ul">
                <li className="skills-ul__li"> <FaReact /> React</li>
                <li className="skills-ul__li"> <DiJavascript1 /> Javascript</li>
                <li className="skills-ul__li"> <FaJava /> Java</li>
                <li className="skills-ul__li"> <SiSpringboot /> Spring boot</li>
                <li className="skills-ul__li"> <FaPython /> Python</li>
                <li className="skills-ul__li"> <FaDocker /> Docker</li>
                <li className="skills-ul__li"> <SiMysql /> SQL</li>
            </ul>
        </ div>
    )
}

export default Skills;