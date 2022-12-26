import { randomBytes } from "crypto";
import axios from "axios";

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

export const emitPostToEventBus = async ({ type, data }) => {
  const result = await axios.post(`${process.env.EVENT_BUS_SERVICE}`, {
    type,
    data,
  });
  return result;
};
