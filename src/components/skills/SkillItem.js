import './Skills.css';

const SkillItem = ({ id, icon, technology, handleClick }) => {
    return (
        <li className="skills-ul__li"> {icon} <span className='skills-ul__p' onClick={() => handleClick({ id: id })}>{technology}</span></li>
    )
}

export default SkillItem;