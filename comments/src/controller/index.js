import * as service from "../services/index.js";

export const addCommentController = async (req, res) => {
  try {
    const { postId } = req.params;
    const { content } = req.body;

    const comment = service.addCommentOnPost({ postId, content });

    await service.emitEventToEventBus({
      type: "CommentAdded",
      data: { ...comment, postId },
    });

    return res.json({
      success: true,
      data: comment,
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      status: err.status || "Server error",
      message: err.response?.data,
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

export const handlePostRequestFromEventBus = async (req, res) => {
  try {
    console.log("Received events", req.body.type);

    return res.status(200).json({ status: "OK" });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      status: err.status || "Server error",
      message: err.response?.data,
    });
  }
};
