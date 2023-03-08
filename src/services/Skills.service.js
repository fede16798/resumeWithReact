import axios from 'axios';

const getText = async (id) => {
    return await axios.get('./skillsDescription.json');
}

const getSkills = async () => {
    return await axios.get('./skillsDescription.json');
}


export {getText, getSkills};