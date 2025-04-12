import React from 'react';

interface PixelProps {
  x: number;
  y: number;
  color: string;
}

const Pixel: React.FC<PixelProps> = ({ x, y, color }) => (
  <div
    style={{
      gridColumn: x + 1,
      gridRow: y + 1,
      backgroundColor: color,
      width: '100%',
      height: '100%',
    }}
  />
);

interface PixelDogProps {
  x: number;
  y: number;
}

const PixelDog: React.FC<PixelDogProps> = ({ x, y }) => {
  // More recognizable pixel dog (8x8 grid)
  const dogPattern = [
    [0,0,0,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,0,0],
    [0,1,1,2,1,1,2,1,1,0],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,3,1,1,1,1,3,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,0,0],
    [0,1,1,0,0,0,0,1,1,0],
    [1,1,0,0,0,0,0,0,1,1],
    [0,0,1,0,0,0,0,1,0,0],
  ];

  const getColor = (value: number) => {
    switch (value) {
      case 1:
        return "#8B4513"; // main dog color
      case 2:
        return "#000"; // eyes
      case 3:
        return "#333"; // nose
      case 0:
      default:
        return "#e5e7eb"; // light grey background
    }
  };

  return (
    <>
      {dogPattern.map((row, rowIndex) =>
  row.map((pixel, colIndex) => (
    <Pixel
      key={`${rowIndex}-${colIndex}`}
      x={x + colIndex}
      y={y + rowIndex}
      color={getColor(pixel)}
    />
  ))
)}
    </>
  );
  
};

export const PixelWorld: React.FC = () => {
  const gridSize = 32; // 32x32 grid

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${gridSize}, 16px)`,
        gridTemplateRows: `repeat(${gridSize}, 16px)`,
        backgroundColor: '#87CEEB', // sky blue
        width: gridSize * 16,
        height: gridSize * 16,
        border: '2px solid #333',
        position: 'relative',
      }}
    >
      {/* Ground (grass) */}
      {Array.from({ length: gridSize }).map((_, col) =>
        <Pixel key={`grass-${col}`} x={col} y={28} color="#228B22" />
      )}

      {/* Dog walking on the grass */}
      <PixelDog x={12} y={20} />
    </div>
  );
};

export default PixelDog;
