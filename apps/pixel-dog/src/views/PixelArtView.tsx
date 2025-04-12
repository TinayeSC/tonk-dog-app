import React, { useEffect } from 'react';
import { usePixelArtStore } from '../stores/pixelArtStore';
import PixelDog from '../components/PixelDog';

const PixelArtView = () => {
  const { position, moveRight, moveLeft, moveUp, moveDown } = usePixelArtStore();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          moveRight();
          break;
        case 'ArrowLeft':
          moveLeft();
          break;
        case 'ArrowUp':
          moveUp();
          break;
        case 'ArrowDown':
          moveDown();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [moveRight, moveLeft, moveUp, moveDown]);

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <section className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Pixel Art Dogs</h1>
            <p className="text-gray-600 mt-2">Use arrow keys to move the dog around!</p>
          </div>
          <div 
            className="relative bg-gray-100 rounded-lg"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(32, 1fr)',
              gridTemplateRows: 'repeat(32, 1fr)',
              gap: '1px',
              aspectRatio: '1',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            <PixelDog x={position.x} y={position.y} />
          </div>
          <div className="mt-4 flex justify-center gap-2">
            <button
              onClick={moveLeft}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              ←
            </button>
            <button
              onClick={moveUp}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              ↑
            </button>
            <button
              onClick={moveDown}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              ↓
            </button>
            <button
              onClick={moveRight}
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