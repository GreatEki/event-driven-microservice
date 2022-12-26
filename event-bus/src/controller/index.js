import axios from "axios";

export const handlePostEvents = async (req, res) => {
  try {
    const event = req.body;

    await axios.post(`http://localhost:4000/api/post/events`, event);
    await axios.post(`http://localhost:4001/api/comment/events`, event);
    await axios.post(`http://localhost:5001/api/query/events`, event);

    res.send({ status: "OK" });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      status: err.status || "Server error",
      message: err.response.data,
    });
  }
};
