import axios from 'axios';

const getProjects = async (language) => {
    if (language == 'en') {
        return await axios.get('./projectsEn.json');
    } else {
        return await axios.get('./projectsEs.json');
    }
}

export {getProjects};