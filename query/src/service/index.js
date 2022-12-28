const posts = [];

export const getPosts = async () => {
  return posts;
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
