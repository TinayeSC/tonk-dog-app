import React from "react";
import { useDogStore } from "../stores/dogStore";
import DogPost from "../components/DogPost";

const FeedView = ({ currentUserId }: { currentUserId: string }) => {
  const posts = useDogStore((s) => s.posts);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🐶 Dogstagram Feed</h1>
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts yet. Be the first!</p>
      ) : (
        posts.map((post) => (
          <DogPost key={post.id} post={post} currentUserId={currentUserId} />
        ))
      )}
    </div>
  );
};

export default FeedView;