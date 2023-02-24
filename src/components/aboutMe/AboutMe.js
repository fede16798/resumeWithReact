import './AboutMe.css';
import resumeImg from '../../assets/resume-image.jpg';

const AboutMe = () => {
  return (
    <div className='about-section'>
      <section className='img-container'>
        <img src={resumeImg} alt='resume'/>
      </section>
      <div className='about-container'>
        <h3 className='about-container__h3'>About Me</h3>
        <p className='about-container__p'>
          Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adi Lorem Lorem ipsum dolor sit amet, consectetur
          Lorem ipsum dolor sit amet, consecteloLorem
          tur adip Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur
          Lorem ipsum dolor sit amet, consect 
        </p>
        <section className='button-section'>
          <p className='button-section__download'><span className='button-section__span'>Download CV</span></p>
          <p className='button-section__contact'><span className='button-section__span'>Contact me</span></p>
        </section>
      </div>
    </div>
  )
}

export default AboutMe;