import './Skills.css';

const SkillItem = ({ icon, technology, handleChange }) => {
    return (
        <li className="skills-ul__li"> {icon} <span className='skills-ul__p' onClick={ handleChange}>{technology}</span></li>
    )
}

export default SkillItem;