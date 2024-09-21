import { useState } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from "./sidebar";
import "./App.css";

function App() {
  return (
    <main>
      <button className="sidebar__btn">
        <FaBars />
      </button>
      <SideBar />
    </main>
  );
}

export default App;
