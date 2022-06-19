import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import style from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1655419156879-5d3bec84d612?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      />
      <div className={style.profile}>
        <Avatar src={"https://github.com/abimaelst.png"} />
        <strong>Abimael Tavares</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <PencilLine size={20} />
          Edit Profile
        </a>
      </footer>
    </aside>
  );
}
