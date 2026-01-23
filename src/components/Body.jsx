const Body = () => {
  const { bookmarks } = useBookmarksContext();

  if (bookmarks.length === 0) {
    return <p>No Bookmarks Found</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {bookmarks.map((bookmark) => (
        <a
          key={bookmark.id}
          href={bookmark.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block border p-3 rounded hover:bg-neutral-100"
        >
          <div className="grid grid-cols-3 gap-2 items-center">
            <img
              src={`https://www.google.com/s2/favicons?domain=${bookmark.url}&sz=64`}
              alt=""
              className="w-6 h-6"
            />

            <div className="col-span-2">
              <p className="font-medium">{bookmark.title}</p>
              <p className="text-sm text-neutral-500">{bookmark.url}</p>
            </div>
          </div>

          {bookmark.description && (
            <p className="mt-2 text-sm">{bookmark.description}</p>
          )}
        </a>
      ))}
    </div>
  );
};

export default Body;
