import { ParallaxBanner } from 'react-scroll-parallax';
import background from '@/public/img/bg-landing.png';
import foreground from '@/public/img/foreground-landing.png';

export default function AboutMe() {
	return (
		<div>
			{typeof window !== 'undefined' && window.innerWidth < 805 ? (
				<ParallaxBanner
					layers={[
						{ image: background.src, speed: -40 },
						{
							speed: -50,
							children: (
								<div className="absolute inset-0 flex justify-center pt-80 md:pt-96">
									<h1 className="bg-gradient-to-l from-blue-400 to-red-400 bg-clip-text text-5xl font-extrabold text-transparent lg:text-8xl">
										About Me
									</h1>
								</div>
							),
						},
						{ image: foreground.src, speed: -25 },
					]}
					className=" aspect-[5/2]"
				/>
			) : (
				<ParallaxBanner
					layers={[
						{ image: background.src, speed: -40 },
						{
							speed: -45,
							easing: 'easeOutQuad',
							children: (
								<div className="absolute inset-0 flex justify-center pt-80">
									<h1 className="bg-gradient-to-l from-blue-400 to-red-400 bg-clip-text text-6xl font-extrabold text-transparent lg:text-8xl">
										About Me
									</h1>
								</div>
							),
						},
						{ image: foreground.src, speed: -15, easing: 'easeOutCirc' },
					]}
					className=" aspect-[5/3]"
				/>
			)}
			<div className=" mx-5  md:mx-20">
				<p className="mt-20 px-2 text-2xl font-extralight leading-10 subpixel-antialiased md:mx-14 lg:mx-24 lg:text-3xl">
					Hi there! My name is Nate, I am a Full Stack Developer based in Ontario, Canada. Currently
					I am studying a Master of Science in Computer Science: Artificial Intelligence and Machine
					Learning at the University of York.
					<br />
					<br />
					My journey began learning Web Development through The Odin Project. I learned the basic
					skills for Web Development like JavaScript, HTML, CSS, and Node.js. This opened my eyes to
					the world of software development as a whole. I then decided to pursue a Master&rsquo;s
					degree in Computer Science to expand on my knowledge, especially in the Machine Learning
					and AI field.
					<br />
					<br />
					Now my focus is on learning and developing my skills with Python, PyTorch, TensorFlow and
					other ML related frameworks. I am currently focusing on GNNs and Computer Vision, but I am
					eager to learn more about other fields in AI and ML.
					<br />
					<br />
				</p>
			</div>
		</div>
	);
}
