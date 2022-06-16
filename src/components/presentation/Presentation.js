import './Presentation.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
const Presentation = () => {
  return (
    <div className="presentation-container">
      <h1 className="presentation-h1">&lt; AMICO, FEDERICO MARTIN /&gt;</h1>
      <p className="presentation-p">Web and Backend Developer</p>
      <div className="icons-container">
          <a href="https://www.linkedin.com/in/federico-martin-amico" rel="noreferrer" target="_blank" className='icons-container__a'> 
            <LinkedInIcon sx={{fontSize: 52}} className='icons-container__icon' /> 
          </a>
          <a href="https://github.com/fede16798" rel="noreferrer" target="_blank" className='icons-container__a'> 
            <GitHubIcon sx={{fontSize: 47}} className='icons-container__icon' /> 
          </a>
      </div>
      <ArrowDropDownRoundedIcon sx={{fontSize: 70}} className='icons-container__icon arrow'/>
    </div>
  )
}

export default Presentation;