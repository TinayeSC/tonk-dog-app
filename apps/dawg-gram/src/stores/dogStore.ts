import { create } from "zustand";
import { sync } from "@tonk/keepsync"; // if you're syncing state
import { nanoid } from "nanoid";

export interface DogPost {
  id: string;
  userId: string;
  imageUrl: string;
  caption?: string;
  likes: Set<string>;
  timestamp: number;
}

interface DogStore {
  posts: DogPost[];
  addPost: (userId: string, imageUrl: string, caption?: string) => void;
  toggleLike: (postId: string, userId: string) => void;
}

export const useDogStore = create<DogStore>((set, get) => ({
  posts: [],
  addPost: (userId, imageUrl, caption = "") => {
    const newPost: DogPost = {
      id: nanoid(),
      userId,
      imageUrl,
      caption,
      likes: new Set(),
      timestamp: Date.now(),
    };
    set((state) => ({ posts: [newPost, ...state.posts] }));
  },
  toggleLike: (postId, userId) => {
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.likes.has(userId)
                ? new Set([...post.likes].filter((id) => id !== userId))
                : new Set([...post.likes, userId]),
            }
          : post
      ),
    }));
  },
  docId: "dog-feed" 
}));
    