import './Projects.css';
import ProjectItem from './ProjectItem';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';

import { getProjects } from '../../services/Projects.service';
import { useTranslation } from 'react-i18next';


const Project = () => {
    const [t,i18n] = useTranslation(['error', 'project']);
    const [projects, setProjects] =  useState([]);

    useEffect(() => {
        getProjects(i18n.language)
            .then( res => {
                setProjects(res.data.projects);
            })
            .catch( err => {
                console.log(t('project:project.title'))
                console.log(t('error:error.api-request-error') + err);
            });
    }, [setProjects, i18n.language]);


    return (
        <div className="project-container" id="projects">
            <p className='project-p'>{t('project:project.title')}</p>
            
                <Swiper
                    slidesPerView={5}
                    spaceBetween={0}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className='project-mySwiper'
                >	
                {
                    projects.map((project) => {
                        return(
                            <SwiperSlide key={project.id}> 
                                <ProjectItem 
                                    className="project-projectItem" 
                                    projectLink = {project.link}
                                    projectImage = {project.image}
                                    projectName = {project.name}
                                /> 
                            </SwiperSlide>
                        )
                    })
                }
                </Swiper>
        </div>
           

    )
}

export default Project;