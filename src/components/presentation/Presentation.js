import './Presentation.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Typewriter from "typewriter-effect";
import { Link } from 'react-scroll';

const Presentation = () => {

  return (
    <div className="presentation-container">
      <h1 className="presentation-h1">
      <Typewriter
        onInit={(typewriter)=> {
        typewriter
        .typeString("< AMICO, FEERICOMAIN />")
        .pauseFor(300)
        .deleteChars(12)
        .typeString("DERICO MARTIN />")
        .start();
        }}
      />
     </h1>
      <p className="presentation-p">Fullstack Developer</p>
      <div className="icons-container">
          <a href="https://www.linkedin.com/in/federico-martin-amico" rel="noreferrer" target="_blank" className='icons-container__a'> 
            <LinkedInIcon sx={{fontSize: 52}} className='icons-container__icon' /> 
          </a>
          <a href="https://github.com/fede16798" rel="noreferrer" target="_blank" className='icons-container__a'> 
            <GitHubIcon sx={{fontSize: 47}} className='icons-container__icon' /> 
          </a>
      </div>
      <Link to="about-me"
          smooth={true} >
        <ArrowDropDownRoundedIcon sx={{fontSize: 70}} className='icons-container__icon arrow'/>
      </Link>
    </div>
  )
}

export default Presentation;