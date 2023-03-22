import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="flex justify-center my-8">
        <h1 className="text-3xl font-bold">Welcome Search Image App</h1>
      </div>
      <SearchBar />
      <ImageList />
    </>
  );
}

export default App;
