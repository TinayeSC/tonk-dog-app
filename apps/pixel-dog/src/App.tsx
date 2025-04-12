import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HelloWorld from './views/HelloWorld';
import PixelArtView from './views/PixelArtView';

const App = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="max-w-4xl mx-auto flex gap-4">
          <Link to="/" className="text-white hover:text-gray-300">Counter</Link>
          <Link to="/pixel-art" className="text-white hover:text-gray-300">Pixel Art Dogs</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HelloWorld />} />
        <Route path="/pixel-art" element={<PixelArtView />} />
      </Routes>
    </div>
  );
};

export default App;