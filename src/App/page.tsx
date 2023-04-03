import { lazy, Suspense } from 'react';
import Header from './components/Header';
const Contact = lazy(() => import('./components/Contact'));
const Projects = lazy(() => import('./components/Projects'));
const Footer = lazy(() => import('./components/Footer'));
const AboutMe = lazy(() => import('./components/AboutMe'));
import { SiReact, SiTailwindcss, SiTypescript } from '@icons-pack/react-simple-icons';
import Landing from './components/Landing';
import subforuma from '@/img/subforuma.png';
import portfolio from '@/img/portfolio.png';
import { ethosReadMe, portfolioReadMe, subforumaReadMe } from '../projectReadMe';
import ethos from '@/img/ethos.png';
import Skills from './components/Skills';

function App() {
	return (
		<div className=" max-w-full snap-y">
			<Header />
			<div className="min-h-screen snap-y snap-center snap-always pb-36">
				<Landing />
			</div>
			<Suspense>
				<div className="my-48 snap-center snap-always">
					<AboutMe />
				</div>
				<div className="my-48 snap-center snap-always">
					<Skills />
				</div>
				<div className="snap-center snap-always py-24">
					<h2 className="pb-8 text-center text-6xl font-semibold">Projects</h2>

					<Projects
						title={'Subforuma'}
						img={subforuma}
						language1Icon={SiTypescript}
						language1={'TypeScript'}
						language2Icon={SiReact}
						language2={'ReactJS'}
						language3Icon={SiTailwindcss}
						language3={'Tailwind'}
						readme={subforumaReadMe}
						githubUrl={'https://github.com/natecard/microblog'}
						liveDemo={'https://microblog-lzyn1xfyg-natecard.vercel.app/'}
					/>
				</div>
				<div className="snap-center snap-always py-24">
					<Projects
						title={'Ethos'}
						img={ethos}
						language1Icon={SiTypescript}
						language1={'TypeScript'}
						language2Icon={SiReact}
						language2={'ReactJS'}
						language3Icon={SiTailwindcss}
						language3={'Tailwind'}
						readme={ethosReadMe}
						githubUrl={'https://github.com/natecard/FakeStore'}
						liveDemo={'https://natecard.github.io/FakeStore/'}
					/>
				</div>
				<div className="snap-center snap-always py-24">
					<Projects
						title={'Portfolio'}
						img={portfolio}
						language1Icon={SiTypescript}
						language1={'TypeScript'}
						language2Icon={SiReact}
						language2={'ReactJS'}
						language3Icon={SiTailwindcss}
						language3={'Tailwind'}
						readme={portfolioReadMe}
						githubUrl={'https://github.com/natecard/portfolio-site'}
						liveDemo={'https://portfolio-site-natecard.vercel.app/'}
					/>
				</div>
				<div className=" snap-center snap-always pb-48">
					<Contact />
				</div>
				<Footer />
			</Suspense>
		</div>
	);
}

export default App;
