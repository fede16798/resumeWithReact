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
                console.log("getSkilss")
                setSkills(res.data)
                setText(res.data[0].description)
            })
            .catch(err => {
                console.log("HUBO un error")
            })
    }, [setSkills])

    const handleClick = ({ id }) => {
        getText() 
            .then( res => {
                console.log("id " + id)
                setText(res.data[id].description);
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
                            <SkillItem
                                key={skill.id}
                                id={skill.id}
                                icon={skillsIcons[skill.id]} 
                                technology={skill.skill} 
                                handleClick={handleClick}
                            />
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
