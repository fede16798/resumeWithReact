import axios from 'axios';

const getProjects = async (language) => {
    return (language == "en") ? await axios.get('./projectsEnsss.json'): await axios.get('./projectsEs.json');
}

export {getProjects};