

export default function AboutMe(){
	return (
		<div>
			<div className="flex justify-center pt-30 md:pt-96">
				<h1 className="bg-gradient-to-l from-blue-400 to-red-400 bg-clip-text text-5xl font-extrabold text-transparent lg:text-8xl">
					About Me
				</h1>
			</div>
			<div className=" mx-5  md:mx-20">
				<p className="mt-20 px-2 text-2xl font-extralight leading-10 subpixel-antialiased md:mx-14 lg:mx-24 lg:text-3xl">
					Hi there! My name is Nate, I am a Full Stack Developer based in Ontario, Canada. Currently
					I am studying a Master of Science in Computer Science: Artificial Intelligence and Machine
					Learning at the University of York.
					<br />
					<br />
					I am working on my thesis project which focuses on reasoning in large language models, the purpose of this 
					is to develop a small model that can perform reasoning tasks at a greater ability than current models. 
					<br />
					<br />
				</p>
			</div>
		</div>
	);
};
