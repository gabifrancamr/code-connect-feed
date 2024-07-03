import Image from "next/image";
import React from "react";
import styles from './comment.module.css'

const Comment = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <Image src={comment.author.avatar} width={32} height={32} alt={`Avatar do(a) ${comment.author.name}`} />
      <strong>
        @{comment.author.name}
      </strong>
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;
