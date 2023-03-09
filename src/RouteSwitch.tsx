import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App';

export default function RouteSwitch() {
	return (
		<BrowserRouter basename="/">
			<ParallaxProvider>
				<Routes>
					<Route path="/" element={<App />} />
				</Routes>
			</ParallaxProvider>
		</BrowserRouter>
	);
}
