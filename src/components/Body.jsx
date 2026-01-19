import React from "react";
import useBookmarks from "./useBookmarks";

const Body = () => {
  const { bookmarks } = useBookmarks();
  return (
    <div className="grid grid-cols-3">
      {bookmarks ? (
        <p>No Bookmarks Found</p>
      ) : (
        bookmarks.map((bookmark) => {
          <a
            key={bookmark.id}
            href={bookmark.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <img
                  src={`https://www.google.com/s2/favicons?domain=${bookmark.url}&sz=64`}
                  alt="favicon"
                />
              </div>
              <div className="col-span-1">
                <p>{bookmark.site}</p>
                <p>{bookmark.url}</p>
              </div>
              <div className="col-span-1">
                <button>click</button>
              </div>
            </div>
            <div>{bookmark.desc}</div>
          </a>;
        })
      )}
    </div>
  );
};

export default Body;
