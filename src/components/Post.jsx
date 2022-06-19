import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={"https://github.com/abimaelst.png"} />
          <div className={styles.authorInfo}>
            <strong>Abimael Tavares</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2022-06-18 17:25:00" title="June 18, 2022">
          Publish 1h ago
        </time>
      </header>

      <div className={styles.content}>
        <p>Hello guys! </p>

        <p>
          I come up my in profile a new project. This project have made with
          React Js and a use css modules to organized the styles.
        </p>

        <p>
          {" "}
          <a href="#">abimaelst/feed</a>
        </p>

        <p>
          <a href="#">#newproject</a> <a href="#">#reactjs</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Feedback</strong>
        <textarea placeholder="send your commentary"></textarea>
        <footer>
          <button type="submit">send</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
