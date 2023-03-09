import Header from './Components/Header';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import AboutMe from './Components/AboutMe';
import { SiReact, SiTailwindcss, SiTypescript } from '@icons-pack/react-simple-icons';
import Landing from './Components/Landing';
import subforuma from './img/subforuma.png';
import ethos from './img/ethos.png';

function App() {
	return (
		<div className=" max-w-full snap-y">
			<Header />
			<div className="snap-y snap-center snap-always">
				<Landing />
			</div>
			<div className="-mt-48 snap-center snap-always pb-96">
				<AboutMe />
			</div>
			<div className=" snap-center snap-always pb-96">
				<Projects
					title={'Subforuma'}
					img={subforuma}
					language1Icon={SiTypescript}
					language1={'TypeScript'}
					language2Icon={SiReact}
					language2={'React'}
					language3Icon={SiTailwindcss}
					language3={'TailwindCSS'}
					readme={''}
					githubUrl={'https://github.com/natecard/microblog'}
					liveDemo={''}
				/>
			</div>
			<div className=" mb-96 snap-center snap-always pb-96">
				<Projects
					title={'Ethos'}
					img={ethos}
					language1Icon={SiTypescript}
					language1={'TypeScript'}
					language2Icon={SiReact}
					language2={'React'}
					language3Icon={SiTailwindcss}
					language3={'TailwindCSS'}
					readme={''}
					githubUrl={'https://github.com/natecard/FakeStore'}
					liveDemo={''}
				/>
			</div>
			<div className=" mb-96 snap-center snap-always pb-96">
				<Projects
					title={'Portfolio'}
					img={''}
					language1Icon={SiTypescript}
					language1={'TypeScript'}
					language2Icon={SiReact}
					language2={'React'}
					language3Icon={SiTailwindcss}
					language3={'TailwindCSS'}
					readme={''}
					githubUrl={'https://github.com/natecard/portfolio-site'}
					liveDemo={''}
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
