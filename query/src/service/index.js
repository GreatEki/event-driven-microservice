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
  const { id, content, postId } = data;

  const post = posts[postId];

  post.comments.push({ id, content });
  // console.log(post);
};
