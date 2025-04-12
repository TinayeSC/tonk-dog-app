import { create } from 'zustand';
import { sync } from '@tonk/keepsync';

interface Position {
  x: number;
  y: number;
}

interface PixelArtState {
  position: Position;
  moveRight: () => void;
  moveLeft: () => void;
  moveUp: () => void;
  moveDown: () => void;
}

export const usePixelArtStore = create<PixelArtState>(
  sync(
    (set) => ({
      position: { x: 0, y: 0 },
      moveRight: () => set((state) => ({ position: { ...state.position, x: state.position.x + 1 } })),
      moveLeft: () => set((state) => ({ position: { ...state.position, x: state.position.x - 1 } })),
      moveUp: () => set((state) => ({ position: { ...state.position, y: state.position.y - 1 } })),
      moveDown: () => set((state) => ({ position: { ...state.position, y: state.position.y + 1 } })),
    }),
    {
      docId: 'pixel-dog-position'
    }
  )
); 