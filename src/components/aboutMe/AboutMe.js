import './AboutMe.css';
import resumeImg from '../../assets/resume-image.jpg';

const AboutMe = () => {
  let aboutMeEnglish = "I am Federico, from Argentina. I have been working in the IT area since 2020, doing different things such as investigating, for example, what was the best Automation Test Application to implement in our job or why Jenkins should be implemented, also developing functionalities in my project.\nI consider myself a very proactive person who is always trying to improve his skills and overcome all difficulties. I believe I am an autodidact person because most of the knowledge that I have, I got them studying on my own. This is evidenced by my proficiency in English, which I learned through immersive study in Ireland.\nI studied at the ORT institute and I am continually acquiring new abilities doing courses such as Python programming or Cloud DevOps (a course where I learned how to work with AWS or Azure), besides taking the opportunity to do the courses that my job gave as development unit tests in Java with JUnit.\nMy ultimate goal is to work in a dynamic and innovative environment where I can apply my skills and knowledge to contribute to exciting projects.  Moreover, I value a healthy work-life balance and the flexibility to work remotely, while always ensuring I meet my job responsibilities and deliverables, always trying to add value to the final job.\nAlso, I have European citizenship. Do not hesitate to contact me if you are interested, your email or message is not a nuisance.";

  return (
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
          <p className='button-section__contact'><span className='button-section__span'>Contact me</span></p>
        </section>
      </div>
    </div>
  )
}

export default AboutMe;