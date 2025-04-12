import React from 'react';

interface PixelDogProps {
  x: number;
  y: number;
  spriteUrl: string;
  frame: number;
  onClick: () => void;
  scale: number;
}

const PixelDog: React.FC<PixelDogProps> = ({ x, y, spriteUrl, frame, onClick, scale }) => {
  // Assuming each frame is 32x32 pixels in the sprite
  const frameWidth = 128;
  const frameHeight = 128;

  // Calculate background position based on the frame
  const backgroundPosition = frame === 0 ? '0 0' : `-1410px 0`; // First frame is at (0, 0), second frame is at (-32px, 0)

  // Scale the size of the div and background image
  const scaledWidth = frameWidth * scale;
  const scaledHeight = frameHeight * scale;

  return (
    <div
      onClick={onClick} // Toggle frame on click
      style={{
        position: 'absolute',
        left: `${x * scaledWidth}px`,
        top: `${y * scaledHeight}px`,
        width: `${scaledWidth}px`,
        height: `${scaledHeight}px`,
        backgroundImage: `url(${spriteUrl})`,
        backgroundSize: `${frameWidth * 2 * scale}px ${frameHeight * scale}px`, // Adjust for two frames
        backgroundPosition: backgroundPosition,
        cursor: 'pointer',
      }}
    ></div>
  );
};

export default PixelDog;
