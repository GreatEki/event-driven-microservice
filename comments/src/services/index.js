import { randomBytes } from "crypto";
import axios from "axios";

const commentsDB = {};

export const addCommentOnPost = ({ postId, content }) => {
  const commentId = randomBytes(4).toString("hex");

  const comments = commentsDB[postId] || [];

  const newComment = { id: commentId, postId, content, status: "pending" };

  comments.push(newComment);

  commentsDB[postId] = comments;

  return newComment;
};

export const getCommentsOnPost = (postId) => {
  return commentsDB[postId];
};

export const emitEventToEventBus = async ({ type, data }) => {
  const result = await axios.post(`${process.env.EVENT_BUS_SERVICE}`, {
    type,
    data,
  });
  return result.data;
};

export const handleCommentModeratedEvent = (data) => {
  const { id, postId, content, status } = data;

  const comments = commentsDB[postId];

  const theComment = comments.find((comment) => comment.id === id);

  theComment.status = status;

  return theComment;
};
