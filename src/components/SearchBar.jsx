import React from "react";

const SearchBar = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by title..."
        className="border-neutral-300 border-2 px-2 py-1 focus:outline-none focus:border-neutral-800 rounded lg:w-2xs"
      />
    </div>
  );
};

export default SearchBar;
