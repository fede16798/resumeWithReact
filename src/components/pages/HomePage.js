import Header from '../header/Header.js';
import Presentation from '../presentation/Presentation.js';
import AboutMe from '../aboutMe/AboutMe.js';
import Skills from '../skills/Skills.js';
import Projects from '../projects/Project.js';
import Footer from '../footer/Footer.js';

const HomePage = () => {
	return (
		<>
			<Header />
			<Presentation />
			<AboutMe />
			<Skills />
			<Projects />
			<Footer />
		</>
	)
}
export default HomePage;