import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../modal/Modal.js';
import './AboutMe.css';
import resumeImg from '../../assets/resume-image.jpg';
import { useTranslation } from 'react-i18next';
import swal from 'sweetalert';

const AboutMe = () => {
  const [t,i18n] = useTranslation('aboutMe');

  const [showModal, setShowModal] = useState(false);
  const { register, formState: {errors}, setValue, handleSubmit } = useForm();

  const onSubmit = ( data ) => {
    console.log(data);
    confirmEmail();
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

  const confirmEmail = () => {
    swal({
      title: "Send Email",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Congrats", "Your email was sent","success");
        cleanForm();
      }
    });
  }

  return (
    <>
    <div className='about-section' id="about-me">
      <section className='img-container'>
        <img src={resumeImg} alt='resume'/>
      </section>
      <div className='about-container'>
        <h3 className='about-container__h3'>{t('about-me.title')}</h3>
        <p className='about-container__p'>
          {t('about-me.description').split('\n').map((line, index) => (
            <p key={index}>
              {line}
              <br />
            </p>
          ))}
        </p>
        <section className='button-section'>
          <p className='button-section__download'>
            <span className='button-section__span'>
              <a href="./Amico,Federico-Resume.pdf" target="_blank" className='button-section__a'>{t('about-me.watch-resume')} </a>
            </span>
          </p>
          <p className='button-section__contact' onClick={handleClick}>
            <span className='button-section__span'>{t('about-me.contact')}</span>
          </p>
        </section>
      </div>
    </div>

    <Modal
      title={t('modal.title')}
      showModal={showModal}
      cleanForm={() => cleanForm()}
      className='modal-form'
    >
      <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
        <section className='form-section'>
          <label className='form-section__label'>{t('modal.name')}</label>
          <input className='form-section__input' type="text" {...register('name', {
              required: true,
              minLength: 3,
              maxLength: 50
            })}>

          </input>
        </section>

        {errors.name?.type === 'required' && <p className='form-error'>{t('modal.error-required')}</p>}
        {(errors.name?.type === 'maxLength' || errors.name?.type === 'minLength' )&& <p className='form-error'>{t('modal.invalid-lenght', {field: 'name', minimun: '3', maximun: '50'})}</p>}
        
        <section className='form-section'>
          <label className='form-section__label'>{t('modal.email')}</label>
          <input className='form-section__input' type="email" {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              minLength: 10,
              maxLength: 60
            })}>

          </input>
        </section>

        {errors.email?.type === 'required' && <p className='form-error'>{t('modal.error-required')}</p>}
        {errors.email?.type === 'pattern' && <p className='form-error'>{t('modal.invalid-format')}</p>}
        {(errors.email?.type === 'maxLength' || errors.name?.type === 'minLength' )&& <p className='form-error'>{t('modal.invalid-lenght', {field: 'email', minimun: '10', maximun: '60'})}</p>}

        <section className='form-section'>
          <label className='form-section__label'>{t('modal.subject')}</label>
          <input className='form-section__input' type="text" {...register('subject', {
              required: true,
              minLength: 10
            })}>
          </input>
        </section>

        {errors.subject?.type === 'required' && <p className='form-error'>{t('modal.error-required')}</p>}
        {errors.subject?.type === 'minLength' && <p className='form-error'>{t('modal.invalid-minimun-lenght', {field: 'email', minimun: '10'})}</p>}

        <section className='form-section'>
          <label className='form-section__label'>{t('modal.message')}</label>
          <textarea className='form-section__input form-section__textarea' type="message" {...register('message', {
              required: true,
              minLength: 15
            })}>
          </textarea>
        </section>

        {errors.message?.type === 'required' && <p className='form-error'>{t('modal.error-required')}</p>}
        {errors.message?.type === 'minLength' && <p className='form-error'>{t('modal.invalid-minimun-lenght', {field: 'email', minimun: '15'})}</p>}

        <button type="submit" className='form-button'>{t('modal.send-email')}</button>
      </form>
    
    </Modal>

    </>
  )
}

export default AboutMe;