import './Projects.css';
import ProjectItem from './ProjectItem';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';

import { getProjects } from '../../services/Projects.service';
import { useTranslation } from 'react-i18next';
import swal from 'sweetalert';

const Project = () => {
    const [t,i18n] = useTranslation(['error', 'project']);
    const [projects, setProjects] =  useState([]);
    const [verticalDirection, setVerticalDirection] = useState("vertical");

    useEffect(() => {
        getProjects(i18n.language)
            .then( res => {
                setProjects(res.data.projects);
            })
            .catch( err => {
                let info = (i18n.language === 'en' ? 'projects' : 'proyectos');
                swal(t('error.title'), t('error.api-request-error', {data: info}), "error");
            });
    }, [setProjects, i18n.language]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 501) {
                setVerticalDirection('vertical');
            } else {
                setVerticalDirection('horizontal');
            }
        };
        handleResize(); 

        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    const swiperParams = {
        slidesPerView: 5,
        spaceBetween: 0,
        direction: verticalDirection,
        pagination: {
            clickable: true,
        },
        modules: [Pagination]
    }

    return (
        <div className="project-container" id="projects">
            <p className='project-p'>{t('project:project.title')}</p>
            

                <Swiper {...swiperParams} className='project-mySwiper' >	
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