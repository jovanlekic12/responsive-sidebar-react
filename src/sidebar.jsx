import React from "react";
import { links, social } from "./data.jsx";
import { ImCross } from "react-icons/im";
import logo from "./logo.svg";
import { useState } from "react";

function SideBar({ isOpened, setIsOpened }) {
  return (
    <aside className={isOpened ? "sidebar" : "sidebar closed"}>
      <div className="logo__div">
        <img src={logo} alt="404" />
        <ImCross onClick={() => setIsOpened(!isOpened)} />
      </div>
      <ul className="links__list">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="socials__list">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default SideBar;
