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
    <div className="w-[50%] mx-auto border-2 p-4 flex justify-center items-center my-2 rounded-md">
      <form onSubmit={submitHandler} className="w-full ">
        <label className="text-3xl font-semibold" htmlFor="">
          Search Your Image
        </label>
        <input
          onChange={changeHandler}
          value={query}
          type="text"
          placeholder="Search here"
          className="input input-bordered w-full mt-2"
        />
      </form>
    </div>
  );
};

export default SearchBar;
