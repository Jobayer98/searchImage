import axios from "axios";

const searchImages = async () => {
  const url = "https://api.unsplash.com/search/photos";
  const response = await axios.get(url, {
    headers: {
      Authorization: "Client-ID VJJ1XX_9_BbF7S7fsz9HJ7lpjDUltmtQnTBW1ehh2dg",
    },
    params: {
      query: "car",
    },
  });

  return response;
};

export default searchImages;
