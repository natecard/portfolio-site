import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="main">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
