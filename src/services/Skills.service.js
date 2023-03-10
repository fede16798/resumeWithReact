import axios from 'axios';

const getSkills = async (language) => {
    if (language == 'en') {
        return await axios.get('./skillsDescriptionEn.json');
    } else {
        return await axios.get('./skillsDescriptionEs.json');
    }
}


export {getSkills};