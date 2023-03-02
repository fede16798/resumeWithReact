import './Projects.css';
import ProjectItem from './ProjectItem';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';

import { getProjects } from '../../services/Projects.service';

const Project = () => {

    const [projects, setProjects] =  useState([]);

    useEffect(() => {
        getProjects()
            .then( res => {
                setProjects(res.data.projects);
            })
            .catch( err => {
                console.log("there was an error: " + err);
            });
    }, [setProjects]);


    return (
        <div className="project-container">
            <p className='project-p'>Projects</p>
            
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