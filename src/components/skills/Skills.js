import './Skills.css';
import SkillItem from './SkillItem';
import { useState, useEffect } from 'react';

import { FaReact, FaDocker, FaJava, FaPython } from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import { getText, getSkills } from '../../services/Skills.service.js';

const Skills = () => {

    let skillsIcons = [<FaReact />, <DiJavascript1 />, <FaJava />, <SiSpringboot />, <FaPython />, <FaDocker />, <SiMysql />]
    
    const [skills, setSkills] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        getSkills()
            .then(res => {
                setSkills(res.data)
                setText(res.data.ski)
            })
            .catch(err => {
                console.log("HUBO un error")
            })
    }, [setSkills])

    const handleChange = ({ }) => {
        getText() 
            .then( res => {
                console.log(res);
                setText(res.data.skill);
                console.log(res.data.id)
            })
            .catch ( err => {
                console.log("HUBO N  ERROR")
            })
    }

    return (
        <div className="skills-container">
            <ul className="skills-ul">
                {
                    skills.map((skill) => {
                        return (
                            <SkillItem icon={skillsIcons[skill.id]} technology={skill.skill} handleChange={handleChange}/>
                        )
                    })
                }
            </ul>
            <section className='skills-section'>
                <p className='skills-section__p'> {text} </p>
            </section>
        </ div>
    )
}

export default Skills;
