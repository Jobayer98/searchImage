import React, { useState } from "react";

import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const changeHandler = (e) => {
    const searchValue = e.target.value;
    setQuery(searchValue);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (query.trim().length > 0) {
      onSearch(query);
    }
    setQuery("");
  };
  return (
    <div className="w-[40%] mx-auto">
      <form onSubmit={submitHandler} className="mb-8">
        <input
          onChange={changeHandler}
          value={query}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full"
        />
      </form>
    </div>
  );
};

export default SearchBar;
