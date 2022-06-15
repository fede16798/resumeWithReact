import './Header.css';

const Header = () => {
    return (
        <nav className='nav'>
            <ul className='nav-ul'>
                <li className='nav-ul__li'>Home</li>
                <li className='nav-ul__li'>About Me</li>
                <li className='nav-ul__li'>My Projects</li>
                <li className='nav-ul__li'>Contact me</li>
            </ul>
        </nav>
    )
}

export default Header;