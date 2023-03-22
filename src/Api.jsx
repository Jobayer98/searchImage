import axios from "axios";

const searchImages = async (searchValue) => {
  const url = "https://api.unsplash.com/search/photos";
  const response = await axios.get(url, {
    headers: {
      Authorization: "Client-ID VJJ1XX_9_BbF7S7fsz9HJ7lpjDUltmtQnTBW1ehh2dg",
    },
    params: {
      query: searchValue,
    },
  });

  return response.data.results;
};

export default searchImages;
