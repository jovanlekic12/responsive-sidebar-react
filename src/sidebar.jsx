import React from "react";
import { links, social } from "./data.jsx";
import { FaHome } from "react-icons/fa";
import logo from "./logo.svg";

function SideBar() {
  return (
    <aside className="sidebar">
      <img src={logo} alt="404" />
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
