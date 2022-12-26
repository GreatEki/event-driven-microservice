import * as postService from "../services/post.js";

export const createPostController = async (req, res) => {
  try {
    const { content } = req.body;

    const createdPost = postService.createPost(content);

    await postService.emitPostToEventBus({
      type: "PostCreated",
      data: createdPost,
    });

    return res.json({
      success: true,
      data: createdPost,
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      status: err.status || "Server error",
      message: err,
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

export const handlePostRequestFromEventBus = async (req, res) => {
  try {
    console.log("Received event", req.body.type);

    return res.status(200).json({
      status: "OK",
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      status: err.status || "Server error",
      message: err.message,
    });
  }
};
