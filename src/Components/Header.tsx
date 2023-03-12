export default function Header() {
	function downloadResume() {
		fetch('../../Nathan Card - Software Engineer.pdf')
			.then((response) => response.blob())
			.then((blob) => {
				console.log('Downloading...');
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.href = url;
				a.download = 'Nathan Card - Software Engineer.pdf';
				document.body.appendChild(a);
				a.click();
				a.remove();
			});
	}
	return (
		<div className="navbar text-background drop-shadow-lg">
			<div className="navbar-start">
				<a className="btn-ghost btn text-xl uppercase">Nathan Card</a>
			</div>
			<div className="navbar-end pr-3">
				<button
					onClick={downloadResume}
					className="from-purple-400 to-pink-600 text-2xl font-bold text-white hover:scale-150 hover:bg-gradient-to-r hover:bg-clip-text hover:pr-4 hover:text-transparent"
				>
					Resume
				</button>
			</div>
		</div>
	);
}
