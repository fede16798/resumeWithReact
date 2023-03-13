import './Header.css';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import ES_IMG from '../../assets/spain.png';
import EN_IMG from '../../assets/united-kingdom.png';


const Header = () => {
    
    const [t,i18n] = useTranslation('header');

    return (
        <div className='header-container'>
            <section className='header-section'>
                <button className='header-section__button'><img src={EN_IMG} className='header-section__img'  onClick={() => i18n.changeLanguage("en")}/></button>
                <button className='header-section__button'><img src={ES_IMG} className='header-section__img' onClick={() => i18n.changeLanguage("es")}/></button>
            </section>

            <nav className='nav'>
                <ul className='nav-ul'>
                    <li className='nav-ul__li'>
                        <Link to="about-me"
                            smooth={true} >
                            {t('header.about-me')}
                        </Link>
                    </li>
                    <li className='nav-ul__li'>
                        <Link to="skills"
                            smooth={true} >
                            {t('header.skills')}
                        </Link>
                    </li>
                    <li className='nav-ul__li'>
                        <Link to="projects"
                            smooth={true} >
                            {t('header.my-projects')}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;