import axios from "axios";
import config from "../config/config.js";

export const handlePostEvents = async (req, res) => {
  try {
    const event = req.body;

    axios.post(`${config.POST_SERVICE}/events`, event);
    axios.post(`${config.COMMENT_SERVICE}/events`, event);

    res.send({ status: "OK" });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      status: err.status || "Server error",
      message: err.message,
    });
  }
};
