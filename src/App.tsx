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
				<h1 className="text-center text-6xl">My Projects</h1>
				<Projects
					title={'Subforuma'}
					img={subforuma}
					language1Icon={SiTypescript}
					language1={'TypeScript'}
					language2Icon={SiReact}
					language2={'React'}
					language3Icon={SiTailwindcss}
					language3={'TailwindCSS'}
					readme={`Features
					Toggle dark / light theme based on system theme
					Create, reply, like public posts
					PostgreSQL database and realtime functions
					Responsive design
					Google Sign In
					Sign Out
					Magic Link Sign In
					For Google Sign In, I used Supabase Auth. This allowed for a good base to pull user data and display profile pictures, display names, etc to build out the basic "tweets"
					
					The PostgreSQL database from Supabase gave me the ability to build my own SQL functions to render the replies in the timeline. By doing this I was able to sort and sequence the replies by the number of likes that each had received, simulating a sort of social media algorithm promoting more liked content to the top of the replies.`}
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
					readme={`I built an ecommerce site to utilize the recently released Shopify Mock Store API

					This was built using Vite, React, TypeScript, and CSS done using TailwindCSS.
					
					Live Site Demo
					
					It is a simple ecommerce store with landing page, store page, individual item pages/modals, and shopping cart.
					
					`}
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
					readme={``}
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
