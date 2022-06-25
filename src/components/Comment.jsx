import { Avatar } from "./Avatar";
import { ThumbsUp } from "phosphor-react";
import { Trash } from "phosphor-react";

import styles from "./Comment.module.css";
import { useState } from "react";

export function Comment({ content, deleteComment }) {
  const [likeCount, setLikeCount] = useState(0);
  function handleDeleteComment() {
    deleteComment(content);
  }
  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }
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

            <button
              onClick={handleDeleteComment}
              title="Delete your commentary"
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Like
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
