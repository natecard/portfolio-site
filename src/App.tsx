import Header from './Components/Header';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import AboutMe from './Components/AboutMe';
import { SiReact, SiTailwindcss, SiTypescript } from '@icons-pack/react-simple-icons';
import Landing from './Components/Landing';
import subforuma from './img/subforuma.png';
import portfolio from './img/portfolio.png';
import { ethosReadMe, portfolioReadMe, subforumaReadMe } from './projectReadMe';
import ethos from './img/ethos.png';
import background from './img/bg-landing.png';
import foreground from './img/foreground-landing.png';
import { ParallaxBanner } from 'react-scroll-parallax';

function App() {
	return (
		<div className=" max-w-full snap-y">
			<Header />
			<div className="min-h-screen snap-y snap-center snap-always pb-36">
				<Landing />
			</div>
			<div className="-mt-48 snap-center snap-always pb-96">
				<AboutMe />
			</div>
			<div className=" snap-center snap-always pb-96">
				<div className="shadow-yellow bg-gradient-to-b from-transparent to-background pb-4 shadow-inner">
					<ParallaxBanner
						layers={[
							{ image: background, speed: -40 },
							{ image: foreground, speed: -20 },
							{
								speed: -10,
								children: (
									<div className="absolute inset-0 flex justify-center pt-44 md:pt-72">
										<h1 className="bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text pb-28 text-center text-4xl font-extrabold text-transparent md:text-7xl lg:text-8xl">
											My Projects
										</h1>
									</div>
								),
							},
						]}
						className="aspect-[3/3] shadow-inner shadow-yellow-600"
					/>
				</div>

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
			<div className=" snap-center snap-always pb-96">
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
			<div className=" mb-96 snap-center snap-always pb-96">
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
			<div className=" snap-center snap-always pb-96">
				<Contact />
			</div>
			<Footer />
		</div>
	);
}

export default App;
