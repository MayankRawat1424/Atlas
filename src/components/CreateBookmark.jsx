import { useState } from "react";
// import { useBookmarksContext } from "./context/BookmarksContext";

const CreateBookmark = ({ setOpenForm }) => {
  // const { addBookmark } = useBookmarksContext();
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState("");
  const [desc, setDesc] = useState("");
  const [site, setSite] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();

    if (!url.trim()) return;

    // addBookmark({
    //   title: site.trim(),
    //   url: url.trim(),
    //   tags: tags
    //     .split(",")
    //     .map((t) => t.trim().toLowerCase())
    //     .filter(Boolean),
    //   description: desc.trim(),
    // });
    // console.log("BookMark Created");

    setSite("");
    setUrl("");
    setTags("");
    setDesc("");
    setOpenForm(false);
  };

  return (
    <div className="absolute z-10 bg-neutral-50 border-2 border-neutral-400 rounded-lg p-4">
      <div className="flex justify-between">
        <h1>Add Bookmark</h1>
        <button
          onClick={() => {
            setOpenForm(false);
          }}
        >
          Close
        </button>
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Title</label>
        <input
          type="text"
          value={site}
          onChange={(e) => {
            setSite(e.target.value);
          }}
          className="border border-neutral-300 focus:outline-none focus:border-neutral-800"
        />

        <label htmlFor="">Url</label>
        <input
          type="text"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          className="border border-neutral-300 focus:outline-none focus:border-neutral-800"
        />

        <label htmlFor="">Tags</label>
        <input
          type="text"
          value={tags}
          onChange={(e) => {
            setTags(e.target.value);
          }}
          className="border border-neutral-300 focus:outline-none focus:border-neutral-800"
        />

        <label htmlFor="">Description</label>
        <textarea
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          name=""
          id=""
          className="border border-neutral-300 focus:outline-none focus:border-neutral-800"
        ></textarea>
      </div>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreateBookmark;
