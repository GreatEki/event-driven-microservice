import axios from "axios";

const posts = [];

export const getPosts = async () => {
  return posts;
};

export const handleIncomingEvents = (type, data) => {
  switch (type) {
    case "PostCreated":
      handlePostCreatedEvent(data);
      break;
    case "CommentAdded":
      handleCommentAddedEvent(data);
      break;
    case "CommentUpdated":
      handleCommentUpdatedEvent(data);
    default:
      // service.handlePostCreatedEvent(data);
      break;
  }

  return;
};

export const handlePostCreatedEvent = (data) => {
  const { id, content } = data;

  posts[id] = { id, content, comments: [] };
  return;
};

export const handleCommentAddedEvent = (data) => {
  const { id, content, postId, status } = data;

  const post = posts[postId];

  post.comments.push({ id, content, postId, status });
  // console.log(post);
};

export const handleCommentUpdatedEvent = (data) => {
  const { id, postId, content, status } = data;

  const post = posts[postId];

  const comment = post.comments.find((comment) => comment.id === id.toString());

  comment.content = content;
  comment.status = status;
  return comment;
};

export const getAllEventsFromEventBus = async () => {
  try {
    const result = await axios.get(`${process.env.EVENT_BUS_SERVICE}`);

    for (let event of result.data) {
      console.log("Processing event", event.type);
      handleIncomingEvents(event.type, event.data);
    }
  } catch (err) {
    console.log(err);
  }
};
