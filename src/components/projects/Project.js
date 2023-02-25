import './Projects.css';
import ProjectItem from './ProjectItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';

const Project = () => {
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
                    <SwiperSlide> <ProjectItem className="project-projectItem" /> </SwiperSlide>
                    <SwiperSlide> <ProjectItem className="project-projectItem" /> </SwiperSlide>
                    <SwiperSlide> <ProjectItem className="project-projectItem" /> </SwiperSlide>
                    <SwiperSlide> <ProjectItem className="project-projectItem" /> </SwiperSlide>
                    <SwiperSlide> <ProjectItem className="project-projectItem" /> </SwiperSlide>

                </Swiper>
        </div>
           

    )
}

export default Project;