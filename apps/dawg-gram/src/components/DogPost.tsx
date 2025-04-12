import React from "react";
import { DogPost, useDogStore } from "../stores/dogStore";

interface Props {
  post: DogPost;
  currentUserId: string;
}

const DogPost: React.FC<Props> = ({ post, currentUserId }) => {
  const toggleLike = useDogStore((s) => s.toggleLike);
  const liked = post.likes.has(currentUserId);

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mb-4 max-w-md mx-auto">
      <img
        src={post.imageUrl}
        alt="dog post"
        className="rounded-xl w-full object-cover mb-2"
      />
      <div className="text-sm text-gray-700 mb-1">{post.caption}</div>
      <div className="flex items-center justify-between">
        <button
          onClick={() => toggleLike(post.id, currentUserId)}
          className={`text-sm font-medium px-2 py-1 rounded ${
            liked ? "bg-pink-200 text-pink-600" : "bg-gray-200 text-gray-700"
          }`}
        >
          ❤️ {post.likes.size}
        </button>
        <div className="text-xs text-gray-400">
          Posted by: <span className="font-mono">{post.userId}</span>
        </div>
      </div>
    </div>
  );
};

export default DogPost;