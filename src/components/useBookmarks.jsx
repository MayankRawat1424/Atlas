import { useState, useEffect } from "react";

function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const stored = localStorage.getItem("bookmarks");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (site, url, tags, desc) => {
    setBookmarks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        site,
        url,
        tags,
        desc,
      },
    ]);
  };

  const removeBookmark = (id) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
  };

  const updateBookmark = (id, data) => {
    setBookmarks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, ...data } : b)),
    );
  };

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
    updateBookmark,
  };
}

export default useBookmarks;
