import SearchBar from "./SearchBar";

const Header = ({ setOpenForm }) => {
  return (
    <>
      <div className="grid grid-cols-5 px-4 bg-neutral-50">
        <div className="flex gap-2 items-center col-span-1 border-r-2 border-neutral-200 py-1">
          <img src="../../public/vite.svg" alt="Logo" height={50} width={50} />
          <h1 className="text-2xl font-serif">Atlas .</h1>
        </div>
        <div className="py-1 flex items-center justify-between col-span-4 pl-4">
          <SearchBar />
          <button
            className="bg-teal-800 py-2 px-4 rounded text-sm text-white hover:bg-teal-900 hover:cursor-pointer"
            onClick={() => {
              setOpenForm(true);
            }}
          >
            Add Bookmark
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
