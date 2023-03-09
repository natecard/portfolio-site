export default function Landing() {
	return (
		<div className="absolute inset-0 flex min-h-screen items-center justify-center">
			<h1 className="text-3xl uppercase">
				Hello, I am
				<br />
				<span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-5xl font-extrabold text-transparent motion-safe:animate-pulse lg:text-8xl">
					Nathan Card
				</span>
				<span className="text-5xl lg:text-8xl">.</span>
				<br />I am a web developer.
			</h1>
		</div>
	);
}
