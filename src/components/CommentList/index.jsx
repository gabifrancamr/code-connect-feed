import React from "react";
import Comment from "../Comment";
import styles from "./commentList.module.css";

const CommentList = ({ comments }) => {
  return (
    <div className={styles.comments}>
      <h2>Comentários</h2>
      <ul>
        {comments.map((comment) => (
          <li>
            <Comment comment={comment} key={comment.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
