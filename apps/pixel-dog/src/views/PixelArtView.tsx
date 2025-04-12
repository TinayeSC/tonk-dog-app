import React, { useState, useEffect } from 'react';
import PixelDog from '../components/PixelDog';

const PixelArtView = () => {
  const [position, setPosition] = useState({ x: 5, y: 5 });
  const [frame, setFrame] = useState(0); // To toggle between frames
  const scale = 1; // Scale to make the dog bigger or smaller
  const containerSize = 10; // Grid size for the container (10x10)

  const dogSize = 128; // The actual size of the dog (32x32 px)
  const scaledDogSize = dogSize * scale; // Scaled size

  // Handle movement
  const move = (dx: number, dy: number) => {
    setPosition((prev) => {
      const newX = Math.min( Math.abs(Math.max(prev.x + dx, 0)), 4);
      const newY = Math.min(Math.abs(Math.max(prev.y + dy, 0)), 4);
     
      return {
        x: newX,
        y: newY,
      };
    });
  };

  // Toggle frame on click
  const handleDogClick = () => {
    setFrame((prev) => (prev === 0 ? 1 : 0)); // Toggle frame between 0 and 1
  };

  // Handle keypress for movement
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          move(1, 0);
          break;
        case 'ArrowLeft':
          move(-1, 0);
          break;
        case 'ArrowUp':
          move(0, -1);
          break;
        case 'ArrowDown':
          move(0, 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <section className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Pixel Art Dog</h1>
            <p className="text-gray-600 mt-2">Use arrow keys to move Moose around! Click to change frames.</p>
          </div>
          <div
            className="relative bg-gray-100 rounded-lg"
            style={{
              position: 'relative',
              width: `${(containerSize * scaledDogSize)/2}px`,
              height: `${(containerSize * scaledDogSize)/2}px`,
            }}
          >
            <PixelDog
              x={position.x}
              y={position.y}
              spriteUrl="/icons/doggonew.png" // Use your sprite image
              frame={frame} // Pass the current frame
              onClick={handleDogClick} // Toggle frame on click
              scale={scale}
            />
          </div>
          <div className="mt-4 flex justify-center gap-2">
            <button
              onClick={() => move(-1, 0)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => move(0, -1)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              ↑
            </button>
            <button
              onClick={() => move(0, 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              ↓
            </button>
            <button
              onClick={() => move(1, 0)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PixelArtView;
