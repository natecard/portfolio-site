import resume from '../../Nathan Card - Software Engineer.pdf';
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
					className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-2xl font-bold text-transparent hover:animate-pulse"
				>
					Resume
				</button>
			</div>
		</div>
	);
}
