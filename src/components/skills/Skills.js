import './Skills.css';
import SkillItem from './SkillItem';
import { useState, useEffect } from 'react';

import { FaReact, FaDocker, FaJava, FaPython } from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import { getSkills } from '../../services/Skills.service.js';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { i18n } = useTranslation();

    let skillsIcons = [<FaReact />, <DiJavascript1 />, <FaJava />, <SiSpringboot />, <FaPython />, <FaDocker />, <SiMysql />]
    
    const [skills, setSkills] = useState([]);
    const [text, setText] = useState("");
    const [skillId, setSkillId] = useState(0);

    useEffect(() => {
        getSkills(i18next.language)
            .then(res => {
                setSkills(res.data);
                setText(res.data[0].description);
            })
            .catch(err => {
                console.log("HUBO un error");
            })
    }, [setSkills]);

    useEffect(() => {
        callGetSkillsAndSetId(skillId);
    }, [i18n.language])

    const handleClick = ({ id }) => {
        setSkillId(id);
        callGetSkillsAndSetId(id);
    }

    const callGetSkillsAndSetId = (id) => {
        getSkills(i18next.language)
        .then( res => {
            setText(res.data[id].description);
        })
        .catch ( err => {
            console.log("HUBO UN ERROR");
        })
    }

    return (
        <div className="skills-container" id="skills">
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
                <p className='skills-section__p'>
                    {text.split('\n').map((line, index) => (
                        <p key={index}>
                            {line}
                            <br />
                        </p>
                        ))}
                </p>
            </section>
        </ div>
    )
}
export default Skills;
