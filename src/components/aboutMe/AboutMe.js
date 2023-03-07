import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../modal/Modal.js';
import './AboutMe.css';
import resumeImg from '../../assets/resume-image.jpg';

const AboutMe = () => {
  let aboutMeEnglish = "I am Federico, from Argentina. I have been working in the IT area since 2020, doing different things such as investigating, for example, what was the best Automation Test Application to implement in our job or why Jenkins should be implemented, also developing functionalities in my project.\nI consider myself a very proactive person who is always trying to improve his skills and overcome all difficulties. I believe I am an autodidact person because most of the knowledge that I have, I got them studying on my own. This is evidenced by my proficiency in English, which I learned through immersive study in Ireland.\nI studied at the ORT institute and I am continually acquiring new abilities doing courses such as Python programming or Cloud DevOps (a course where I learned how to work with AWS or Azure), besides taking the opportunity to do the courses that my job gave as development unit tests in Java with JUnit.\nMy ultimate goal is to work in a dynamic and innovative environment where I can apply my skills and knowledge to contribute to exciting projects.  Moreover, I value a healthy work-life balance and the flexibility to work remotely, while always ensuring I meet my job responsibilities and deliverables, always trying to add value to the final job.\nAlso, I have European citizenship. Do not hesitate to contact me if you are interested, your email or message is not a nuisance.";
  const requiredError = 'The field is required';


  const [showModal, setShowModal] = useState(true);
  const { register, formState: {errors}, handleSubmit } = useForm();

  const onSubmit = ( data ) => {
    console.log(data);
  }

  const handleClick = () => {
    setShowModal(true);
  }

  return (
    <>
    <div className='about-section'>
      <section className='img-container'>
        <img src={resumeImg} alt='resume'/>
      </section>
      <div className='about-container'>
        <h3 className='about-container__h3'>About Me</h3>
        <p className='about-container__p'>
          {aboutMeEnglish.split('\n').map((line, index) => (
            <p key={index}>
              {line}
              <br />
            </p>
          ))}
        </p>
        <section className='button-section'>
          <p className='button-section__download'>
            <span className='button-section__span'>
              <a href="./Amico,Federico-Resume.pdf" target="_blank" className='button-section__a'> Watch Resume </a>
            </span>
          </p>
          <p className='button-section__contact' onClick={handleClick}>
            <span className='button-section__span'>Contact me</span>
          </p>
        </section>
      </div>
    </div>

    <Modal
      title="Contact me!"
      showModal={showModal}
      setShowModal={() => setShowModal()}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label>Nombre</label>
          <input type="text" {...register('name', {
            required: true,
            minLength: 3,
            maxLength: 50
          })}></input>

          {errors.name?.type === 'required' && <p>{requiredError}</p>}
          {(errors.name?.type === 'maxLength' || errors.name?.type === 'minLength' )&& <p>The length of the name field lenght must between 3 and 50</p>}
        
        </section>
        <section>
          <label>Email</label>
          <input type="email" {...register('email', {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            minLength: 10,
            maxLength: 60
          })}></input>

          {errors.email?.type === 'required' && <p>{requiredError}</p>}
          {errors.email?.type === 'pattern' && <p>The email format is not valid</p>}
          {(errors.email?.type === 'maxLength' || errors.name?.type === 'minLength' )&& <p>The length of the email field lenght must between 10 and 60</p>}

        </section>
        <section>
          <label>Subject</label>
          <input type="text" {...register('subject', {
            required: true,
            minLength: 10
          })}></input>

          {errors.subject?.type === 'required' && <p>{requiredError}</p>}
          {errors.subject?.type === 'minLength' && <p>The length of the subject field lenght must be 10 or more</p>}

        </section>
        <section>
          <label>Message</label>
          <input type="message" {...register('message', {
            required: true,
            minLength: 15,
            message: 'This field is required and the lenght must be 10 or more'
          })}></input>

          {errors.message?.type === 'required' && <p>{requiredError}</p>}
          {errors.message?.type === 'minLength' && <p>The length of the subject field lenght must be 15 or more</p>}

        </section>
        <button type="submit"> Send Email! </button>
      </form>
    
    </Modal>

    </>
  )
}

export default AboutMe;