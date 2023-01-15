import React, { useState } from 'react';
import Contact from './Contact';
import Header from './Header';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <Header />
      <Contact />
    </div>
  );
}

export default App;
