import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export type Post = {
  id?: string;
  communityId: string;
  creatorId: string;
  creatorName: string;
  title: string;
  body?: string;
  numberOfComments: number;
  voteCount: number;
  communityImageUrl?: string;
  imageUrl?: string;
  createdAt: Timestamp;
};

interface PostState {
  selectedPost: Post | null;
  posts: Post[];
  // postVotes
}

const defaultPostState: PostState = {
  selectedPost: null,
  posts: [],
};

export const postState = atom({ key: "postState", default: defaultPostState });
