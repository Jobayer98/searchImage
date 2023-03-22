import { useState } from "react";
import searchImages from "./Api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

function App() {
  const [images, setImages] = useState([]);
  const searchQuery = async (query) => {
    const data = await searchImages(query);
    setImages(data);
  };
  return (
    <>
      <SearchBar onSearch={searchQuery} />
      <ImageList images={images} />
    </>
  );
}

export default App;
