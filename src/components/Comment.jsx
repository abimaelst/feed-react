import { Avatar } from "./Avatar";
import { ThumbsUp } from "phosphor-react";
import { Trash } from "phosphor-react";

import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={"https://github.com/abimaelst.png"} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Abimael Tavares</strong>
              <time title="June 18 at 23:04h" dateTime="2022-06-18 24:04:00">
                around a 1h ago
              </time>
            </div>

            <button title="Delete your commentary">
              <Trash size={24} />
            </button>
          </header>
          <p>Very nice Dominic, congrats!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Like
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
