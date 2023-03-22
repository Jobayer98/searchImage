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
      <div className="flex justify-center my-8">
        <h1 className="text-3xl font-bold">Welcome Search Image App</h1>
      </div>
      <SearchBar onSearch={searchQuery} />
      <ImageList images={images} />
    </>
  );
}

export default App;
