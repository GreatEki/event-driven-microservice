import * as service from "../services/index.js";

export const addCommentController = async (req, res) => {
  try {
    const { postId } = req.params;
    const { content } = req.body;

    const comment = service.addCommentOnPost({ postId, content });

    await service.postRequestToEventBus({ type: "PostCreated", data: comment });

    return res.json({
      success: true,
      data: { ...comment, postId },
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      status: err.status || "Server error",
      message: err.message,
    });
  }
};

export const getCommentsOnPost = async (req, res) => {
  try {
    const { postId } = req.params;

    const comments = service.getCommentsOnPost(postId);

    return res.json({
      success: true,
      data: comments,
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      status: err.status || "Server error",
      message: err.message,
    });
  }
};
