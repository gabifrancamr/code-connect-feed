import Image from "next/image";
import React from "react";
import Avatar from "../Avatar";
import styles from "./card.module.css";
import Link from "next/link";

const CardPost = ({ post, highlight }) => {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.link} >
      <article className={styles.card} style={{ width: highlight ? 993 : 486}}>
        <header className={styles.header}>
          <figure style={{ height: highlight ? 300 : 133}}>
            <Image
              src={post.cover}
              fill
              alt={`Capa do post: ${post.title}`}
            />
          </figure>
        </header>
        <section className={styles.body}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </section>
        <footer className={styles.footer}>
          <Avatar imageSrc={post.author.avatar} name={post.author.username} />
        </footer>
      </article>
    </Link>
  );
};

export default CardPost;
