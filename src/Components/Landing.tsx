/* eslint-disable react/no-unescaped-entities */
export default function Landing() {
	return (
		<div className=" flex min-h-screen items-center justify-center">
			<h1 className="text-3xl uppercase leading-loose">
				Hi, I'm
				<br />
				<span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-5xl font-extrabold text-transparent motion-safe:animate-pulse lg:text-8xl">
					Nate Card
				</span>
				<span className=" text-5xl lg:text-8xl">.</span>
				<br />
				I'm a web developer.
			</h1>
		</div>
	);
}
