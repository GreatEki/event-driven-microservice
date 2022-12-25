import { randomBytes } from "crypto";

const postsDB = [];

export const createPost = (post) => {
  const id = randomBytes(4).toString("hex");

  const newPost = { id, content: post };

  postsDB.push(newPost);

  return newPost;
};

export const getPosts = () => {
  return postsDB;
};
