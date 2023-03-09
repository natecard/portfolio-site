import { Parallax } from 'react-parallax';
import image from '../img/landing-bg.png';
export default function Landing() {
	return (
		<div>
			<div className="bg-gradient-to-b from-background to-transparent">
				<h1 className="mt-24 text-center text-3xl uppercase lg:mt-48">
					Hello, I am
					<br />
					<span className="animate-pulse bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-5xl font-extrabold text-transparent lg:text-8xl">
						Nathan Card
					</span>
					. <br />I am a web developer.
				</h1>
			</div>
			<div className="h-96 lg:mb-96 lg:pb-96"></div>
			<Parallax
				className="min-h-screen"
				blur={{ min: 2, max: 5 }}
				strength={-250}
				bgImage={image}
			></Parallax>
		</div>
	);
}
