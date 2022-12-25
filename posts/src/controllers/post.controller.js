import * as postService from "../services/post.js";

export const createPostController = (req, res) => {
  try {
    const { content } = req.body;

    const createdPost = postService.createPost(content);

    return res.json({
      success: true,
      data: createdPost,
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      status: err.status || "Server error",
      message: err.message,
    });
  }
};

export const getPostsController = (req, res) => {
  try {
    const posts = postService.getPosts();

    return res.json({
      success: true,
      data: posts,
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      status: err.status || "Server error",
      message: err.message,
    });
  }
};
