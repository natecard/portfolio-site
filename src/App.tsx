import Header from './Components/Header';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import AboutMe from './Components/AboutMe';
import { SiReact, SiTailwindcss, SiTypescript } from '@icons-pack/react-simple-icons';
import Landing from './Components/Landing';

function App() {
	return (
		<div className=" max-w-screen snap-y">
			<Header />
			<div className=" mb-96 snap-center snap-always pb-96">
				<Landing className="" />
			</div>
			<div className=" mb-96 snap-center snap-always pb-96">
				<AboutMe />
			</div>
			<div className=" mb-96 snap-center snap-always pb-96">
				<Projects
					title={'Subforuma'}
					img={''}
					language1={SiTypescript}
					language2={SiReact}
					language3={SiTailwindcss}
					readme={''}
					githubUrl={'https://github.com/natecard/microblog'}
				/>
			</div>
			<div className=" mb-96 snap-center snap-always pb-96">
				<Projects
					title={'Ethos'}
					img={''}
					language1={SiTypescript}
					language2={SiReact}
					language3={SiTailwindcss}
					readme={''}
					githubUrl={'https://github.com/natecard/FakeStore'}
				/>
			</div>
			<div className=" mb-96 snap-center snap-always pb-96">
				<Projects
					title={'Portfolio'}
					img={''}
					language1={SiTypescript}
					language2={SiReact}
					language3={SiTailwindcss}
					readme={''}
					githubUrl={'https://github.com/natecard/portfolio-site'}
				/>
			</div>
			<div className=" mb-96 snap-center snap-always pb-96">
				<Contact />
			</div>
			<Footer />
		</div>
	);
}

export default App;
