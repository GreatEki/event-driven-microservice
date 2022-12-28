import * as services from "../services/index.js";

export const handlePostRequestFromEventBus = async (req, res) => {
  try {
    const { type, data } = req.body;

    if (type === "CommentAdded") {
      const status = data.content?.includes("orange") ? "rejected" : "approved";
      await services.emitEventToEventBus({
        type: "CommentModerated",
        ...data,
        status,
      });
    }
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      status: err.status || "Server error",
      message: err?.response?.data,
    });
  }
};
