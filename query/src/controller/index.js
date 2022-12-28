import * as service from "../service/index.js";

export const handlePostEventCreatedController = async (req, res) => {
  try {
    const { type, data } = req.body;

    console.log(type);

    service.handleIncomingEvents(type, data);

    return res.status(200).json({
      status: "OK",
      message: "Query service received Event",
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      status: err.status || "Server error",
      message: err.response?.data,
    });
  }
};

export const getPostsController = async (req, res) => {
  try {
    const posts = await service.getPosts();

    return res.send(posts);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      status: err.status || "Server error",
      message: err.message,
    });
  }
};
