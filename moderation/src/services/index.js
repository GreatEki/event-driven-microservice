import axios from "axios";

export const emitEventToEventBus = async ({ type: data }) => {
  const result = await axios.post(`${process.env.EVENT_BUS_SERVICE}`, {
    type,
    data,
  });
  return result.data;
};
