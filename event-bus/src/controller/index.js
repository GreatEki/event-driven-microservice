import axios from "axios";

const eventsStore = [];

export const handlePostEvents = async (req, res) => {
  try {
    const event = req.body;

    eventsStore.push(event);

    await axios.post(`${process.env.POST_SERVICE}/events`, event);
    await axios.post(`${process.env.COMMENT_SERVICE}/events`, event);
    await axios.post(`${process.env.MODERATION_SERVICE}/events`, event);
    await axios.post(`${process.env.QUERY_SERVICE}/events`, event);

    res.send({ status: "OK" });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      status: err.status || "Server error",
      message: err.response?.data || err.message,
    });
  }
};

export const handleGetEvents = async (req, res) => {
  res.send(eventsStore);
};
