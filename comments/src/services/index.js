import { randomBytes } from "crypto";

const commentsDB = {};

export const addCommentOnPost = ({ postId, content }) => {
  const commentId = randomBytes(4).toString("hex");

  const comments = commentsDB[postId] || [];

  const newComment = { id: commentId, content };

  comments.push(newComment);

  commentsDB[postId] = comments;

  return newComment;
};

export const getCommentsOnPost = (postId) => {
  return commentsDB[postId];
};
