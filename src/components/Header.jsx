import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <SearchBar />
      <button>Add Bookmark</button>
    </div>
  );
};

export default Header;
