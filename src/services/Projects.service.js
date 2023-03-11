import axios from 'axios';

const getProjects = async (language) => {
    if (language == 'en') {
        return await axios.get('./projectsEnsss.json');
    } else {
        return await axios.get('./projectsEssss.json');
    }
}

export {getProjects};