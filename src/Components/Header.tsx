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
				<button onClick={downloadResume} className="p-4 text-white">
					Resume
				</button>
			</div>
		</div>
	);
}
