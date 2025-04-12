import React from "react";
import { Route, Routes ,Link} from "react-router-dom";
import FeedView from "./views/FeedView";
import UploadDog from "./views/UploadDog";

function App() {
  const userId = "user123"; // simulate auth for now

  return(<div>
      <nav className="bg-[#9E1B32] p-4 flex space-x-4">
        <Link to="/" className="text-white hover:text-[#4F4F4F]">Feed</Link>
        <Link to="/upload" className="text-white hover:text-[#4F4F4F]">Upload</Link>
      </nav>
      <Routes>
        <Route path="/" element={<FeedView currentUserId={userId} />} />
        <Route path="/upload" element={<UploadDog userId={userId} />}/>
      </Routes>
    </div>);
}

export default App;