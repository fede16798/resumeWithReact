import './Header.css';
import { Link } from 'react-scroll';

const Header = () => {
 
    return (
        <nav className='nav'>
            <ul className='nav-ul'>
                <li className='nav-ul__li'>
                    <Link to="about-me"
                        smooth={true} >
                        About Me
                    </Link>
                </li>
                <li className='nav-ul__li'>
                    <Link to="skills"
                        smooth={true} >
                        Skills
                    </Link>
                </li>
                <li className='nav-ul__li'>
                    <Link to="projects"
                        smooth={true} >
                        My Projects
                    </Link>
                </li>
                <li className='nav-ul__li'>Contact me</li>
            </ul>
        </nav>
    )
}

export default Header;