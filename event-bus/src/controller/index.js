import axios from "axios";

export const handlePostEvents = async (req, res) => {
  try {
    const event = req.body;
    console.log(event);

    // await axios.post(`${process.env.POST_SERVICE}/events`, event);
    // await axios.post(`${process.env.COMMENT_SERVICE}/events`, event);

    res.send({ status: "OK" });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      status: err.status || "Server error",
      message: err.message,
    });
  }
};
