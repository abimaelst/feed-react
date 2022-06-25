import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["this post is cool!"]);
  const [newCommentText, setNewCommentText] = useState("");
  const publishedDataFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }
  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }
  function deleteComment(commentToDelete) {
    const commentWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentWithoutDeletedOne);
  }
  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }
  const isNewCommentIsEmpty = newCommentText.length === 0;
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          dateTime={publishedAt.toISOString()}
          title={publishedDataFormatted}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === "paragraph") {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={index}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Feedback</strong>
        <textarea
          name="comment"
          placeholder="send your commentary"
          value={newCommentText}
          required
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
        ></textarea>
        <footer>
          <button type="submit" disabled={isNewCommentIsEmpty}>
            send
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return (
            <Comment
              key={index}
              content={comment}
              deleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
