import React, { useState } from "react";
import { useDogStore } from "../stores/dogStore";

const UploadDog = ({  }: {  }) => {
  const addPost = useDogStore((s) => s.addPost);
  const [caption, setCaption] = useState("");
  const[userId,setUser] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = () => {
    if (!imageUrl) return;
    addPost(userId, imageUrl, caption);
    setImageUrl("");
    setCaption("");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">📤 Upload a Dog Photo</h2>
      <input
        type="text"
        placeholder="Image URL"
        className="w-full mb-2 px-3 py-2 border rounded-lg"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Caption (optional)"
        className="w-full mb-2 px-3 py-2 border rounded-lg"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <input
        type="text"
        placeholder="User ID"
        className="w-full mb-2 px-3 py-2 border rounded-lg"
        value={userId}
        onChange={(e) => setUser(e.target.value)}
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Upload
      </button>
    </div>
  );
};

export default UploadDog;