import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Body from "./components/Body";
import CreateBookmark from "./components/CreateBookmark";

function App() {
  const [openForm, setOpenForm] = useState(false);
  return (
    <>
      <Header setOpenForm={setOpenForm} />
      {openForm && <CreateBookmark setOpenForm={setOpenForm} />}
      <div className="grid grid-cols-5 px-4 overflow-x-hidden">
        <div className="col-span-1">
          <Nav />
        </div>
        <div className="col-span-4 w-screen bg-neutral-200">
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
