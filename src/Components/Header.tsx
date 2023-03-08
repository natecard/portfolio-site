import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className="bg-blueBlue h-36">
			<div className="flex flex-row items-center">
				<h1 className="text-whiteish mr-auto py-9 pl-24 text-6xl">Nathan Card</h1>
				<svg className="bg-whiteish mr-24 p-2" viewBox="0 0 100 80" width="60" height="60">
					<rect className="fill-blueBlue" width="100" height="5"></rect>
					<rect className="fill-blueBlue" y="35" width="100" height="5"></rect>
					<rect className="fill-blueBlue" y="70" width="100" height="5"></rect>
				</svg>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/projects">Projects</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
