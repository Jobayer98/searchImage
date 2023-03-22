import React from "react";

import "./SearchBar.css";

const SearchBar = () => {
  return (
    <form>
      <div className="flex justify-center gap-3">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <button className="btn btn-info text-slate-100">Search</button>
      </div>
    </form>
  );
};

export default SearchBar;
