import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App';
import Projects from './Components/Projects';

export default function RouteSwitch() {
	return (
		<BrowserRouter basename="/">
			<ParallaxProvider>
				<Routes>
					<Route path="/" element={<App />} />
					<Route
						path="Projects"
						element={
							<Projects
								title={''}
								img={''}
								language1={''}
								language2={''}
								language3={''}
								language1Icon={''}
								language2Icon={''}
								language3Icon={''}
								readme={''}
								githubUrl={''}
								liveDemo={''}
							/>
						}
					/>
				</Routes>
			</ParallaxProvider>
		</BrowserRouter>
	);
}
