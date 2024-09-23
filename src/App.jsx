import { useState } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from "./sidebar";
import "./App.css";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <main>
      <button onClick={() => setIsOpened(!isOpened)} className="sidebar__btn">
        <FaBars />
      </button>
      <SideBar isOpened={isOpened} setIsOpened={setIsOpened} />
    </main>
  );
}

export default App;
