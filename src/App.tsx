import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
	return (
		<div className="main">
			<Header />
			<Routes>
				<Route path="/" element={<Contact />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
