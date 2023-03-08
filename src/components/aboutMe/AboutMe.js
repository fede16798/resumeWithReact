import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../modal/Modal.js';
import './AboutMe.css';
import resumeImg from '../../assets/resume-image.jpg';

const AboutMe = () => {
  let aboutMeEnglish = "I am Federico, from Argentina. I have been working in the IT area since 2020, doing different things such as investigating, for example, what was the best Automation Test Application to implement in our job or why Jenkins should be implemented, also developing functionalities in my project.\nI consider myself a very proactive person who is always trying to improve his skills and overcome all difficulties. I believe I am an autodidact person because most of the knowledge that I have, I got them studying on my own. This is evidenced by my proficiency in English, which I learned through immersive study in Ireland.\nI studied at the ORT institute and I am continually acquiring new abilities doing courses such as Python programming or Cloud DevOps (a course where I learned how to work with AWS or Azure), besides taking the opportunity to do the courses that my job gave as development unit tests in Java with JUnit.\nMy ultimate goal is to work in a dynamic and innovative environment where I can apply my skills and knowledge to contribute to exciting projects.  Moreover, I value a healthy work-life balance and the flexibility to work remotely, while always ensuring I meet my job responsibilities and deliverables, always trying to add value to the final job.\nAlso, I have European citizenship. Do not hesitate to contact me if you are interested, your email or message is not a nuisance.";
  const requiredError = 'The field is required';


  const [showModal, setShowModal] = useState(false);
  const { register, formState: {errors}, setValue, handleSubmit } = useForm();

  const onSubmit = ( data ) => {
    console.log(data);  
    cleanForm();
  }

  const handleClick = () => {
    setShowModal(true);
  }

  const cleanForm = () => {
    setShowModal(false);
    setValue('name', '');
    setValue('email', '');
    setValue('subject', '');
    setValue('message', '');
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
      cleanForm={() => cleanForm()}
      className='modal-form'
    >
      <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
        <section className='form-section'>
          <label className='form-section__label'>Nombre</label>
          <input className='form-section__input' type="text" {...register('name', {
              required: true,
              minLength: 3,
              maxLength: 50
            })}>

          </input>
        </section>

        {errors.name?.type === 'required' && <p className='form-error'>{requiredError}</p>}
        {(errors.name?.type === 'maxLength' || errors.name?.type === 'minLength' )&& <p className='form-error'>The length of the name field must between 3 and 50</p>}
        
        <section className='form-section'>
          <label className='form-section__label'>Email</label>
          <input className='form-section__input' type="email" {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              minLength: 10,
              maxLength: 60
            })}>

          </input>
        </section>

        {errors.email?.type === 'required' && <p className='form-error'>{requiredError}</p>}
        {errors.email?.type === 'pattern' && <p className='form-error'>The email format is not valid</p>}
        {(errors.email?.type === 'maxLength' || errors.name?.type === 'minLength' )&& <p className='form-error'>The length of the email field must between 10 and 60</p>}

        <section className='form-section'>
          <label className='form-section__label'>Subject</label>
          <input className='form-section__input' type="text" {...register('subject', {
              required: true,
              minLength: 10
            })}>
          </input>
        </section>

        {errors.subject?.type === 'required' && <p className='form-error'>{requiredError}</p>}
        {errors.subject?.type === 'minLength' && <p className='form-error'>The length of the subject field must be 10 or more</p>}

        <section className='form-section'>
          <label className='form-section__label'>Message</label>
          <textarea className='form-section__input form-section__textarea' type="message" {...register('message', {
              required: true,
              minLength: 15
            })}>
          </textarea>
        </section>

        {errors.message?.type === 'required' && <p className='form-error'>{requiredError}</p>}
        {errors.message?.type === 'minLength' && <p className='form-error'>The length of the subject field must be 15 or more</p>}

        <button type="submit" className='form-button'> Send Email! </button>
      </form>
    
    </Modal>

    </>
  )
}

export default AboutMe;