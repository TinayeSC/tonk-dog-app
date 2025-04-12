import React from "react";
import { Route, Routes } from "react-router-dom";
import { PixelArtView } from "./views";

const App: React.FC = () => {
  return (
   <div className="flex justify-center items-center h-screen bg-neutral-100">
      <PixelArtView />
    </div>
  );
};

export default App;
