import Header from './Components/Header';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import AboutMe from './Components/AboutMe';
import { SiReact, SiTailwindcss, SiTypescript } from '@icons-pack/react-simple-icons';

function App() {
	return (
		<div className="max-w-screen">
			<Header />
			<AboutMe />
			<Projects
				title={'Subforuma'}
				img={''}
				language1={SiTypescript}
				language2={SiReact}
				language3={SiTailwindcss}
				readme={''}
				githubUrl={''}
			/>
			<Projects
				title={'Ethos'}
				img={''}
				language1={SiTypescript}
				language2={SiReact}
				language3={SiTailwindcss}
				readme={''}
				githubUrl={''}
			/>
			<Projects
				title={'Portfolio'}
				img={''}
				language1={SiTypescript}
				language2={SiReact}
				language3={SiTailwindcss}
				readme={''}
				githubUrl={''}
			/>
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
