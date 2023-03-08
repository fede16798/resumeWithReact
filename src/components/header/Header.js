import './Header.css';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Header = () => {
    
    const [t,i18n] = useTranslation('header');

    return (
        <div className='header-container'>
            <section className='header-section'>
                <button className='header-section__button' onClick={() => i18n.changeLanguage("en")}>EN</button>
                <button className='header-section__button' onClick={() => i18n.changeLanguage("es")}>ES</button>
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
                    <li className='nav-ul__li'>{t('header.contact')}</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;