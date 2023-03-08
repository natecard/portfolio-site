import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

export default function RouteSwitch() {
	return (
		<BrowserRouter basename="/">
			<ParallaxProvider>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/about" element={<AboutMe />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</ParallaxProvider>
		</BrowserRouter>
	);
}
